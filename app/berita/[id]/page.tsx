import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays } from "lucide-react";
import sanitizeHtml from "sanitize-html";
import ApiImage from "@/src/components/common/ApiImage";
import { fallbackNews } from "@/src/data/newsFallback";
import { containsHtml, formatNewsDate, getNewsDate } from "@/src/lib/news";
import {
  getNewsById,
  getNewsList,
  type NewsItem,
} from "@/src/services/newsService";

type BeritaDetailPageProps = {
  params: Promise<{ id: string }>;
};

function RelatedNewsCard({ news }: { news: NewsItem }) {
  const date = getNewsDate(news);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_22px_rgba(22,94,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(22,94,51,0.16)]">
      <div className="relative h-44 w-full overflow-hidden">
        <ApiImage
          key={news.imageUrl}
          imagePath={news.imageUrl}
          alt={`Gambar berita ${news.title}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-hijau-tua shadow-sm backdrop-blur-sm">
          {news.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <time dateTime={date || undefined} className="text-xs text-gray-500">
          {formatNewsDate(date)}
        </time>
        <h3 className="mt-2 text-lg font-bold leading-snug text-hijau-tua">
          {news.title}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-600">
          {news.excerpt || "Informasi selengkapnya tersedia pada halaman berita."}
        </p>
        <Link
          href={`/berita/${news.id}`}
          className="mt-auto pt-5 text-sm font-semibold text-hijau transition-colors hover:text-hijau-tua"
        >
          Baca Selengkapnya →
        </Link>
      </div>
    </article>
  );
}

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
        "a",
      ],
      allowedAttributes: {
        a: ["href", "title", "rel"],
      },
      allowedSchemes: ["http", "https", "mailto"],
      transformTags: {
        a: sanitizeHtml.simpleTransform("a", {
          rel: "noopener noreferrer",
        }),
      },
    });

    return (
      <div
        className="space-y-5 text-sm leading-7 text-gray-600 [&_a]:font-medium [&_a]:text-hijau [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-hijau [&_blockquote]:pl-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-hijau-tua [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-hijau-tua [&_li]:ml-5 [&_li]:list-disc [&_ol>li]:list-decimal [&_p]:leading-7 md:text-base md:[&_p]:leading-8"
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
          className="whitespace-pre-line text-sm leading-7 text-gray-600 md:text-base md:leading-8"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default async function BeritaDetailPage({
  params,
}: BeritaDetailPageProps) {
  const { id } = await params;
  const [detailResult, listResult] = await Promise.allSettled([
    getNewsById(id),
    getNewsList(),
  ]);
  const fallbackDetail = fallbackNews.find((item) => item.id === id);
  const news = detailResult.status === "fulfilled" ? detailResult.value : fallbackDetail;

  if (!news) {
    notFound();
  }

  const isUsingFallback = detailResult.status === "rejected";
  const newsList =
    listResult.status === "fulfilled" ? listResult.value : fallbackNews;
  const relatedNews = newsList.filter((item) => item.id !== news.id).slice(0, 2);
  const date = getNewsDate(news);
  const content = news.content || news.excerpt;

  if (detailResult.status === "rejected") {
    console.error(
      "Unable to load news detail from the API; using fallback data.",
      detailResult.reason,
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#f8faf8] py-10 md:py-14">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="/berita"
          className="text-sm font-medium text-hijau transition-colors hover:text-hijau-tua"
        >
          ← Kembali ke Berita
        </Link>

        {isUsingFallback && (
          <p
            role="status"
            className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800"
          >
            Detail API belum dapat diakses. Menampilkan berita sementara.
          </p>
        )}

        <article className="mt-6">
          <div className="relative h-56 w-full overflow-hidden rounded-2xl shadow-[0_10px_28px_rgba(22,94,51,0.12)] md:h-[360px] md:rounded-3xl">
            <ApiImage
              key={news.imageUrl}
              imagePath={news.imageUrl}
              alt={`Gambar utama berita ${news.title}`}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mx-auto mt-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <time dateTime={date || undefined} className="flex items-center gap-2">
                <CalendarDays
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="text-hijau"
                />
                {formatNewsDate(date)}
              </time>
              <span aria-hidden="true">•</span>
              <span className="font-medium text-hijau-tua">{news.category}</span>
            </div>

            <h1 className="mt-4 text-2xl font-bold leading-tight text-hijau-tua md:text-4xl">
              {news.title}
            </h1>
            {news.excerpt && (
              <p className="mt-4 text-base font-medium leading-relaxed text-gray-600 md:text-lg">
                {news.excerpt}
              </p>
            )}

            <div className="mt-8">
              <NewsContent content={content} />
            </div>
          </div>
        </article>

        {relatedNews.length > 0 && (
          <>
            <div className="my-12 border-t border-gray-200" />
            <section aria-labelledby="related-news-title">
              <h2
                id="related-news-title"
                className="text-2xl font-bold text-hijau-tua md:text-3xl"
              >
                Berita Terkait
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                {relatedNews.map((item) => (
                  <RelatedNewsCard key={item.id} news={item} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
