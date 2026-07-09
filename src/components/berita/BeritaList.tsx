"use client";

import Link from "next/link";
import { useState } from "react";
import { CalendarDays } from "lucide-react";
import ApiImage from "@/src/components/common/ApiImage";
import Pagination from "@/src/components/common/Pagination";
import { formatNewsDate, getNewsDate } from "@/src/lib/news";
import type { NewsItem } from "@/src/services/newsService";

const ITEMS_PER_PAGE = 6;

const BeritaCard = ({ berita }: { berita: NewsItem }) => {
  const date = getNewsDate(berita);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_22px_rgba(22,94,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(22,94,51,0.16)]">
      <div className="relative h-44 w-full shrink-0 overflow-hidden lg:h-48">
        <ApiImage
          key={berita.imageUrl}
          imagePath={berita.imageUrl}
          alt={`Gambar berita ${berita.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <time
          dateTime={date || undefined}
          className="flex items-center gap-2 text-xs text-gray-500"
        >
          <CalendarDays
            size={15}
            strokeWidth={1.8}
            aria-hidden="true"
            className="text-hijau"
          />
          {formatNewsDate(date)}
        </time>

        <h2 className="mt-3 text-lg font-bold leading-snug text-hijau-tua">
          {berita.title}
        </h2>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {berita.excerpt || "Informasi selengkapnya tersedia pada halaman berita."}
        </p>

        <Link
          href={`/berita/${berita.id}`}
          className="mt-auto inline-flex items-center pt-5 text-sm font-semibold text-hijau transition-colors hover:text-hijau-tua"
          aria-label={`Baca selengkapnya tentang ${berita.title}`}
        >
          Baca Selengkapnya →
        </Link>
      </div>
    </article>
  );
};

type BeritaListSectionProps = {
  news: NewsItem[];
  isUsingFallback?: boolean;
};

const BeritaListSection = ({
  news,
  isUsingFallback = false,
}: BeritaListSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = news.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section
      id="berita-list"
      aria-label="Daftar berita Desa Cipicung"
      className="w-full bg-[#f8faf8] px-6 pb-20 pt-8"
    >
      <div className="mx-auto max-w-7xl">
        {isUsingFallback && (
          <p
            role="status"
            className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800"
          >
            API berita sedang tidak dapat diakses. Menampilkan berita sementara.
          </p>
        )}

        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentItems.map((berita) => (
              <BeritaCard key={berita.id} berita={berita} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-14 text-center">
            <h2 className="text-lg font-bold text-hijau-tua">
              Belum ada berita tersedia.
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Berita Desa Cipicung akan ditampilkan di sini setelah tersedia.
            </p>
          </div>
        )}

        <div className="mt-10">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default BeritaListSection;
