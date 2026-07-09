import LokasiPentingSection from "@/src/components/lokasi/LokasiPenting";
import MapClient from "@/src/components/MapClient";

export default function LokasiPage() {
  return (
    <main className="min-h-screen w-full bg-[#f8faf8]">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-[var(--hijau-tua)] md:text-5xl">
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
