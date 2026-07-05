import React from "react";
import Image from "next/image";
import { assets } from "../assets/assets";

const Kades = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full h-auto my-8 md:,y-16 px-4 md:px-32">
      <Image
        src={assets.kades}
        alt="Kades"
        width={200}
        height={200}
        className="rounded-full w-40 h-40 md:w-60 md:h-60 object-cover"
      />
      <div className="">
        <h1 className="text-2xl sm:text-3xl font-bold text-hijau-tua">
          Sambutan Kepala Desa
        </h1>
        <span className="font-bold text-l md:text-xl mb-2">
          Mario Sp.d, Pp.h
        </span>
        <p className="text-xs sm:text-base mt-2">
          Website ini kami hadirkan sebagai bagian dari upaya meningkatkan
          transparansi, partisipasi, dan pelayanan publik yang lebih baik di
          desa kita. Melalui media ini, kami berharap dapat memudahkan warga
          dalam mengakses informasi mengenai kegiatan pemerintahan desa, program
          pembangunan, serta layanan masyarakat lainnya. Selain itu, kami
          berharap website ini dapat menjadi wadah untuk menjalin silaturahmi,
          baik antara warga desa maupun dengan masyarakat di luar desa, guna
          mempererat tali persaudaraan dan membangun Desa Sukaresmi yang lebih
          maju.
        </p>
      </div>
    </div>
  );
};

export default Kades;
