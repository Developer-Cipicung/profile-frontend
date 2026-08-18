import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { silihPageuh } from "@/src/assets/assets";
import ProgramGalleryCarousel, {
  type SubprogramGalleryItem,
} from "@/src/components/program/silih-pageuh/ProgramGalleryCarousel";
import {
  silihPageuhSubprograms,
  type SilihPageuhSubprogramSlug,
} from "@/src/data/silihPageuhSubprograms";

export type HighlightItem = {
  title: string;
  text: string;
  value: string;
  label: string;
};

const subprogramImages: Record<SilihPageuhSubprogramSlug, StaticImageData> = {
  "akar-desa": silihPageuh.ts1,
  "rindang-pangan": silihPageuh.ts2,
  "tunas-sehat": silihPageuh.ts3,
  "batang-kayu": silihPageuh.ts4,
};

export function BackToSilihPageuh() {
  return (
    <Link
      href="/program/silih-pageuh"
      className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-3 py-2 text-sm font-bold text-white transition-colors hover:bg-white/20"
    >
      <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
      Kembali ke Silih Pageuh
    </Link>
  );
}

export function MetricBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex rounded-lg bg-white/95 px-3 py-2 text-sm font-bold text-hijau-tua shadow-[0_10px_24px_rgba(0,0,0,0.14)]">
      {children}
    </span>
  );
}

export function SectionTitle({
  title,
  id,
}: {
  title: string;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className="font-montserrat text-2xl font-extrabold text-hijau-tua md:text-3xl"
    >
      {title}
    </h2>
  );
}

export function HighlightCard({
  item,
  className = "",
}: {
  item: HighlightItem;
  className?: string;
}) {
  return (
    <article
      className={`overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-[0_10px_24px_rgba(22,94,51,0.07)] ${className}`}
    >
      <div className="border-b border-emerald-100 bg-[#f6faf7] px-4 py-4">
        <p className="font-montserrat text-3xl font-extrabold leading-none text-hijau-tua md:text-4xl">
          {item.value}
        </p>
        <p className="mt-1 text-xs font-bold uppercase leading-5 text-hijau">
          {item.label}
        </p>
      </div>
      <div className="p-4">
        <h3 className="text-base font-extrabold text-hijau-tua">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-700">{item.text}</p>
      </div>
    </article>
  );
}

export function GalleryPanel({
  items,
  programName,
}: {
  items: readonly SubprogramGalleryItem[];
  programName: string;
}) {
  return (
    <section
      aria-labelledby="galeri-subprogram-title"
      className="rounded-lg border border-emerald-100 bg-white p-4 shadow-[0_12px_28px_rgba(22,94,51,0.08)]"
    >
      <div className="mb-4">
        <SectionTitle title="Dokumentasi Kegiatan" id="galeri-subprogram-title" />
      </div>
      <ProgramGalleryCarousel items={items} programName={programName} />
    </section>
  );
}

export function SubprogramNav({
  currentSlug,
}: {
  currentSlug: SilihPageuhSubprogramSlug;
}) {
  const otherSubprograms = silihPageuhSubprograms.filter(
    (item) => item.slug !== currentSlug,
  );

  return (
    <nav
      aria-label="Navigasi subprogram Silih Pageuh"
      className="rounded-lg border border-emerald-100 bg-white p-4 shadow-[0_12px_28px_rgba(22,94,51,0.08)]"
    >
      <h2 className="text-base font-extrabold text-hijau-tua">
        Subprogram Lain
      </h2>
      <div className="mt-3 grid gap-2">
        {otherSubprograms.map((item) => (
          <Link
            key={item.slug}
            href={item.href}
            className="group grid grid-cols-[56px_minmax(0,1fr)_auto] items-center gap-3 rounded-lg border border-emerald-100 p-2 text-sm font-bold text-hijau-tua transition-colors hover:border-hijau hover:bg-[#eef8f1]"
          >
            <span className="relative block aspect-[4/3] overflow-hidden rounded-md bg-emerald-50">
              <Image
                src={subprogramImages[item.slug]}
                alt={`Gambar subprogram ${item.name}`}
                fill
                sizes="56px"
                className="object-cover"
              />
            </span>
            <span className="min-w-0">{item.name}</span>
            <ArrowRight
              size={15}
              strokeWidth={2}
              aria-hidden="true"
              className="shrink-0 transition-transform group-hover:translate-x-1"
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}
