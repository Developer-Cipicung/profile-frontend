import React from "react";
import { MapPin } from "lucide-react";
import { assets } from "../assets/assets";
import Image from "next/image";

const Hero = () => {
  return (
    // 1. Parent harus 'relative', 'w-full', dan memiliki tinggi tetap (h-[75vh])
    <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden flex flex-col bg-[linear-gradient(#1F7943,#0C3B1F)] ">
      {/* 2. Image menggunakan fill dan object-cover agar pas 100% tanpa distorsi */}
      <Image
        src={assets.desa}
        alt="desa_placeholder"
        fill
        sizes="100vw"
        priority
        className="object-cover object-center z-0 opacity-20"
      />

      <div className="relative z-20 flex-1 pt-12  md:pt-30  px-8 md:px-16 text-white flex flex-col justify-between">
        <div>
          <h1 className="text-5xl sm:text-7xl font- font-reddy mb-2">
            Selamat Datang di <br /> Desa Cipicung
          </h1>
          <p className="text-sm md:text-xl font-sans font-weight mb-4">
            Desa Cipicung merupakan desa yang kaya akan potensi pangan lokal
            dengan mayoritas <br /> masyarakat bekerja di sektor pertanian dan
            industri rumah tangga makanan tradisional.
          </p>
        </div>
        <div className="w-full flex items-center justify-center pb-4 sm:pb-8">
          <div className="flex items-center gap-2">
            <MapPin className="inline mr-1" />
            <p className="text-xs md:text-base font-bold">
              Kecamatan Cijeruk, Kabupaten Bogor, Jawa Barat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
