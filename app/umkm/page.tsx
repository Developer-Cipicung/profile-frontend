import ProdukUMKMSection from "@/src/components/produk-lokal/ProdukUMKM";
import { fallbackUmkm } from "@/src/data/umkmFallback";
import { createSeoMetadata } from "@/src/lib/seo";
import { getUmkmList } from "@/src/services/umkmService";

export const metadata = createSeoMetadata({
  title: "Produk UMKM",
  description:
    "Dukung produk lokal warga Desa Cipicung melalui Shopee atau kontak WhatsApp pelaku UMKM.",
  path: "/umkm",
});

export default async function UmkmPage() {
  let products = fallbackUmkm;
  let isUsingFallback = false;

  try {
    products = await getUmkmList();
  } catch (error) {
    isUsingFallback = true;
    console.error("Unable to load UMKM products; using fallback data.", error);
  }

  return (
    <main className="min-h-screen w-full bg-[#f6faf7]">
      <ProdukUMKMSection
        products={products}
        isUsingFallback={isUsingFallback}
      />
    </main>
  );
}
