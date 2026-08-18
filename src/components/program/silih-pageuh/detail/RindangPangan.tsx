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

export const rindangPanganMeta = {
  title: "RINDANG PANGAN | Silih Pageuh",
  description:
    "Subprogram Keluarga Cerdas Pangan yang mendorong pemanfaatan pangan lokal melalui PMT ikan nila, CiBi!, CiHerb, dan budidaya ayam petelur.",
};

const rindangPanganGallery: SubprogramGalleryItem[] = [
  { image: null, alt: "Dokumentasi RINDANG PANGAN 1", caption: "" },
  { image: null, alt: "Dokumentasi RINDANG PANGAN 2", caption: "" },
  { image: null, alt: "Dokumentasi RINDANG PANGAN 3", caption: "" },
  { image: null, alt: "Dokumentasi RINDANG PANGAN 4", caption: "" },
  { image: null, alt: "Dokumentasi RINDANG PANGAN 5", caption: "" },
];

const highlights: HighlightItem[] = [
  {
    title: "Produk CiBi! dan CiHerb",
    text: "Pangan lokal dikembangkan menjadi produk baru yang lebih bernilai dan mudah dikenalkan kepada masyarakat.",
    value: "4",
    label: "Produk baru",
  },
  {
    title: "Budidaya Ayam Petelur",
    text: "Budidaya ayam petelur mendukung ketersediaan pangan hewani dan keberlanjutan program pangan.",
    value: "Berjalan",
    label: "Budidaya ayam petelur",
  },
  {
    title: "Pemberian Makanan Tambahan",
    text: "PMT diberikan untuk mendukung perbaikan status gizi anak sasaran gizi kurang.",
    value: "158%",
    label: "Peningkatan status gizi",
  },
];

export default function RindangPangan() {
  return (
    <main className="min-h-screen w-full bg-[#fffdf7]">
      <section className="relative overflow-hidden bg-[#476f2d] px-5 py-12 text-white sm:px-6 md:py-14 lg:px-8">
        <Image
          src={assets.silihPageuhHero}
          alt="Hero subprogram RINDANG PANGAN"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#315d25]/78" />

        <div className="relative z-10 mx-auto grid min-h-[330px] max-w-7xl content-end gap-6 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-end">
          <div>
            <BackToSilihPageuh />
            <p className="mt-9 text-sm font-bold uppercase text-white/75">
              Keluarga Cerdas Pangan
            </p>
            <h1 className="mt-3 max-w-4xl font-montserrat text-4xl font-extrabold leading-tight text-white md:text-5xl">
              RINDANG PANGAN
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/85 md:text-lg">
              Subprogram Keluarga Cerdas Pangan yang mendorong pemanfaatan
              pangan lokal melalui PMT ikan nila, produk CiBi! dan CiHerb, serta
              budidaya ayam petelur.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <MetricBadge>Program terlaksana 100%</MetricBadge>
            <MetricBadge>24 anak sasaran gizi kurang</MetricBadge>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-6 md:py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_390px]">
          <div className="space-y-6">
            <GalleryPanel
              items={rindangPanganGallery}
              programName="RINDANG PANGAN"
            />

            <article className="rounded-lg border border-[#f0e1b8] bg-white p-5 shadow-[0_12px_28px_rgba(86,78,31,0.08)] md:p-7">
              <div className="mb-4 flex items-center gap-3">
                <SectionTitle title="Tentang Program" />
              </div>
              <div className="space-y-4 text-sm leading-7 text-gray-700 md:text-base md:leading-8">
                <p>
                  RINDANG PANGAN adalah subprogram Keluarga Cerdas Pangan yang
                  berfokus pada pemanfaatan pangan lokal untuk mendukung
                  ketahanan pangan dan perbaikan gizi. Program ini berangkat
                  dari masalah belum optimalnya pemanfaatan potensi pangan lokal
                  serta adanya anak sasaran gizi kurang yang membutuhkan
                  dukungan makanan tambahan.
                </p>
                <p>
                  Program ini mengembangkan beberapa pendekatan, mulai dari
                  pemberian PMT berbahan ikan nila, pengolahan pangan lokal
                  menjadi produk CiBi! dan CiHerb, hingga budidaya ayam petelur.
                  Targetnya adalah anak sasaran gizi kurang, keluarga, serta
                  warga yang terlibat dalam pengolahan pangan agar manfaat
                  program terasa pada aspek gizi sekaligus keterampilan ekonomi
                  masyarakat.
                </p>
              </div>
            </article>

            <section aria-labelledby="highlight-rindang-pangan-title">
              <SectionTitle
                title="Dampak/Highlight Program"
                id="highlight-rindang-pangan-title"
              />
              <div className="mt-4 grid gap-3 md:grid-cols-[1.05fr_0.95fr]">
                <HighlightCard item={highlights[0]} className="md:row-span-2" />
                <HighlightCard item={highlights[1]} />
                <HighlightCard item={highlights[2]} />
              </div>
            </section>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <SubprogramNav currentSlug="rindang-pangan" />
          </aside>
        </div>
      </section>
    </main>
  );
}
