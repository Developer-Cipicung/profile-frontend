import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays } from "lucide-react";
import { beritaList, type BeritaItem } from "@/src/data/berita";

type BeritaDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return beritaList.map((berita) => ({ id: berita.id }));
}

const RelatedNewsCard = ({ berita }: { berita: BeritaItem }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_22px_rgba(22,94,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(22,94,51,0.16)]">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={berita.image}
          alt={`Gambar berita ${berita.title}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-hijau-tua shadow-sm backdrop-blur-sm">
          {berita.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <time dateTime={berita.isoDate} className="text-xs text-gray-500">
          {berita.date}
        </time>
        <h3 className="mt-2 text-lg font-bold leading-snug text-hijau-tua">
          {berita.title}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-600">
          {berita.description}
        </p>
        <Link
          href={`/berita/${berita.id}`}
          className="mt-auto pt-5 text-sm font-semibold text-hijau transition-colors hover:text-hijau-tua"
        >
          Baca Selengkapnya →
        </Link>
      </div>
    </article>
  );
};

export default async function BeritaDetailPage({
  params,
}: BeritaDetailPageProps) {
  const { id } = await params;
  const berita = beritaList.find((item) => item.id === id);

  if (!berita) {
    notFound();
  }

  const relatedNews = beritaList
    .filter((item) => item.id !== berita.id)
    .slice(0, 2);

  return (
    <main className="min-h-screen w-full bg-[#f8faf8] py-10 md:py-14">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="/berita"
          className="text-sm font-medium text-hijau transition-colors hover:text-hijau-tua"
        >
          ← Kembali ke Berita
        </Link>

        <article className="mt-6">
          <div className="relative h-56 w-full overflow-hidden rounded-2xl shadow-[0_10px_28px_rgba(22,94,51,0.12)] md:h-[360px] md:rounded-3xl">
            <Image
              src={berita.image}
              alt={`Gambar utama berita ${berita.title}`}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mx-auto mt-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <time
                dateTime={berita.isoDate}
                className="flex items-center gap-2"
              >
                <CalendarDays
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="text-hijau"
                />
                {berita.date}
              </time>
              <span aria-hidden="true">•</span>
              <span className="font-medium text-hijau-tua">
                {berita.category}
              </span>
            </div>

            <h1 className="mt-4 text-2xl font-bold leading-tight text-hijau-tua md:text-4xl">
              {berita.title}
            </h1>
            <p className="mt-4 text-base font-medium leading-relaxed text-gray-600 md:text-lg">
              {berita.description}
            </p>

            <div className="mt-8 space-y-5">
              {berita.content.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-7 text-gray-600 md:text-base md:leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

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
              <RelatedNewsCard key={item.id} berita={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
