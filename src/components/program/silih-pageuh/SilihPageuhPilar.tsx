"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const pilarProgram = [
  {
    title: "AKAR",
    symbol: "🌳",
    accent: "bg-[#E8B921]/20",
    description:
      "Batang sebuah penguat seluruh bagian dalam suatu kehidupan. Keberadaan yang kuat dan menyeluruh menjadi dasar dalam membentuk proses kehidupan yang berdaya bagi masyarakat. Akar program menjadi pondasi awal dalam membangun kemandirian, kesehatan, dan keberlanjutan Desa Cipicung.",
  },
  {
    title: "BATANG",
    symbol: "🌱",
    accent: "bg-[#36C56F]/20",
    description:
      "Batang menggambarkan kekuatan utama program dalam menopang setiap kegiatan pemberdayaan masyarakat. Pilar ini berfokus pada penguatan kapasitas warga, kolaborasi, dan pelaksanaan kegiatan secara berkelanjutan.",
  },
  {
    title: "DAUN",
    symbol: "🍃",
    accent: "bg-[#83FFBB]/25",
    description:
      "Daun melambangkan pertumbuhan, penyegaran, dan manfaat yang dirasakan masyarakat. Pilar ini menekankan edukasi, publikasi, kesehatan, serta peningkatan kualitas hidup warga desa.",
  },
  {
    title: "TUNAS",
    symbol: "🌿",
    accent: "bg-[#165E33]/10",
    description:
      "Tunas menggambarkan harapan dan keberlanjutan. Pilar ini berfokus pada regenerasi, inovasi, dan pengembangan potensi desa agar program dapat terus berjalan setelah kegiatan utama selesai.",
  },
];

const SilihPageuhPilarSection = () => {
  const [activePilar, setActivePilar] = useState<string | null>(null);

  const handleTogglePilar = (title: string) => {
    setActivePilar((current) => (current === title ? null : title));
  };

  return (
    <section
      aria-labelledby="pilar-program-title"
      className="w-full bg-white px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <h2
            id="pilar-program-title"
            className="text-3xl font-bold text-hijau-tua md:text-4xl"
          >
            Pilar Program
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
            Empat pilar yang menjadi dasar penguatan dan keberlanjutan Program
            Silih Pageuh.
          </p>
        </header>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          {pilarProgram.map((pilar) => {
            const isActive = pilar.title === activePilar;

            return (
              <article
                key={pilar.title}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_24px_rgba(22,94,51,0.08)] transition-all duration-300 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => handleTogglePilar(pilar.title)}
                  aria-expanded={isActive}
                  className="flex w-full items-center gap-4 p-6 text-left"
                >
                  <span
                    aria-hidden="true"
                    className={`grid size-12 shrink-0 place-items-center rounded-full text-2xl ${pilar.accent}`}
                  >
                    {pilar.symbol}
                  </span>
                  <span className="flex-1 text-xl font-bold text-hijau-tua">
                    {pilar.title}
                  </span>
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className={`shrink-0 text-hijau transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                      {pilar.description}
                    </p>
                  </div>
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
