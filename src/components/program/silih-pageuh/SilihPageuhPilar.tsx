import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { silihPageuh } from "@/src/assets/assets";
import {
  silihPageuhSubprograms,
  type SilihPageuhSubprogramSlug,
} from "@/src/data/silihPageuhSubprograms";

const subprogramImages: Record<SilihPageuhSubprogramSlug, StaticImageData> = {
  "akar-desa": silihPageuh.ts1,
  "rindang-pangan": silihPageuh.ts2,
  "tunas-sehat": silihPageuh.ts3,
  "batang-kayu": silihPageuh.ts4,
};

const SilihPageuhPilarSection = () => {
  return (
    <section
      aria-labelledby="subprogram-silih-pageuh-title"
      className="w-full bg-white px-5 pb-12 pt-6 sm:px-6 md:pb-20 md:pt-10 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-7 max-w-3xl text-center md:mb-10">
          <h2
            id="subprogram-silih-pageuh-title"
            className="font-montserrat text-2xl font-extrabold text-hijau-tua md:text-4xl"
          >
            Subprogram Silih Pageuh
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-700 md:text-base md:leading-8">
            Empat subprogram resmi yang menjadi ruang pelaksanaan Program Silih
            Pageuh di Desa Cipicung.
          </p>
        </header>

        <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          {silihPageuhSubprograms.map((subprogram) => {
            const image = subprogramImages[subprogram.slug];

            return (
              <article
                key={subprogram.slug}
                className="group flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-[0_12px_28px_rgba(22,94,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-hijau/40 hover:shadow-[0_18px_38px_rgba(22,94,51,0.14)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-emerald-50">
                  <Image
                    src={image}
                    alt={`Gambar subprogram ${subprogram.name}`}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-3 sm:p-4 md:p-5">
                  <p className="text-[10px] font-bold uppercase leading-4 text-hijau sm:text-xs">
                    {subprogram.focus}
                  </p>
                  <h3 className="mt-1.5 text-sm font-extrabold leading-tight text-hijau-tua sm:text-base md:mt-2 md:text-xl">
                    {subprogram.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs leading-5 text-gray-600 sm:line-clamp-4 md:mt-4 md:line-clamp-5 md:text-sm md:leading-7">
                    {subprogram.shortDescription}
                  </p>

                  <Link
                    href={subprogram.href}
                    className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-bold text-hijau-tua transition-colors hover:text-hijau md:gap-2 md:pt-6 md:text-sm"
                    aria-label={`Lihat detail subprogram ${subprogram.name}`}
                  >
                    Lihat detail
                    <ArrowRight
                      size={14}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SilihPageuhPilarSection;
