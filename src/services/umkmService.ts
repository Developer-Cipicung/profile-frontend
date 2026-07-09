import { apiFetch } from "@/src/lib/api";

// The current backend exposes UMKM products through /products.
// Change this single constant if the backend later moves it to /umkm.
const UMKM_ENDPOINT = "/products";

export type UmkmItem = {
  id: string;
  name: string;
  slug?: string;
  seller: string;
  dusun: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
  whatsapp: string;
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

function toPrice(value: unknown) {
  const price = Number(value);
  return Number.isFinite(price) && price >= 0 ? price : 0;
}

function getCategory(value: unknown) {
  if (isRecord(value)) {
    return toText(value.name ?? value.nama, "Produk Lokal");
  }

  return toText(value, "Produk Lokal");
}

export function normalizeUmkmItem(item: unknown): UmkmItem | null {
  if (!isRecord(item)) return null;

  const id = toText(item.id ?? item._id ?? item.slug);

  if (!id) return null;

  return {
    id,
    name: toText(item.name ?? item.nama ?? item.productName, "Produk Lokal"),
    slug: toText(item.slug) || undefined,
    seller: toText(
      item.seller ?? item.penjual ?? item.owner,
      "Pelaku UMKM",
    ),
    dusun: toText(
      item.dusun ?? item.address ?? item.alamat,
      "Desa Cipicung",
    ),
    category: getCategory(item.category ?? item.kategori),
    description: toText(item.description ?? item.deskripsi),
    price: toPrice(item.price ?? item.harga),
    imageUrl: toText(
      item.imageUrl ??
        item.image_url ??
        item.image ??
        item.photo ??
        item.thumbnail ??
        item.thumbnail_url,
    ),
    whatsapp: toText(
      item.whatsapp ?? item.phone ?? item.noWa ?? item.phoneNumber,
    ),
    createdAt: toText(item.createdAt ?? item.created_at) || undefined,
  };
}

function unwrapData(response: unknown) {
  if (isRecord(response) && "data" in response) return response.data;
  return response;
}

function getTotalPages(response: unknown) {
  if (!isRecord(response) || !isRecord(response.pagination)) return 1;

  const totalPages = Number(response.pagination.totalPages);
  return Number.isInteger(totalPages) && totalPages > 1 ? totalPages : 1;
}

function normalizeUmkmList(response: unknown) {
  const data = unwrapData(response);

  if (!Array.isArray(data)) {
    throw new Error(
      "Invalid UMKM list response: expected an array in the response or data field",
    );
  }

  return data
    .map(normalizeUmkmItem)
    .filter((item): item is UmkmItem => item !== null);
}

function deduplicateUmkm(items: UmkmItem[]) {
  return Array.from(new Map(items.map((item) => [item.id, item])).values());
}

export async function getUmkmList(): Promise<UmkmItem[]> {
  const response = await apiFetch<unknown>(UMKM_ENDPOINT);
  const firstPage = normalizeUmkmList(response);
  const totalPages = getTotalPages(response);

  if (totalPages === 1) return deduplicateUmkm(firstPage);

  const remainingPages = await Promise.all(
    Array.from({ length: totalPages - 1 }, (_, index) =>
      apiFetch<unknown>(`${UMKM_ENDPOINT}?page=${index + 2}`),
    ),
  );

  return deduplicateUmkm([
    ...firstPage,
    ...remainingPages.flatMap((page) => normalizeUmkmList(page)),
  ]);
}

export async function getUmkmById(id: string): Promise<UmkmItem> {
  const response = await apiFetch<unknown>(
    `${UMKM_ENDPOINT}/${encodeURIComponent(id)}`,
  );
  const product = normalizeUmkmItem(unwrapData(response));

  if (!product) {
    throw new Error(
      "Invalid UMKM detail response: no valid product item was found",
    );
  }

  return product;
}
