import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Home, Eye } from "lucide-react";
import sanitizeHtml from "sanitize-html";
import ApiImage from "@/src/components/common/ApiImage";
import ShareButtons from "@/src/components/berita/ShareButtons";
import { fallbackNews } from "@/src/data/newsFallback";
import { containsHtml, formatNewsDate, getNewsDate } from "@/src/lib/news";
import { createMetaDescription, createSeoMetadata } from "@/src/lib/seo";
import {
  getNewsById,
  getNewsList,
  type NewsItem,
} from "@/src/services/newsService";

type BeritaDetailPageProps = {
  params: Promise<{ id: string }>;
};

function getNewsPath(news: Pick<NewsItem, "id" | "slug">) {
  return `/berita/${encodeURIComponent(news.slug ?? news.id)}`;
}

export async function generateMetadata({ params }: BeritaDetailPageProps) {
  const { id } = await params;
  let news = fallbackNews.find((item) => item.id === id || item.slug === id);

  try {
    news = await getNewsById(id);
  } catch {
    // Keep metadata generation resilient when the public API is unavailable.
  }

  if (!news) {
    return createSeoMetadata({
      title: "Berita Desa",
      description:
        "Informasi terkini kegiatan, pengumuman, dan agenda Desa Cipicung.",
      path: `/berita/${encodeURIComponent(id)}`,
    });
  }

  return createSeoMetadata({
    title: news.title,
    description: createMetaDescription(news.excerpt || news.content),
    path: getNewsPath(news),
  });
}

// ---------------------------------------------------------------------------
// Sidebar card – compact horizontal thumbnail + text
// ---------------------------------------------------------------------------

function SidebarNewsCard({ news }: { news: NewsItem }) {
  const date = getNewsDate(news);

  return (
    <Link
      href={`/berita/${news.slug ?? news.id}`}
      className="group flex gap-3 rounded-lg p-2 transition-colors hover:bg-[#EAF8F0]"
    >
      {/* Thumbnail */}
      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <ApiImage
          key={news.imageUrl}
          imagePath={news.imageUrl}
          alt={`Foto berita ${news.title}`}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <p className="line-clamp-2 text-xs font-semibold leading-snug text-hijau-tua transition-colors group-hover:text-hijau">
          {news.title}
        </p>
        <time
          dateTime={date || undefined}
          className="mt-1 flex items-center gap-1 text-[11px] text-gray-400"
        >
          <CalendarDays size={11} strokeWidth={1.8} aria-hidden="true" />
          {formatNewsDate(date)}
        </time>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// News body renderer
// ---------------------------------------------------------------------------

function NewsContent({ content }: { content: string }) {
  if (!content) {
    return <p>Isi berita belum tersedia.</p>;
  }

  if (containsHtml(content)) {
    const safeHtml = sanitizeHtml(content, {
      allowedTags: [
        "p",
        "br",
        "strong",
        "b",
        "em",
        "i",
        "u",
        "blockquote",
        "ul",
        "ol",
        "li",
        "h2",
        "h3",
        "h4",
        "a",
        "img",
      ],
      allowedAttributes: {
        a: ["href", "title", "rel"],
        img: ["src", "alt", "width", "height", "class"],
      },
      allowedSchemes: ["http", "https", "mailto"],
      transformTags: {
        a: sanitizeHtml.simpleTransform("a", {
          rel: "noopener noreferrer",
        }),
        img: (tagName, attribs) => ({
          tagName,
          attribs: {
            ...attribs,
            // Force https to prevent Next.js private-IP errors
            src: (attribs.src ?? "").replace(/^http:\/\//i, "https://"),
            alt: attribs.alt ?? "",
            class:
              "my-4 max-w-full rounded-lg shadow-sm mx-auto block",
          },
        }),
      },
    });

    return (
      <div
        className="news-content md:text-base"
        dangerouslySetInnerHTML={{ __html: safeHtml }}
      />
    );
  }

  const paragraphs = content.split(/\r?\n\s*\r?\n/).filter(Boolean);

  return (
    <div className="space-y-5">
      {paragraphs.map((paragraph, index) => (
        <p
          key={`${index}-${paragraph.slice(0, 24)}`}
          className="whitespace-pre-line text-sm leading-7 text-gray-700 md:text-base md:leading-8"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function BeritaDetailPage({
  params,
}: BeritaDetailPageProps) {
  const { id } = await params;
  const [detailResult, listResult] = await Promise.allSettled([
    getNewsById(id),
    getNewsList(),
  ]);
  const fallbackDetail = fallbackNews.find((item) => item.id === id);
  const news =
    detailResult.status === "fulfilled" ? detailResult.value : fallbackDetail;

  if (!news) {
    notFound();
  }

  const isUsingFallback = detailResult.status === "rejected";
  const newsList =
    listResult.status === "fulfilled" ? listResult.value : fallbackNews;

  // Sidebar: all other news, capped at 6
  const sidebarNews = newsList
    .filter((item) => item.id !== news.id)
    .slice(0, 6);

  const date = getNewsDate(news);
  const content = news.content || news.excerpt;
  if (detailResult.status === "rejected") {
    console.error(
      "Unable to load news detail from the API; using fallback data.",
      detailResult.reason,
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#f6faf7]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:py-14 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-gray-500">
          <Link href="/" className="flex items-center gap-1 transition-colors hover:text-hijau-tua">
            <Home size={14} strokeWidth={1.8} aria-hidden="true" />
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/berita" className="transition-colors hover:text-hijau-tua">
            Berita Desa
          </Link>
          <span aria-hidden="true">/</span>
          <span className="max-w-xs truncate font-medium text-hijau-tua">
            {news.title}
          </span>
        </nav>

        {isUsingFallback && (
          <p
            role="status"
            className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800"
          >
            Detail API belum dapat diakses. Menampilkan berita sementara.
          </p>
        )}

        {/* Two-column layout */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          {/* ── LEFT: Main article ─────────────────────────────────────── */}
          <article className="min-w-0 flex-1 rounded-lg border border-emerald-100 bg-white p-5 shadow-[0_14px_34px_rgba(22,94,51,0.08)] md:p-7">
            {/* Title */}
            <h1 className="font-montserrat text-2xl font-extrabold leading-tight text-hijau-tua md:text-4xl">
              {news.title}
            </h1>

            {/* Meta row */}
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-gray-500">
              <time
                dateTime={date || undefined}
                className="flex items-center gap-1.5"
              >
                <CalendarDays size={15} strokeWidth={1.8} aria-hidden="true" className="text-hijau" />
                {formatNewsDate(date)}
              </time>

              {news.category && (
                <>
                  <span aria-hidden="true">•</span>
                  <span className="font-medium text-hijau-tua">{news.category}</span>
                </>
              )}

              <span className="flex items-center gap-1.5">
                <Eye size={15} strokeWidth={1.8} aria-hidden="true" className="text-hijau" />
                Ditulis oleh{" "}
                <span className="font-medium text-hijau-tua">
                  Admin Desa
                </span>
              </span>
            </div>

            {/* Hero image */}
            <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-lg shadow-[0_12px_28px_rgba(22,94,51,0.12)]">
              <ApiImage
                key={news.imageUrl}
                imagePath={news.imageUrl}
                alt={`Gambar utama berita ${news.title}`}
                fill
                priority
                sizes="(min-width: 1024px) 65vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Body */}
            <div className="mt-7">
              <NewsContent content={content} />
            </div>

            {/* Author + share */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="mb-3 text-sm text-gray-500">
                Penulis:{" "}
                <span className="font-semibold text-hijau-tua">Admin Desa</span>
              </p>
              <ShareButtons title={news.title} />
            </div>
          </article>

          {/* ── RIGHT: Sidebar ─────────────────────────────────────────── */}
          <aside
            aria-label="Berita terbaru"
            className="w-full shrink-0 lg:sticky lg:top-24 lg:w-72 xl:w-80"
          >
            <div className="rounded-lg border border-emerald-100 bg-white p-5 shadow-[0_12px_28px_rgba(22,94,51,0.08)]">
              <h2 className="mb-4 text-base font-bold text-hijau-tua">
                Berita Terbaru
              </h2>

              {sidebarNews.length > 0 ? (
                <div className="space-y-1">
                  {sidebarNews.map((item) => (
                    <SidebarNewsCard key={item.id} news={item} />
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-500">
                  Belum ada berita lainnya.
                </p>
              )}

              <div className="mt-4 border-t border-gray-100 pt-4">
                <Link
                  href="/berita"
                  className="text-xs font-semibold text-hijau transition-colors hover:text-hijau-tua"
                >
                  Lihat semua berita →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
