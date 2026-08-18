"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { assets } from "@/src/assets/assets";
import {
  daftarPerangkatDesa,
  type PerangkatDesaItem,
} from "@/src/data/perangkatDesa";

type SafeImageProps = {
  src: StaticImageData;
  alt: string;
  sizes: string;
  fallback: string;
  className?: string;
};

const perangkatDesaRingkas = daftarPerangkatDesa.slice(0, 4);

const SafeImage = ({
  src,
  alt,
  sizes,
  fallback,
  className = "object-cover",
}: SafeImageProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-full w-full items-center justify-center bg-[#EAF8F0] px-2 text-center text-xs font-medium text-[#165E33] md:text-sm"
      >
        {fallback}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      onError={() => setHasError(true)}
    />
  );
};

const PerangkatCard = ({ perangkat }: { perangkat: PerangkatDesaItem }) => {
  const isMain = perangkat.utama === true;

  return (
    <article
      className={`group flex min-w-0 flex-col overflow-hidden rounded-lg border border-emerald-100 shadow-[0_8px_20px_rgba(22,94,51,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-hijau/40 hover:shadow-[0_18px_38px_rgba(22,94,51,0.14)] md:shadow-[0_12px_28px_rgba(22,94,51,0.08)] ${
        isMain ? "bg-[#165E33]" : "bg-white"
      }`}
    >
      <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-[#EAF8F0] md:aspect-[3/4]">
        {perangkat.image ? (
          <SafeImage
            src={perangkat.image}
            alt={`Foto ${perangkat.nama}, ${perangkat.jabatan}`}
            sizes="(min-width: 768px) 20vw, 50vw"
            fallback={`Foto ${perangkat.nama}`}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            role="img"
            aria-label={`Inisial ${perangkat.nama}`}
            className="flex h-full w-full items-center justify-center text-4xl font-extrabold text-[#165E33]"
          >
            {perangkat.nama
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
        )}
      </div>

      <div className="flex min-h-0 flex-1 flex-col p-3 md:p-4 xl:p-5">
        {isMain ? (
          <span className="mb-2 w-fit rounded-md bg-[var(--kuning)] px-2 py-1 text-[10px] font-bold text-[#165E33] md:mb-3 md:px-3 md:text-xs">
            Pimpinan Desa
          </span>
        ) : null}

        <h3
          className={`break-words text-xs font-bold leading-tight sm:text-sm md:text-base ${
            isMain ? "text-white" : "text-[#165E33]"
          }`}
        >
          {perangkat.nama}
        </h3>
        <p
          className={`mt-2 w-fit rounded-md px-2 py-1 text-[10px] font-semibold leading-snug sm:text-xs md:px-3 md:leading-relaxed ${
            isMain
              ? "bg-white/10 text-[#83FFBB]"
              : "bg-[#EAF8F0] text-[#165E33]"
          }`}
        >
          {perangkat.jabatan}
        </p>
      </div>
    </article>
  );
};

const SotkSection = () => {
  return (
    <section
      aria-labelledby="sotk-title"
      className="w-full bg-white px-5 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="max-w-2xl">
          <p className="text-sm font-bold uppercase text-hijau">
            Pemerintahan Desa
          </p>
          <h2
            id="sotk-title"
            className="mt-2 font-montserrat text-3xl font-extrabold text-[#165E33] md:text-4xl"
          >
            SOTK
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#5A7A68] md:text-base">
            Struktur Organisasi Kepemimpinan Desa
          </p>
        </header>

        <div className="mx-auto my-10 w-full max-w-[1100px] rounded-lg border border-emerald-100 bg-[#f8fbf8] p-4 shadow-[0_18px_42px_rgba(22,94,51,0.08)] md:my-14 md:p-6">
          <div className="relative aspect-[1107/516] w-full overflow-hidden rounded-lg bg-white">
            <SafeImage
              src={assets.sotk}
              alt="Bagan Struktur Organisasi dan Tata Kerja Desa Cipicung"
              sizes="(min-width: 1280px) 1100px, 100vw"
              fallback="Bagan SOTK Desa Cipicung"
              className="object-contain"
            />
          </div>
        </div>

        <div className="mx-auto w-full max-w-[640px] md:w-4/5 md:max-w-none">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-3 lg:gap-4 xl:gap-6">
            {perangkatDesaRingkas.map((perangkat) => (
              <PerangkatCard key={perangkat.nama} perangkat={perangkat} />
            ))}
          </div>

          <div className="mt-4 flex justify-end">
            <Link
              href="/profil-desa/struktur-organisasi"
              className="inline-flex items-center gap-2 rounded-lg border border-hijau-tua px-4 py-2 text-xs font-bold text-[#165E33] transition-colors hover:bg-hijau-tua hover:text-white sm:text-sm md:text-base"
            >
              Selengkapnya
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SotkSection;
