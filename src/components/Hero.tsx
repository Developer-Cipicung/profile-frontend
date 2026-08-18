import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { assets } from "../assets/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex min-h-[560px] w-full overflow-hidden bg-hijau-tua md:min-h-[720px]">
      <Image
        src={assets.desa}
        alt="Desa Cipicung"
        fill
        sizes="100vw"
        priority
        className="z-0 object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(12,59,31,0.92)_0%,rgba(22,94,51,0.78)_46%,rgba(22,94,51,0.28)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-28 bg-[linear-gradient(0deg,#ffffff_0%,rgba(255,255,255,0)_100%)]" />

      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase text-white/80 backdrop-blur">
            <MapPin size={14} strokeWidth={1.9} aria-hidden="true" />
            Kecamatan Cijeruk, Kabupaten Bogor
          </p>
          <h1 className="font-montserrat text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Selamat Datang di <br /> Desa Cipicung
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-xl md:leading-9">
            Desa Cipicung merupakan wilayah perbukitan yang subur di Kecamatan
            Cijeruk, Kabupaten Bogor, <br /> dengan potensi utama pada sektor
            pertanian, sumber daya alam, dan semangat gotong royong masyarakat.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/profil-desa"
              className="inline-flex items-center gap-2 rounded-lg bg-kuning px-5 py-3 text-sm font-bold text-hijau-tua shadow-[0_14px_30px_rgba(232,185,33,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#f0ca43] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuning"
            >
              Profil Desa
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
            <Link
              href="/lokasi"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Lihat Lokasi
              <MapPin size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex max-w-xl items-center gap-3 rounded-lg border border-white/15 bg-white/10 p-4 text-white/85 backdrop-blur">
          <MapPin className="shrink-0" size={20} strokeWidth={1.9} />
          <p className="text-sm font-semibold md:text-base">
            Kecamatan Cijeruk, Kabupaten Bogor, Jawa Barat
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
