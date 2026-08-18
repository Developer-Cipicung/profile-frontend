import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { CalendarDays } from "lucide-react";
import ApiImage from "@/src/components/common/ApiImage";
import { getNewsPreview, type NewsItem } from "@/src/services/newsService";
import { formatNewsDate, getNewsDate } from "@/src/lib/news";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

/** Number of berita shown on the homepage (desktop & tablet). */
const HOMEPAGE_LIMIT = 3;

// ---------------------------------------------------------------------------
// BeritaCard - homepage preview card
// ---------------------------------------------------------------------------

function BeritaCard({ berita }: { berita: NewsItem }) {
  const rawDate = getNewsDate(berita);
  const formattedDate = rawDate ? formatNewsDate(rawDate) : null;
  const isoDate = rawDate || undefined;
  const excerpt =
    berita.excerpt?.trim() ||
    "Informasi selengkapnya tersedia pada halaman berita.";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-[0_12px_28px_rgba(22,94,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-hijau/40 hover:shadow-[0_18px_38px_rgba(22,94,51,0.14)]">
      <div className="relative h-48 w-full shrink-0 overflow-hidden md:h-56">
        <ApiImage
          key={berita.imageUrl}
          imagePath={berita.imageUrl}
          alt={`Gambar berita ${berita.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-hijau-tua md:text-xl">
          {berita.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
          {excerpt}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
          <p className="flex items-center gap-2 text-xs font-medium text-hijau-tua">
            <Eye size={16} strokeWidth={1.8} aria-hidden="true" />
            Baca selengkapnya
          </p>
          {formattedDate ? (
            <time
              dateTime={isoDate}
              className="flex items-center gap-1.5 rounded-md bg-[#ffefb0] px-3 py-1.5 text-[11px] font-semibold text-hijau-tua"
            >
              <CalendarDays size={12} strokeWidth={2} aria-hidden="true" />
              {formattedDate}
            </time>
          ) : null}
        </div>
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------

function BeritaEmptyState() {
  return (
    <div className="col-span-full rounded-lg border border-gray-200 bg-white px-6 py-14 text-center">
      <p className="text-lg font-bold text-hijau-tua">
        Belum ada berita yang dipublikasikan.
      </p>
      <p className="mt-2 text-sm text-slate-500">
        Berita terbaru Desa Cipicung akan ditampilkan di sini.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Error state
// ---------------------------------------------------------------------------

function BeritaErrorState() {
  return (
    <div className="col-span-full rounded-lg border border-red-100 bg-red-50 px-6 py-14 text-center">
      <p className="text-base font-bold text-red-700">Gagal memuat data.</p>
      <p className="mt-1 text-sm text-red-600">
        Silakan coba beberapa saat lagi.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main section – Server Component with async data fetch
// ---------------------------------------------------------------------------

export default async function BeritaDesaSection() {
  let news: NewsItem[] = [];
  let hasError = false;

  try {
    news = await getNewsPreview(HOMEPAGE_LIMIT);
  } catch (error) {
    hasError = true;
    if (process.env.NODE_ENV === "development") {
      console.error("[BeritaDesaSection] Failed to fetch news preview:", error);
    }
  }

  return (
    <section
      aria-labelledby="berita-desa-title"
      className="w-full bg-[#f6faf7] px-5 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase text-hijau">
            Informasi Desa
          </p>
          <h2
            id="berita-desa-title"
            className="mt-2 font-montserrat text-3xl font-extrabold text-hijau-tua md:text-4xl"
          >
            Berita Desa
          </h2>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {hasError ? (
            <BeritaErrorState />
          ) : news.length === 0 ? (
            <BeritaEmptyState />
          ) : (
            news.map((berita) => (
              <Link
                key={berita.id}
                href={`/berita/${berita.slug ?? berita.id}`}
                className="flex h-full flex-col"
                aria-label={`Baca berita: ${berita.title}`}
              >
                <BeritaCard berita={berita} />
              </Link>
            ))
          )}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 rounded-lg bg-hijau-tua px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-hijau focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Lihat berita lebih banyak
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
