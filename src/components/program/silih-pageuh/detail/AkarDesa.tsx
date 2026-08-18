import Image from "next/image";
import { assets } from "@/src/assets/assets";
import {
  BackToSilihPageuh,
  GalleryPanel,
  HighlightCard,
  MetricBadge,
  SectionTitle,
  SubprogramNav,
  type HighlightItem,
} from "@/src/components/program/silih-pageuh/detail/SubprogramDetailParts";
import type { SubprogramGalleryItem } from "@/src/components/program/silih-pageuh/ProgramGalleryCarousel";

export const akarDesaMeta = {
  title: "AKAR DESA | Silih Pageuh",
  description:
    "Subprogram Keluarga Ramah Lingkungan yang berfokus pada edukasi pemilahan sampah, POS PANDAI, bottle press, dan lubang biopori.",
};

const akarDesaGallery: SubprogramGalleryItem[] = [
  { image: null, alt: "Dokumentasi AKAR DESA 1", caption: "" },
  { image: null, alt: "Dokumentasi AKAR DESA 2", caption: "" },
  { image: null, alt: "Dokumentasi AKAR DESA 3", caption: "" },
  { image: null, alt: "Dokumentasi AKAR DESA 4", caption: "" },
  { image: null, alt: "Dokumentasi AKAR DESA 5", caption: "" },
];

const highlights: HighlightItem[] = [
  {
    title: "Edukasi Pemilahan Sampah",
    text: "Warga dan siswa mendapatkan pemahaman tentang jenis sampah serta cara pengelolaannya.",
    value: "41%",
    label: "Peningkatan pengetahuan",
  },
  {
    title: "Bottle Press dan POS PANDAI",
    text: "Pengelolaan sampah anorganik diperkuat melalui pengenalan alat bottle press dan dukungan POS PANDAI.",
    value: "7",
    label: "Alat bottle press",
  },
  {
    title: "Lubang Biopori",
    text: "Sampah organik mulai diarahkan ke praktik pengelolaan yang lebih ramah lingkungan.",
    value: "10",
    label: "Lubang biopori",
  },
];

export default function AkarDesa() {
  return (
    <main className="min-h-screen w-full bg-[#f7fbf8]">
      <section className="relative overflow-hidden bg-hijau-tua px-5 py-12 text-white sm:px-6 md:py-14 lg:px-8">
        <Image
          src={assets.silihPageuhHero}
          alt="Hero subprogram AKAR DESA"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-hijau-tua/80" />

        <div className="relative z-10 mx-auto flex min-h-[330px] max-w-7xl flex-col justify-end">
          <BackToSilihPageuh />
          <p className="mt-5 text-sm font-bold uppercase text-white/75">
            Keluarga Ramah Lingkungan
          </p>
          <h1 className="mt-3 max-w-4xl font-montserrat text-4xl font-extrabold leading-tight text-white md:text-5xl">
            AKAR DESA
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/85 md:text-lg">
            Subprogram Keluarga Ramah Lingkungan yang berfokus pada edukasi
            pemilahan sampah dan penguatan pengelolaan sampah melalui POS
            PANDAI, bottle press, dan lubang biopori.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <MetricBadge>Program terlaksana 100%</MetricBadge>
            <MetricBadge>7 alat bottle press</MetricBadge>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-6 md:py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_390px]">
          <div className="space-y-6">
            <GalleryPanel items={akarDesaGallery} programName="AKAR DESA" />

            <article className="rounded-lg border border-emerald-100 bg-white p-5 shadow-[0_12px_28px_rgba(22,94,51,0.08)] md:p-7">
              <div className="mb-4 flex items-center gap-3">
                <SectionTitle title="Tentang Program" />
              </div>
              <div className="space-y-4 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                <p>
                  AKAR DESA adalah subprogram Keluarga Ramah Lingkungan yang
                  berfokus pada penguatan pengelolaan sampah di Desa Cipicung.
                  Program ini berangkat dari masalah masih adanya sampah rumah
                  tangga dan sampah lingkungan yang belum terkelola dengan baik,
                  sehingga dibutuhkan edukasi pemilahan sampah dan pembiasaan
                  pengelolaan sejak dini.
                </p>
                <p>
                  Melalui edukasi pemilahan sampah, POS PANDAI, bottle press,
                  dan lubang biopori, AKAR DESA menargetkan warga, siswa, guru,
                  pemuda, dan lingkungan RW agar lebih terbiasa memilah serta
                  mengurangi sampah yang tidak terkelola. Program ini tidak
                  hanya memberi pengetahuan, tetapi juga menghadirkan alat dan
                  praktik langsung yang bisa diteruskan masyarakat.
                </p>
              </div>
            </article>

            <section aria-labelledby="highlight-akar-desa-title">
              <SectionTitle
                title="Dampak/Highlight Program"
                id="highlight-akar-desa-title"
              />
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <HighlightCard key={item.title} item={item} />
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <SubprogramNav currentSlug="akar-desa" />
          </aside>
        </div>
      </section>
    </main>
  );
}
