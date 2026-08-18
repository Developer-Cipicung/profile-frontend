import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import ApiImage from "@/src/components/common/ApiImage";
import { getUmkmPreview, type UmkmItem } from "@/src/services/umkmService";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

/** Number of products shown on the homepage. */
const HOMEPAGE_LIMIT = 6;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}

function createWhatsappLink(phone: string, productName: string) {
  const normalizedPhone = phone.replace(/\D/g, "");
  const message = `Halo, saya tertarik membeli ${productName} dari Desa Cipicung. Apakah produk ini masih tersedia?`;
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}

function ShopeeLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M7.2 7.3h9.6l.8 12.4a1.5 1.5 0 0 1-1.5 1.6H7.9a1.5 1.5 0 0 1-1.5-1.6l.8-12.4Z"
        fill="#EE4D2D"
      />
      <path
        d="M9.2 8.4V6.7a2.8 2.8 0 0 1 5.6 0v1.7"
        stroke="#EE4D2D"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13.9 11.3c-.5-.4-1.1-.6-1.9-.6-1 0-1.7.5-1.7 1.2 0 1.8 4 .9 4 3.5 0 1.3-1 2.3-2.7 2.3-.9 0-1.8-.3-2.4-.8"
        stroke="#fff"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// ProdukCard - homepage preview card
// ---------------------------------------------------------------------------

function ProdukCard({ product }: { product: UmkmItem }) {
  const hasWhatsapp = product.whatsapp.trim().length > 0;
  const hasPurchaseUrl = product.purchaseUrl.trim().length > 0;

  return (
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-[0_12px_28px_rgba(22,94,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-hijau/40 hover:shadow-[0_18px_38px_rgba(22,94,51,0.14)]">
      <Link
        href={`/umkm/${product.slug ?? product.id}`}
        className="absolute inset-0 z-10 focus:outline-none focus:ring-4 focus:ring-hijau/20"
        aria-label={`Lihat detail produk ${product.name}`}
      />
      <div className="relative h-44 w-full shrink-0 overflow-hidden lg:h-48">
        <ApiImage
          key={product.imageUrl}
          imagePath={product.imageUrl}
          alt={`Foto produk ${product.name}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-hijau">
          {product.category}
        </p>
        <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-snug text-hijau-tua">
          {product.name}
        </h3>
        <p className="mt-2 text-sm font-medium text-gray-600">
          {product.seller}
        </p>
        <p className="mt-1 text-sm text-gray-500">{product.dusun}</p>
        {product.description && (
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-600">
            {product.description}
          </p>
        )}

        <div className="relative z-20 mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
          <p className="text-xl font-bold text-hijau">
            {formatRupiah(product.price)}
          </p>
          {hasPurchaseUrl || hasWhatsapp ? (
            <div className="flex flex-wrap items-center gap-2">
              {hasPurchaseUrl && (
                <a
                  href={product.purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#EE4D2D] bg-white px-4 py-2 text-sm font-semibold text-[#EE4D2D] transition-colors hover:bg-[#fff3ef] focus:outline-none focus:ring-4 focus:ring-[#EE4D2D]/20"
                  aria-label={`Beli ${product.name} melalui Shopee`}
                >
                  <ShopeeLogo className="h-5 w-5" />
                  Beli di Shopee
                </a>
              )}
              {hasWhatsapp && (
                <a
                  href={createWhatsappLink(product.whatsapp, product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-hijau px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-hijau-tua focus:outline-none focus:ring-4 focus:ring-hijau/20"
                  aria-label={`Beli ${product.name} melalui WhatsApp`}
                >
                  <MessageCircle size={16} strokeWidth={1.8} aria-hidden="true" />
                  Beli via WA
                </a>
              )}
            </div>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-500"
            >
              <MessageCircle size={16} strokeWidth={1.8} aria-hidden="true" />
              Kontak belum tersedia
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------

function ProdukEmptyState() {
  return (
    <div className="col-span-full rounded-lg border border-gray-200 bg-white px-6 py-14 text-center">
      <p className="text-lg font-bold text-hijau-tua">
        Belum ada produk yang tersedia.
      </p>
      <p className="mt-2 text-sm text-gray-600">
        Produk UMKM Desa Cipicung akan ditampilkan di sini setelah tersedia.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Error state
// ---------------------------------------------------------------------------

function ProdukErrorState() {
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

export default async function ProdukLokalSection() {
  let products: UmkmItem[] = [];
  let hasError = false;

  try {
    products = await getUmkmPreview(HOMEPAGE_LIMIT);
  } catch (error) {
    hasError = true;
    if (process.env.NODE_ENV === "development") {
      console.error(
        "[ProdukLokalSection] Failed to fetch product preview:",
        error,
      );
    }
  }

  return (
    <section
      aria-labelledby="produk-lokal-title"
      className="w-full bg-white px-5 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="text-center">
          <p className="text-sm font-bold uppercase text-hijau">
            Ekonomi Warga
          </p>
          <h2
            id="produk-lokal-title"
            className="mt-2 text-center font-montserrat text-3xl font-extrabold text-hijau-tua md:text-4xl"
          >
            Produk Lokal
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
            Dukung produk lokal warga Desa Cipicung melalui Shopee atau kontak
            WhatsApp pelaku UMKM.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {hasError ? (
            <ProdukErrorState />
          ) : products.length === 0 ? (
            <ProdukEmptyState />
          ) : (
            products.map((product) => (
              <ProdukCard key={product.id} product={product} />
            ))
          )}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/umkm"
            className="inline-flex items-center gap-2 rounded-lg bg-hijau-tua px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-hijau focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Lihat produk lebih banyak
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
