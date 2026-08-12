import Link from "next/link";
import { MessageCircle } from "lucide-react";
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

// ---------------------------------------------------------------------------
// ProdukCard – matches the design in ProdukUMKM.tsx exactly
// ---------------------------------------------------------------------------

function ProdukCard({ product }: { product: UmkmItem }) {
  const hasWhatsapp = product.whatsapp.trim().length > 0;

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_22px_rgba(22,94,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
          <p className="text-xl font-bold text-hijau">
            {formatRupiah(product.price)}
          </p>
          {hasWhatsapp ? (
            <a
              href={createWhatsappLink(product.whatsapp, product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-hijau px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-hijau-tua"
              aria-label={`Beli ${product.name} melalui WhatsApp`}
            >
              <MessageCircle size={16} strokeWidth={1.8} aria-hidden="true" />
              Beli via WA
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-500"
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
    <div className="col-span-full rounded-2xl border border-gray-200 bg-white px-6 py-14 text-center">
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
    <div className="col-span-full rounded-2xl border border-red-100 bg-red-50 px-6 py-14 text-center">
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
      className="w-full px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <header className="text-center">
          <h2
            id="produk-lokal-title"
            className="text-center text-3xl font-bold font-montserrat tracking-tighter text-hijau-tua md:text-4xl"
          >
            Produk Lokal
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
            Dukung produk lokal warga Desa Cipicung, pembelian langsung via
            WhatsApp
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
            className="font-bold text-hijau-tua underline decoration-2 underline-offset-4 transition-colors hover:text-kuning"
          >
            Lihat produk lebih banyak
          </Link>
        </div>
      </div>
    </section>
  );
}
