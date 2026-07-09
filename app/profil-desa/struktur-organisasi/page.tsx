import Image from "next/image";
import PerangkatDesaSection from "@/src/components/PerangkatDesaSection";
import { assets } from "@/src/assets/assets";

export default function StrukturOrganisasiPage() {
  return (
    <main className="bg-[#f8faf8]">
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            {/* <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--hijau)]">
              Pemerintahan Desa
            </p> */}

            <h1 className="text-3xl font-bold text-[var(--hijau-tua)] md:text-5xl">
              Struktur Organisasi Desa
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
              Susunan organisasi pemerintahan Desa Cipicung, Kecamatan Cijeruk,
              Kabupaten Bogor.
            </p>
          </div>

          {/* <div className="mb-6">
            <Link
              href="/profil-desa"
              className="text-sm font-semibold text-[var(--hijau-tua)] transition-colors hover:text-[var(--hijau)]"
            >
              &larr; Kembali ke Profil Desa
            </Link>
          </div> */}

          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white p-4 shadow-md md:p-8">
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
