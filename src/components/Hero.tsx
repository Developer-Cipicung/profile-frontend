import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { assets } from "../assets/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex min-h-[520px] w-full overflow-hidden bg-hijau-tua md:min-h-[640px]">
      <Image
        src={assets.desa}
        alt="Desa Cipicung"
        fill
        sizes="100vw"
        priority
        className="z-0 object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-hijau-tua/65" />

      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-24 pt-20 text-white sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-montserrat text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Selamat Datang di <br /> Desa Cipicung
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white md:text-lg md:leading-8">
            Desa Cipicung merupakan wilayah perbukitan yang subur di Kecamatan
            Cijeruk, Kabupaten Bogor, <br /> dengan potensi utama pada sektor
            pertanian, sumber daya alam, dan semangat gotong royong masyarakat.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/profil-desa"
              className="inline-flex items-center gap-2 rounded-lg bg-kuning px-5 py-3 text-sm font-bold text-hijau-tua transition-colors hover:bg-[#f0ca43] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kuning"
            >
              Profil Desa
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
            <Link
              href="/lokasi"
              className="inline-flex items-center gap-2 rounded-lg border border-white/70 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-hijau-tua focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Lihat Lokasi
              <MapPin size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-20 px-5 text-center text-white sm:px-6">
        <p className="text-sm font-semibold md:text-base">
          Kecamatan Cijeruk, Kabupaten Bogor, Jawa Barat
        </p>
      </div>
    </section>
  );
};

export default Hero;
