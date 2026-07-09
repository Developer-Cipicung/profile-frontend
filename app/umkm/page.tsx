import ProdukUMKMSection from "@/src/components/produk-lokal/ProdukUMKM";
import { fallbackUmkm } from "@/src/data/umkmFallback";
import { getUmkmList } from "@/src/services/umkmService";

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
    <main className="min-h-screen w-full bg-[#f8faf8]">
      <ProdukUMKMSection
        products={products}
        isUsingFallback={isUsingFallback}
      />
    </main>
  );
}
