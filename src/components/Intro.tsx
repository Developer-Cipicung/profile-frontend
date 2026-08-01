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
          Desa Cipicung adalah salah satu dari 9 desa diwilayah Kecamatan
          Cijeruk Kabupaten Bogor, Desa Cipicung berada di ketinggian 600 meter
          diatas permukaan Laut dengan Luas wilayah 461.820 Ha. Suhu di Daerah
          desa Cipicung 32 derajat celcius, sebagaimana desa-desa lain di
          Indonesia mempunyai Iklim Kemarau dan Iklim Penghujan.hal tersebut
          mempunyai mengaruh langsung terhadap pola Tanam yang ada di Desa
          Cipicung. Iklim suatu daerah sangat berpengaruh dalam kehidupan
          utamanya untuk pertumbuhan tanaman dan kelangsungan hidup. Selain itu,
          kondisi geografis desa Cipicung umumnya merupakan perbukitan.
        </p>
        <p className="text-xs md:text-base text-[#5A7A68] opacity-85">
          Pada tahun 1969 Kantor Desa Cipicung pertama berlokasi di Kp. Genteng,
          pada tahun 1970 diadakan musyawarah LKMD,LMD dan serta Tokoh
          Masyarakat, membahas tentang kantor desa Cipicung akan dipindahkan ke
          Kp. Cipicung Rt. 002/004, sebelum selesainya kantor desa Cipicung,
          menggunakan kantor Desa sementara adalah Lumbung padi di Kp. Cipicung
          Rt. 002/004 pada tahun 1973. Pembangunan Kantor desa Cipicung dengan
          bantuan Pemrintah menggunakan subsidi dan swadaya masyarakat.
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
