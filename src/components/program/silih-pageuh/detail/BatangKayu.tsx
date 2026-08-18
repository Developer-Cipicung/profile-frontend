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

export const batangKayuMeta = {
  title: "BATANG KAYU | Silih Pageuh",
  description:
    "Subprogram Keluarga Peduli Sehat yang berfokus pada penguatan kader, penyuluhan ibu dan anak, serta Komunitas Silih Asuh.",
};

const batangKayuGallery: SubprogramGalleryItem[] = [
  { image: null, alt: "Dokumentasi BATANG KAYU 1", caption: "" },
  { image: null, alt: "Dokumentasi BATANG KAYU 2", caption: "" },
  { image: null, alt: "Dokumentasi BATANG KAYU 3", caption: "" },
  { image: null, alt: "Dokumentasi BATANG KAYU 4", caption: "" },
  { image: null, alt: "Dokumentasi BATANG KAYU 5", caption: "" },
];

const highlights: HighlightItem[] = [
  {
    title: "Komunitas Silih Asuh",
    text: "Terbentuk kelembagaan resmi sebagai wadah koordinasi dan keberlanjutan program.",
    value: "Terbentuk",
    label: "Komunitas Silih Asuh",
  },
  {
    title: "Penguatan Kader",
    text: "Kader mendapat penguatan pemahaman dan keterampilan, termasuk praktik pengukuran antropometri.",
    value: "87,27",
    label: "Nilai kader",
  },
  {
    title: "Penyuluhan Ibu dan Anak",
    text: "Ibu mendapat penguatan pemahaman tentang pola makan beragam, seimbang, dan praktik pengasuhan anak.",
    value: "83,33",
    label: "Nilai ibu",
  },
];

export default function BatangKayu() {
  return (
    <main className="min-h-screen w-full bg-[#fbfaf7]">
      <section className="relative overflow-hidden bg-[#35513e] px-5 py-12 text-white sm:px-6 md:py-14 lg:px-8">
        <Image
          src={assets.silihPageuhHero}
          alt="Hero subprogram BATANG KAYU"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#254235]/80" />

        <div className="relative z-10 mx-auto flex min-h-[330px] max-w-7xl flex-col justify-end">
          <BackToSilihPageuh />
          <div className="mt-9 max-w-3xl">
            <p className="text-sm font-bold uppercase text-white/75">
              Keluarga Peduli Sehat
            </p>
            <h1 className="mt-3 font-montserrat text-4xl font-extrabold leading-tight text-white md:text-5xl">
              BATANG KAYU
            </h1>
            <p className="mt-5 text-base leading-8 text-white/85 md:text-lg">
              Subprogram Keluarga Peduli Sehat yang berfokus pada penguatan
              kader, penyuluhan ibu dan anak, serta pembentukan kelembagaan
              Komunitas Silih Asuh untuk keberlanjutan program.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <MetricBadge>Program terlaksana 86,25%</MetricBadge>
            <MetricBadge>Komunitas Silih Asuh terbentuk</MetricBadge>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-6 md:py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_390px]">
          <div className="space-y-6">
            <GalleryPanel items={batangKayuGallery} programName="BATANG KAYU" />

            <article className="rounded-lg border border-stone-200 bg-white p-5 shadow-[0_12px_28px_rgba(76,62,40,0.08)] md:p-7">
              <div className="mb-4 flex items-center gap-3">
                <SectionTitle title="Tentang Program" />
              </div>
              <div className="space-y-4 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                <p>
                  BATANG KAYU adalah subprogram Keluarga Peduli Sehat yang
                  berfokus pada penguatan kapasitas kader, penyuluhan ibu dan
                  anak, serta pembentukan kelembagaan Komunitas Silih Asuh.
                  Program ini berangkat dari kebutuhan agar kegiatan kesehatan
                  masyarakat tidak hanya berlangsung selama program utama,
                  tetapi memiliki penggerak dan struktur yang dapat melanjutkan
                  kegiatan setelahnya.
                </p>
                <p>
                  Melalui penyuluhan kader, penyuluhan ibu dan anak, serta
                  penguatan kelembagaan, BATANG KAYU menargetkan kader, ibu,
                  anak, karang taruna, dan unsur masyarakat yang terlibat dalam
                  keberlanjutan program. Fokus utamanya adalah membangun
                  pemahaman, keterampilan, dan wadah koordinasi agar program
                  kesehatan desa bisa berjalan lebih konsisten.
                </p>
              </div>
            </article>

            <section aria-labelledby="highlight-batang-kayu-title">
              <div className="mb-4 flex items-center justify-between gap-4">
                <SectionTitle
                  title="Dampak/Highlight Program"
                  id="highlight-batang-kayu-title"
                />
              </div>
              <div className="grid gap-3 lg:grid-cols-3">
                {highlights.map((item) => (
                  <HighlightCard key={item.title} item={item} />
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <SubprogramNav currentSlug="batang-kayu" />
          </aside>
        </div>
      </section>
    </main>
  );
}
