import { apiFetch } from "@/src/lib/api";

export type NewsItem = {
  id: string;
  title: string;
  slug?: string;
  category: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  publishedAt?: string;
  createdAt?: string;
};

type UnknownRecord = Record<string, unknown>;

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function toText(value: unknown, fallback = "") {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  return fallback;
}

function getCategory(value: unknown) {
  if (isRecord(value)) {
    return toText(value.name ?? value.nama, "Berita");
  }

  return toText(value, "Berita");
}

function getContent(value: unknown) {
  if (Array.isArray(value)) {
    return value.map((part) => toText(part)).filter(Boolean).join("\n\n");
  }

  return toText(value);
}

export function normalizeNewsItem(item: unknown): NewsItem | null {
  if (!isRecord(item)) return null;

  const id = toText(item.id ?? item._id ?? item.slug);

  if (!id) return null;

  return {
    id,
    title: toText(item.title ?? item.judul, "Tanpa Judul"),
    slug: toText(item.slug) || undefined,
    category: getCategory(item.category ?? item.kategori),
    excerpt: toText(
      item.excerpt ??
        item.description ??
        item.ringkasan ??
        item.deskripsi ??
        item.content ??
        item.isi,
    ),
    content: getContent(item.content ?? item.isi),
    imageUrl: toText(
      item.imageUrl ??
        item.image_url ??
        item.image ??
        item.thumbnail ??
        item.thumbnail_url ??
        item.photo,
    ),
    publishedAt:
      toText(
        item.publishedAt ??
          item.published_at ??
          item.createdAt ??
          item.created_at ??
          item.tanggal,
      ) || undefined,
    createdAt: toText(item.createdAt ?? item.created_at) || undefined,
  };
}

function unwrapData(response: unknown) {
  if (isRecord(response) && "data" in response) {
    return response.data;
  }

  return response;
}

function getTotalPages(response: unknown) {
  if (!isRecord(response) || !isRecord(response.pagination)) return 1;

  const totalPages = Number(response.pagination.totalPages);
  return Number.isInteger(totalPages) && totalPages > 1 ? totalPages : 1;
}

function normalizeNewsList(response: unknown) {
  const data = unwrapData(response);

  if (!Array.isArray(data)) {
    throw new Error(
      "Invalid news list response: expected an array in the response or data field",
    );
  }

  return data
    .map(normalizeNewsItem)
    .filter((item): item is NewsItem => item !== null);
}

function deduplicateNews(items: NewsItem[]) {
  return Array.from(new Map(items.map((item) => [item.id, item])).values());
}

export async function getNewsList(): Promise<NewsItem[]> {
  const response = await apiFetch<unknown>("/news");
  const firstPage = normalizeNewsList(response);
  const totalPages = getTotalPages(response);

  if (totalPages === 1) return deduplicateNews(firstPage);

  const remainingPages = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, index) =>
      apiFetch<unknown>(`/news?page=${index + 2}`),
    ),
  );

  return deduplicateNews([
    ...firstPage,
    ...remainingPages.flatMap((page) => normalizeNewsList(page)),
  ]);
}

export async function getNewsById(id: string): Promise<NewsItem> {
  const response = await apiFetch<unknown>(`/news/${encodeURIComponent(id)}`);
  const news = normalizeNewsItem(unwrapData(response));

  if (!news) {
    throw new Error("Invalid news detail response: no valid news item was found");
  }

  return news;
}
