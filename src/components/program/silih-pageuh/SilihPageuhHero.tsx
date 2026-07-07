import Image from "next/image";
import { assets } from "@/src/assets/assets";

const SilihPageuhHeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src={assets.silihPageuhHero}
        alt="Hero Program Silih Pageuh Desa Cipicung"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Optional: overlay agar tulisan lebih terbaca */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white to-transparent" /> */}

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end px-6 pb-16 text-center md:pb-24">
        <h1 className="font-reddy bg-gradient-to-r from-[#165E33] to-[#36C56F] bg-clip-text text-5xl leading-tight text-transparent md:text-7xl">
          Silih Pageuh
        </h1>

        <p className="font-reddy mt-3 text-lg font-semibold text-hijau-tua md:text-2xl">
          Program Unggulan 2026
        </p>
      </div>
    </section>
  );
};

export default SilihPageuhHeroSection;
