import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
import { assets } from "@/src/assets/assets";

type Berita = {
  title: string;
  description: string;
  views: string;
  date: string;
  image: StaticImageData;
};

const beritaDesa: Berita[] = [
  {
    title: "Program Deteksi Diabetes Dini",
    description:
      "Screening kesehatan gratis untuk lansia dengan fokus pada deteksi dini diabetes melitus dan hipertensi, dilengkapi dengan konsultasi dokter dan pemberian obat gratis.",
    views: "Dilihat 180 kali",
    date: "18 Februari 2026",
    image: assets.desa,
  },
  {
    title: "Optimalisasi Pertanian Organik dan Pangan Lokal",
    description:
      "Kegiatan pengembangan potensi pertanian desa melalui edukasi pertanian organik dan pemanfaatan pangan lokal masyarakat Desa Cipicung.",
    views: "Dilihat 180 kali",
    date: "18 Februari 2026",
    image: assets.desa,
  },
  {
    title: "Optimalisasi Pertanian Organik dan Pangan Lokal",
    description:
      "Kegiatan pengembangan potensi pertanian desa melalui edukasi pertanian organik dan pemanfaatan pangan lokal masyarakat Desa Cipicung.",
    views: "Dilihat 180 kali",
    date: "18 Februari 2026",
    image: assets.desa,
  },
];

const BeritaCard = ({ berita }: { berita: Berita }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(22,94,51,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(22,94,51,0.2)]">
      <div className="relative h-48 w-full shrink-0 overflow-hidden md:h-56">
        <Image
          src={berita.image}
          alt={`Gambar berita ${berita.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-lg font-bold leading-snug text-hijau-tua md:text-xl">
          {berita.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
          {berita.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
          <p className="flex items-center gap-2 text-xs font-medium text-hijau-tua">
            <Eye size={16} strokeWidth={1.8} aria-hidden="true" />
            {berita.views}
          </p>
          <time
            dateTime="2026-02-18"
            className="rounded-full bg-kuning px-3 py-1.5 text-[11px] font-semibold text-hijau-tua"
          >
            {berita.date}
          </time>
        </div>
      </div>
    </article>
  );
};

const BeritaDesaSection = () => {
  return (
    <section
      aria-labelledby="berita-desa-title"
      className="w-full bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="berita-desa-title"
          className="text-center text-3xl font-bold tracking-wide text-hijau-tua md:text-4xl"
        >
          Berita Desa
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {beritaDesa.map((berita, index) => (
            <BeritaCard key={`${berita.title}-${index}`} berita={berita} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/berita"
            className="font-bold text-hijau-tua underline decoration-2 underline-offset-4 transition-colors hover:text-kuning"
          >
            Lihat berita lebih banyak
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BeritaDesaSection;
