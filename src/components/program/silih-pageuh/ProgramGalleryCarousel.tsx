"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export type SubprogramGalleryItem = {
  image: string | StaticImageData | null;
  alt: string;
  caption: string;
};

type ProgramGalleryCarouselProps = {
  items: readonly SubprogramGalleryItem[];
  programName: string;
};

export default function ProgramGalleryCarousel({
  items,
  programName,
}: ProgramGalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? items.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === items.length - 1 ? 0 : current + 1,
    );
  };

  if (items.length === 0 || !activeItem) {
    return (
      <div className="rounded-lg border border-emerald-100 bg-white p-5 text-sm text-gray-600 shadow-[0_12px_28px_rgba(22,94,51,0.08)]">
        Dokumentasi kegiatan belum tersedia.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-[0_12px_28px_rgba(22,94,51,0.08)]">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#eef8f1]">
        {activeItem.image ? (
          <Image
            src={activeItem.image}
            alt={activeItem.alt}
            fill
            sizes="(min-width: 1024px) 720px, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={activeItem.alt}
            className="h-full w-full bg-[linear-gradient(135deg,#eef8f1_0%,#ffffff_58%,#f7eedf_100%)]"
          />
        )}

        {items.length > 1 ? (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label={`Tampilkan dokumentasi sebelumnya untuk ${programName}`}
              className="absolute left-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-lg border border-white/50 bg-white/90 text-hijau-tua shadow-[0_10px_22px_rgba(15,23,42,0.14)] transition-colors hover:bg-kuning"
            >
              <ChevronLeft size={18} strokeWidth={2} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label={`Tampilkan dokumentasi berikutnya untuk ${programName}`}
              className="absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-lg border border-white/50 bg-white/90 text-hijau-tua shadow-[0_10px_22px_rgba(15,23,42,0.14)] transition-colors hover:bg-kuning"
            >
              <ChevronRight size={18} strokeWidth={2} aria-hidden="true" />
            </button>
          </>
        ) : null}
      </div>

      <div className="border-t border-emerald-100 px-4 py-3">
        {activeItem.caption ? (
          <p className="mb-3 text-sm font-semibold leading-relaxed text-hijau-tua">
            {activeItem.caption}
          </p>
        ) : null}
        {items.length > 1 ? (
          <div
            className="flex items-center justify-center gap-2"
            aria-label={`Indikator dokumentasi ${programName}`}
          >
            {items.map((item, index) => (
              <button
                key={`${item.caption}-${index}`}
                type="button"
                aria-label={`Tampilkan dokumentasi ${index + 1} untuk ${programName}`}
                aria-current={index === activeIndex ? "step" : undefined}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-7 bg-hijau-tua"
                    : "w-2 bg-emerald-100 hover:bg-hijau"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
