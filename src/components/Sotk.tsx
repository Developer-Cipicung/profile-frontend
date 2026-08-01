"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
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
      className={`group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-100 shadow-[0_8px_24px_rgba(22,94,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        isMain ? "bg-[#165E33]" : "bg-white"
      }`}
    >
      <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden bg-[#EAF8F0]">
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

      <div className="flex min-h-0 flex-1 flex-col p-4 xl:p-5">
        {isMain ? (
          <span className="mb-3 w-fit rounded-full bg-[var(--kuning)] px-3 py-1 text-xs font-bold text-[#165E33]">
            Pimpinan Desa
          </span>
        ) : null}

        <h3
          className={`break-words text-base font-bold leading-tight ${
            isMain ? "text-white" : "text-[#165E33]"
          }`}
        >
          {perangkat.nama}
        </h3>
        <p
          className={`mt-2 w-fit rounded-full px-3 py-1 text-xs font-semibold leading-relaxed ${
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
      className="w-full bg-white py-4 md:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="max-w-2xl">
          <h2
            id="sotk-title"
            className="text-3xl font-bold text-[#165E33] md:text-4xl"
          >
            SOTK
          </h2>
          <p className="mt-2 text-sm text-[#5A7A68] md:text-base">
            Struktur Organisasi Kepemimpinan Desa
          </p>
        </header>

        <div className="mx-auto my-10 w-full max-w-[1100px] md:my-14">
          <div className="relative aspect-[1107/516] w-full overflow-hidden">
            <SafeImage
              src={assets.sotk}
              alt="Bagan Struktur Organisasi dan Tata Kerja Desa Cipicung"
              sizes="(min-width: 1280px) 1100px, 100vw"
              fallback="Bagan SOTK Desa Cipicung"
              className="object-contain"
            />
          </div>
        </div>

        <div className="mx-auto w-full max-w-[760px] md:w-4/5 md:max-w-none">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-3 lg:gap-4 xl:gap-6">
            {perangkatDesaRingkas.map((perangkat) => (
              <PerangkatCard key={perangkat.nama} perangkat={perangkat} />
            ))}
          </div>

          <div className="mt-4 flex justify-end">
            <Link
              href="/profil-desa/struktur-organisasi"
              className="text-xs font-semibold text-[#165E33] transition-colors hover:text-[#36C56F] sm:text-sm md:text-base"
            >
              Selengkapnya &gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SotkSection;
