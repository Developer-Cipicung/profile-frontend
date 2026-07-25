import React from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "../assets/assets";

const Intro = () => {
  return (
    <section className="flex w-full flex-col items-start gap-8 px-4 py-8 md:flex-row md:justify-between md:gap-10 md:px-32 md:py-16">
      <div className="flex min-w-0 max-w-[728px] flex-1 flex-col gap-4">
        <h2 className="text-xl md:text-3xl font-semibold">
          Mengenal Desa Cipicung
        </h2>
        <p className="text-xs md:text-base text-[#5A7A68] opacity-85">
          Desa Cipicung terletak di Kecamatan Cijeruk, Kabupaten Bogor, Jawa
          Barat. Desa ini merupakan wilayah perbukitan yang subur dengan
          potensi utama pada sektor pertanian, sumber daya alam, serta
          kehidupan masyarakat yang menjunjung tinggi nilai gotong royong.
        </p>
        <p className="text-xs md:text-base text-[#5A7A68] opacity-85">
          Dengan luas wilayah sekitar 461,820 hektare dan ketinggian kurang
          lebih 600 meter di atas permukaan laut, Desa Cipicung terus berupaya
          mengembangkan potensi lokal, meningkatkan pelayanan publik, serta
          membangun masyarakat yang maju, mandiri, dan sejahtera.
        </p>
        <Link
          href={"/profil-desa"}
          className="border rounded-xl py-1.5 px-2 w-[150px] md:w-[200px] text-center border-green-700 mt-5 md:mt-10"
        >
          <p className="text-hijau-tua text-xs md:text-base ">
            Selengkapnya &gt;
          </p>
        </Link>
      </div>
      <div className="relative aspect-[4/3] w-full max-w-[500px] shrink-0 self-center md:w-[45%] md:self-start">
        <Image
          src={assets.desa}
          alt="Desa Cipicung"
          fill
          className="rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default Intro;
