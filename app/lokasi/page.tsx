import LokasiPentingSection from "@/src/components/lokasi/LokasiPenting";
import MapClient from "@/src/components/MapClient";
import { createSeoMetadata } from "@/src/lib/seo";

export const metadata = createSeoMetadata({
  title: "Lokasi Penting Desa",
  description:
    "Temukan fasilitas, layanan, dan lokasi strategis di Desa Cipicung.",
  path: "/lokasi",
});

export default function LokasiPage() {
  return (
    <main className="min-h-screen w-full bg-[#f6faf7]">
      <section className="bg-white px-5 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase text-hijau">
              Peta Desa
            </p>
            <h1 className="mt-2 font-montserrat text-3xl font-extrabold leading-tight text-[var(--hijau-tua)] md:text-5xl">
              Lokasi Penting Desa
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
              Temukan fasilitas, layanan, dan lokasi strategis di Desa Cipicung
            </p>
          </div>

          <MapClient />
        </div>
      </section>

      <LokasiPentingSection />
    </main>
  );
}
