import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { assets } from "../assets/assets";

const Intro = () => {
  return (
    <section className="w-full bg-[#f6faf7] px-5 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_480px] xl:grid-cols-[minmax(0,1fr)_540px]">
        <div className="min-w-0">
          <p className="text-sm font-bold uppercase text-hijau">
            Profil Desa
          </p>
          <h2 className="mt-2 font-montserrat text-3xl font-extrabold leading-tight text-hijau-tua md:text-4xl">
            Mengenal Desa Cipicung
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-[#4f6f5f] md:text-base md:leading-8">
            <p>
              Desa Cipicung adalah salah satu dari 9 desa diwilayah Kecamatan
              Cijeruk Kabupaten Bogor, Desa Cipicung berada di ketinggian 600
              meter diatas permukaan Laut dengan Luas wilayah 461.820 Ha. Suhu
              di Daerah desa Cipicung 32 derajat celcius, sebagaimana
              desa-desa lain di Indonesia mempunyai Iklim Kemarau dan Iklim
              Penghujan.hal tersebut mempunyai mengaruh langsung terhadap pola
              Tanam yang ada di Desa Cipicung. Iklim suatu daerah sangat
              berpengaruh dalam kehidupan utamanya untuk pertumbuhan tanaman dan
              kelangsungan hidup. Selain itu, kondisi geografis desa Cipicung
              umumnya merupakan perbukitan.
            </p>
            <p>
              Pada tahun 1969 Kantor Desa Cipicung pertama berlokasi di Kp.
              Genteng, pada tahun 1970 diadakan musyawarah LKMD,LMD dan serta
              Tokoh Masyarakat, membahas tentang kantor desa Cipicung akan
              dipindahkan ke Kp. Cipicung Rt. 002/004, sebelum selesainya kantor
              desa Cipicung, menggunakan kantor Desa sementara adalah Lumbung
              padi di Kp. Cipicung Rt. 002/004 pada tahun 1973. Pembangunan
              Kantor desa Cipicung dengan bantuan Pemrintah menggunakan subsidi
              dan swadaya masyarakat.
            </p>
          </div>
          <Link
            href="/profil-desa"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-hijau-tua bg-white px-5 py-3 text-sm font-bold text-hijau-tua shadow-[0_12px_28px_rgba(22,94,51,0.08)] transition-all hover:-translate-y-0.5 hover:bg-hijau-tua hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Selengkapnya
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>

        <div className="relative w-full">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-[0_22px_45px_rgba(15,23,42,0.16)]">
            <Image
              src={assets.desa}
              alt="Desa Cipicung"
              fill
              sizes="(min-width: 1280px) 540px, (min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-lg border border-emerald-100 bg-white px-5 py-4 shadow-[0_16px_32px_rgba(22,94,51,0.12)]">
            <p className="text-sm font-semibold text-hijau-tua">
              Kecamatan Cijeruk, Kabupaten Bogor
            </p>
            <p className="mt-1 text-xs text-[#5A7A68]">Jawa Barat</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
