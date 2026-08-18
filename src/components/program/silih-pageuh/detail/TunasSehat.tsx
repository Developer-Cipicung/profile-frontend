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

export const tunasSehatMeta = {
  title: "TUNAS SEHAT | Silih Pageuh",
  description:
    "Subprogram Keluarga Ramah Lansia dan pendataan kesehatan yang memperkuat layanan posyandu melalui sistem digital.",
};

const tunasSehatGallery: SubprogramGalleryItem[] = [
  { image: null, alt: "Dokumentasi TUNAS SEHAT 1", caption: "" },
  { image: null, alt: "Dokumentasi TUNAS SEHAT 2", caption: "" },
  { image: null, alt: "Dokumentasi TUNAS SEHAT 3", caption: "" },
  { image: null, alt: "Dokumentasi TUNAS SEHAT 4", caption: "" },
  { image: null, alt: "Dokumentasi TUNAS SEHAT 5", caption: "" },
];

const highlights: HighlightItem[] = [
  {
    title: "Digitalisasi Posyandu",
    text: "Website membantu kader mencatat, merekap, dan memantau data warga dengan lebih tertata.",
    value: "1067",
    label: "Warga tercatat",
  },
  {
    title: "Efisiensi Rekapitulasi",
    text: "Waktu rekapitulasi berkurang dari 15 menit menjadi 1 menit, sehingga proses menjadi jauh lebih cepat.",
    value: "93,33%",
    label: "Penghematan waktu",
  },
  {
    title: "Posbindu dan Pendampingan Lansia",
    text: "Lansia mendapatkan pemeriksaan dan pendampingan kesehatan melalui Posbindu, caregiver lansia, dan P2L.",
    value: "52",
    label: "Tunas P2L",
  },
];

export default function TunasSehat() {
  return (
    <main className="min-h-screen w-full bg-[#f7fbff]">
      <section className="relative overflow-hidden bg-[#0f5f6b] px-5 py-12 text-white sm:px-6 md:py-14 lg:px-8">
        <Image
          src={assets.silihPageuhHero}
          alt="Hero subprogram TUNAS SEHAT"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#064c57]/78" />

        <div className="relative z-10 mx-auto flex min-h-[330px] max-w-7xl flex-col justify-end">
          <BackToSilihPageuh />
          <div className="mt-9 grid max-w-5xl gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-white/75">
                Keluarga Ramah Lansia dan pendataan kesehatan
              </p>
              <h1 className="mt-3 max-w-4xl font-montserrat text-4xl font-extrabold leading-tight text-white md:text-5xl">
                TUNAS SEHAT
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/85 md:text-lg">
                Subprogram Keluarga Ramah Lansia dan pendataan kesehatan yang
                memperkuat layanan posyandu melalui website pendataan, pelatihan
                kader, Posbindu Lansia, caregiver lansia, dan P2L.
              </p>
            </div>
            <div className="grid gap-3">
              <MetricBadge>Program terlaksana 100%</MetricBadge>
              <MetricBadge>1067 warga tercatat di website</MetricBadge>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-6 md:py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_390px]">
          <div className="space-y-6">
            <GalleryPanel items={tunasSehatGallery} programName="TUNAS SEHAT" />

            <article className="rounded-lg border border-sky-100 bg-white p-5 shadow-[0_12px_28px_rgba(8,85,96,0.08)] md:p-7">
              <div className="mb-4 flex items-center gap-3">
                <SectionTitle title="Tentang Program" />
              </div>
              <div className="grid gap-4 text-sm leading-7 text-gray-700 md:grid-cols-2 md:text-base md:leading-8">
                <p>
                  TUNAS SEHAT adalah subprogram Keluarga Ramah Lansia dan
                  pendataan kesehatan yang berfokus pada peningkatan kualitas
                  layanan posyandu melalui sistem digital. Program ini berangkat
                  dari masalah pendataan posyandu yang masih memakan waktu,
                  tersebar, dan belum sepenuhnya membantu kader dalam
                  rekapitulasi serta pemantauan data warga.
                </p>
                <p>
                  Melalui website pendataan kesehatan, pelatihan kader, Posbindu
                  Lansia, caregiver lansia, dan kegiatan P2L, TUNAS SEHAT
                  menargetkan kader posyandu, lansia, caregiver, serta warga
                  yang tercatat dalam layanan kesehatan desa. Program ini
                  membantu kader bekerja lebih tertata dan memperkuat pelayanan
                  kesehatan berbasis data.
                </p>
              </div>
            </article>

            <section aria-labelledby="highlight-tunas-sehat-title">
              <div className="mb-4">
                <SectionTitle
                  title="Dampak/Highlight Program"
                  id="highlight-tunas-sehat-title"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <HighlightCard key={item.title} item={item} />
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <SubprogramNav currentSlug="tunas-sehat" />
          </aside>
        </div>
      </section>
    </main>
  );
}
