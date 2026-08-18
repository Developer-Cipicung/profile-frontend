import Image from "next/image";
import { assets } from "@/src/assets/assets";

const SilihPageuhHeroSection = () => {
  return (
    <section className="relative min-h-[620px] w-full overflow-hidden md:min-h-[720px]">
      <Image
        src={assets.silihPageuhHero}
        alt="Hero Program Silih Pageuh Desa Cipicung"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(12,59,31,0.22)_45%,rgba(12,59,31,0.86)_100%)]" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end px-5 pb-16 text-center sm:px-6 md:pb-24">
        <h1 className="font-montserrat text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Silih Pageuh
        </h1>

        <p className="mt-3 font-montserrat text-lg font-bold text-[#ffefb0] md:text-2xl">
          PPK Ormawa Himagizi 2026
        </p>
      </div>
    </section>
  );
};

export default SilihPageuhHeroSection;
