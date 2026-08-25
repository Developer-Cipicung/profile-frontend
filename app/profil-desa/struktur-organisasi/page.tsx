import Image from "next/image";
import PerangkatDesaSection from "@/src/components/PerangkatDesaSection";
import { assets } from "@/src/assets/assets";
import { createSeoMetadata } from "@/src/lib/seo";

export const metadata = createSeoMetadata({
  title: "Struktur Organisasi Desa",
  description:
    "Susunan organisasi pemerintahan Desa Cipicung, Kecamatan Cijeruk, Kabupaten Bogor.",
  path: "/profil-desa/struktur-organisasi",
});

export default function StrukturOrganisasiPage() {
  return (
    <main className="bg-[#f6faf7]">
      <section className="px-5 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase text-hijau">
              Pemerintahan Desa
            </p>

            <h1 className="mt-2 font-montserrat text-3xl font-extrabold leading-tight text-hijau-tua md:text-5xl">
              Struktur Organisasi Desa
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
              Susunan organisasi pemerintahan Desa Cipicung, Kecamatan Cijeruk,
              Kabupaten Bogor.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-emerald-100 bg-white p-4 shadow-[0_18px_42px_rgba(22,94,51,0.1)] md:p-8">
            <Image
              src={assets.sotk}
              alt="Struktur Organisasi Desa Cipicung"
              className="h-auto w-full object-contain"
              priority
            />
          </div>

          <p className="mt-5 text-center text-sm text-gray-500">
            Struktur organisasi dapat diperbarui mengikuti data resmi pemerintah
            desa.
          </p>
        </div>
      </section>

      <PerangkatDesaSection />
    </main>
  );
}
