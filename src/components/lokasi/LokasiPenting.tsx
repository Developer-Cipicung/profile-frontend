"use client";

import { useMemo, useState } from "react";
import {
  Building2,
  GraduationCap,
  Heart,
  HeartPulse,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import Pagination from "@/src/components/common/Pagination";

type Lokasi = {
  name: string;
  category: string;
  address: string;
  description: string;
};

const categories = [
  "Semua",
  "Posyandu",
  "Kantor Desa",
  "Fasilitas Umum",
  "Pendidikan",
  "Kesehatan",
];

const lokasiList: Lokasi[] = [
  {
    name: "Kantor Desa Cipicung",
    category: "Kantor Desa",
    address:
      "Jl. Genteng No.01, Cipicung, Cijeruk, Kabupaten Bogor, Jawa Barat 16740",
    description: "Administrasi desa, surat menyurat, dan pelayanan publik.",
  },
  ...[
    ["Posyandu Cempaka 1", "RW 01"],
    ["Posyandu Anggrek 1", "RW 02"],
    ["Posyandu Anggrek 2", "RW 02"],
    ["Posyandu Melati 1", "RW 03"],
    ["Posyandu Melati 2", "RW 03"],
    ["Posyandu Flamboyan 1", "RW 04"],
    ["Posyandu Flamboyan 2", "RW 04"],
    ["Posyandu Mawar 1", "RW 05"],
    ["Posyandu Mawar 2", "RW 05"],
    ["Posyandu Bougenvil", "RW 06"],
    ["Posyandu Cempaka 2", "RW 06"],
    ["Posyandu Aster", "RW 07"],
  ].map(([name, rw]) => ({
    name,
    category: "Posyandu",
    address: `${rw}, Desa Cipicung`,
    description: "Layanan kesehatan ibu, anak, balita, dan lansia.",
  })),
  {
    name: "PAUD Desa Cipicung",
    category: "Pendidikan",
    address: "Desa Cipicung, Kecamatan Cijeruk",
    description: "Layanan pendidikan anak usia dini.",
  },
  {
    name: "Lapangan Desa Cipicung",
    category: "Fasilitas Umum",
    address: "Desa Cipicung, Kecamatan Cijeruk",
    description: "Fasilitas umum untuk kegiatan warga dan olahraga.",
  },
  {
    name: "Puskesmas Pembantu Cipicung",
    category: "Kesehatan",
    address: "Desa Cipicung, Kecamatan Cijeruk",
    description: "Pelayanan kesehatan dasar bagi masyarakat Desa Cipicung.",
  },
];

const categoryIcons: Record<string, LucideIcon> = {
  Posyandu: Heart,
  "Kantor Desa": Building2,
  Pendidikan: GraduationCap,
  Kesehatan: HeartPulse,
  "Fasilitas Umum": MapPin,
};

const ITEMS_PER_PAGE = 6;

const LokasiCard = ({ lokasi }: { lokasi: Lokasi }) => {
  const Icon = categoryIcons[lokasi.category] ?? MapPin;

  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_8px_20px_rgba(22,94,51,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-hijau-muda/25 text-hijau-tua">
          <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
        </div>
        <span className="rounded-full bg-hijau-muda/25 px-3 py-1 text-[11px] font-semibold text-hijau-tua">
          {lokasi.category}
        </span>
      </div>

      <h2 className="mt-4 text-lg font-bold leading-snug text-hijau-tua">
        {lokasi.name}
      </h2>
      <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-gray-500">
        <MapPin
          size={15}
          strokeWidth={1.8}
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-hijau"
        />
        {lokasi.address}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        {lokasi.description}
      </p>
    </article>
  );
};

const LokasiPentingSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredLokasi = useMemo(
    () =>
      selectedCategory === "Semua"
        ? lokasiList
        : lokasiList.filter((item) => item.category === selectedCategory),
    [selectedCategory],
  );

  const totalPages = Math.ceil(filteredLokasi.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredLokasi.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section
      aria-label="Daftar lokasi penting Desa Cipicung"
      className="w-full bg-[#f8faf8] px-6 pb-16 md:pb-20"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="flex gap-3 overflow-x-auto pb-2"
          aria-label="Filter kategori lokasi"
        >
          {categories.map((category) => {
            const isActive = category === selectedCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => selectCategory(category)}
                aria-pressed={isActive}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-hijau bg-hijau text-white"
                    : "border-gray-200 bg-white text-hijau-tua hover:border-hijau hover:text-hijau"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {currentItems.map((lokasi) => (
            <LokasiCard key={lokasi.name} lokasi={lokasi} />
          ))}
        </div>

        <div className="mt-10">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default LokasiPentingSection;
