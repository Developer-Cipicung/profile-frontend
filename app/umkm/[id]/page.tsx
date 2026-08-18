import Link from "next/link";
import { notFound } from "next/navigation";
import { Home, MessageCircle, Package, Tag } from "lucide-react";
import ApiImage from "@/src/components/common/ApiImage";
import { fallbackUmkm } from "@/src/data/umkmFallback";
import {
  getUmkmById,
  getUmkmList,
  type UmkmItem,
} from "@/src/services/umkmService";

type UmkmDetailPageProps = {
  params: Promise<{ id: string }>;
};

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
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
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

function SidebarProductCard({ product }: { product: UmkmItem }) {
  return (
    <Link
      href={`/umkm/${product.slug ?? product.id}`}
      className="group flex gap-3 rounded-lg p-2 transition-colors hover:bg-[#EAF8F0]"
    >
      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <ApiImage
          key={product.imageUrl}
          imagePath={product.imageUrl}
          alt={`Foto produk ${product.name}`}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="line-clamp-2 text-xs font-semibold leading-snug text-hijau-tua transition-colors group-hover:text-hijau">
          {product.name}
        </p>
        <p className="mt-1 text-[11px] font-semibold text-hijau">
          {formatRupiah(product.price)}
        </p>
      </div>
    </Link>
  );
}

function ProductHeroImage({ product }: { product: UmkmItem }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-[0_12px_28px_rgba(22,94,51,0.12)]">
      <ApiImage
        imagePath={product.imageUrl}
        alt={`Foto produk ${product.name}`}
        fill
        priority
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="object-contain"
      />
    </div>
  );
}

export default async function UmkmDetailPage({ params }: UmkmDetailPageProps) {
  const { id } = await params;
  const [detailResult, listResult] = await Promise.allSettled([
    getUmkmById(id),
    getUmkmList(),
  ]);
  const fallbackDetail = fallbackUmkm.find((item) => item.id === id);
  const product =
    detailResult.status === "fulfilled" ? detailResult.value : fallbackDetail;

  if (!product) {
    notFound();
  }

  const isUsingFallback = detailResult.status === "rejected";
  const productList =
    listResult.status === "fulfilled" ? listResult.value : fallbackUmkm;
  const sidebarProducts = productList
    .filter((item) => item.id !== product.id)
    .slice(0, 6);
  const hasPurchaseUrl = product.purchaseUrl.trim().length > 0;
  const hasWhatsapp = product.whatsapp.trim().length > 0;

  if (detailResult.status === "rejected") {
    console.error(
      "Unable to load UMKM detail from the API; using fallback data.",
      detailResult.reason,
    );
  }

  return (
    <main className="min-h-screen w-full bg-[#f6faf7]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:py-14 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-1.5 text-sm text-gray-500"
        >
          <Link href="/" className="flex items-center gap-1 transition-colors hover:text-hijau-tua">
            <Home size={14} strokeWidth={1.8} aria-hidden="true" />
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/umkm" className="transition-colors hover:text-hijau-tua">
            Produk UMKM
          </Link>
          <span aria-hidden="true">/</span>
          <span className="max-w-xs truncate font-medium text-hijau-tua">
            {product.name}
          </span>
        </nav>

        {isUsingFallback && (
          <p
            role="status"
            className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800"
          >
            Detail API belum dapat diakses. Menampilkan produk sementara.
          </p>
        )}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          <article className="min-w-0 flex-1 rounded-lg border border-emerald-100 bg-white p-5 shadow-[0_14px_34px_rgba(22,94,51,0.08)] md:p-7">
            <div className="grid gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start">
              <ProductHeroImage product={product} />

              <section aria-labelledby="product-title">
                <p className="inline-flex items-center gap-2 rounded-lg bg-[#EAF8F0] px-3 py-1 text-xs font-semibold uppercase text-hijau">
                  <Tag size={13} strokeWidth={1.8} aria-hidden="true" />
                  {product.category}
                </p>
                <h1
                  id="product-title"
                  className="mt-4 font-montserrat text-2xl font-extrabold leading-tight text-hijau-tua md:text-4xl"
                >
                  {product.name}
                </h1>
                <p className="mt-3 text-3xl font-bold text-hijau">
                  {formatRupiah(product.price)}
                </p>

                <dl className="mt-6 grid gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Package size={16} strokeWidth={1.8} className="text-hijau" aria-hidden="true" />
                    <dt className="font-semibold text-hijau-tua">Pelaku UMKM:</dt>
                    <dd>Admin Desa</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home size={16} strokeWidth={1.8} className="text-hijau" aria-hidden="true" />
                    <dt className="font-semibold text-hijau-tua">Lokasi:</dt>
                    <dd>{product.dusun}</dd>
                  </div>
                </dl>

                <div className="mt-7 flex flex-wrap gap-3">
                  {hasPurchaseUrl && (
                    <a
                      href={product.purchaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#EE4D2D] bg-white px-5 py-2.5 text-sm font-semibold text-[#EE4D2D] transition-colors hover:bg-[#fff3ef] focus:outline-none focus:ring-4 focus:ring-[#EE4D2D]/20"
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
                      className="inline-flex items-center gap-2 rounded-lg bg-hijau px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-hijau-tua focus:outline-none focus:ring-4 focus:ring-hijau/20"
                      aria-label={`Beli ${product.name} melalui WhatsApp`}
                    >
                      <MessageCircle size={17} strokeWidth={1.8} aria-hidden="true" />
                      Beli via WA
                    </a>
                  )}
                </div>
              </section>
            </div>

            <section className="mt-10 border-t border-gray-200 pt-7">
              <h2 className="text-xl font-bold text-hijau-tua">
                Deskripsi Produk
              </h2>
              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                {product.description || "Deskripsi produk belum tersedia."}
              </p>
            </section>
          </article>

          <aside
            aria-label="Produk lainnya"
            className="w-full shrink-0 lg:sticky lg:top-24 lg:w-72 xl:w-80"
          >
            <div className="rounded-lg border border-emerald-100 bg-white p-5 shadow-[0_12px_28px_rgba(22,94,51,0.08)]">
              <h2 className="mb-4 text-base font-bold text-hijau-tua">
                Produk Lainnya
              </h2>
              {sidebarProducts.length > 0 ? (
                <div className="space-y-1">
                  {sidebarProducts.map((item) => (
                    <SidebarProductCard key={item.id} product={item} />
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-500">
                  Belum ada produk lainnya.
                </p>
              )}
              <div className="mt-4 border-t border-gray-100 pt-4">
                <Link
                  href="/umkm"
                  className="text-xs font-semibold text-hijau transition-colors hover:text-hijau-tua"
                >
                  Lihat semua produk
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
