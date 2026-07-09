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
import {
  villageLocations,
  type VillageLocation,
  type VillageLocationCategory,
} from "@/src/data/villageLocations";

const categories = [
  "Semua",
  "Kantor Desa",
  "Posyandu",
  "Fasilitas Umum",
  "Pendidikan",
  "Kesehatan",
] as const satisfies readonly (VillageLocationCategory | "Semua")[];

type LocationCategoryFilter = (typeof categories)[number];

const categoryIcons: Record<VillageLocationCategory, LucideIcon> = {
  Posyandu: Heart,
  "Kantor Desa": Building2,
  Pendidikan: GraduationCap,
  Kesehatan: HeartPulse,
  "Fasilitas Umum": MapPin,
};

const ITEMS_PER_PAGE = 6;

const LokasiCard = ({ lokasi }: { lokasi: VillageLocation }) => {
  const Icon = categoryIcons[lokasi.category];
  const hasCoordinate = lokasi.position !== null;

  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_8px_20px_rgba(22,94,51,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-hijau-muda/25 text-hijau-tua">
          <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          <span className="rounded-full bg-hijau-muda/25 px-3 py-1 text-[11px] font-semibold text-hijau-tua">
            {lokasi.category}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
              hasCoordinate
                ? "bg-emerald-50 text-emerald-700"
                : "bg-amber-50 text-amber-700"
            }`}
          >
            {hasCoordinate ? "Tersedia di peta" : "Koordinat belum tersedia"}
          </span>
        </div>
      </div>

      <h2 className="mt-4 text-lg font-bold leading-snug text-hijau-tua">
        {lokasi.name}
      </h2>
      {lokasi.rw ? (
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-hijau">
          {lokasi.rw}
        </p>
      ) : null}
      <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-gray-500">
        <MapPin
          size={15}
          strokeWidth={1.8}
          aria-hidden="true"
          className="mt-0.5 shrink-0 text-hijau"
        />
        {lokasi.address}
      </p>
      {lokasi.description ? (
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          {lokasi.description}
        </p>
      ) : null}
    </article>
  );
};

const LokasiPentingSection = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<LocationCategoryFilter>("Semua");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredLokasi = useMemo(
    () =>
      selectedCategory === "Semua"
        ? villageLocations
        : villageLocations.filter((item) => item.category === selectedCategory),
    [selectedCategory],
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredLokasi.length / ITEMS_PER_PAGE),
  );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredLokasi.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const selectCategory = (category: LocationCategoryFilter) => {
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
            <LokasiCard key={lokasi.id} lokasi={lokasi} />
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
