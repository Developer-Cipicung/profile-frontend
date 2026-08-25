"use client";

import { useState } from "react";
import {
  Building2,
  GraduationCap,
  Heart,
  MapPin,
  Package,
  Recycle,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import Pagination from "@/src/components/common/Pagination";
import {
  type VillageLocation,
  type VillageLocationCategory,
} from "@/src/data/villageLocations";

const categoryIcons: Record<VillageLocationCategory, LucideIcon> = {
  "Kantor Desa": Building2,
  Posyandu: Heart,
  "Fasilitas Umum": MapPin,
  Pendidikan: GraduationCap,
  "Sumber Daya": Sprout,
  "Bottle Press": Package,
  Biopori: Recycle,
};

const ITEMS_PER_PAGE = 6;

type LokasiCardProps = {
  lokasi: VillageLocation;
  isSelected: boolean;
  onSelect: (locationId: string) => void;
};

const LokasiCard = ({ lokasi, isSelected, onSelect }: LokasiCardProps) => {
  const Icon = categoryIcons[lokasi.category];
  const hasCoordinate = lokasi.position !== null;

  return (
    <button
      type="button"
      onClick={() => onSelect(lokasi.id)}
      disabled={!hasCoordinate}
      aria-pressed={isSelected}
      className={`group h-full rounded-lg border bg-white p-5 text-left shadow-[0_10px_26px_rgba(22,94,51,0.07)] transition-all duration-300 ${
        isSelected
          ? "border-hijau ring-4 ring-hijau/10"
          : "border-emerald-100 hover:-translate-y-1 hover:border-hijau/40 hover:shadow-[0_18px_38px_rgba(22,94,51,0.13)]"
      } ${hasCoordinate ? "" : "cursor-not-allowed opacity-70"}`}
    >
      <div className="flex items-start gap-3">
        <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#eef8f1] text-hijau-tua transition-colors group-hover:bg-[#dff3e6]">
          <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-[#eef8f1] px-2.5 py-1 text-[11px] font-semibold text-hijau-tua">
              {lokasi.category}
            </span>
            {lokasi.rw ? (
              <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase text-emerald-700">
                {lokasi.rw}
              </span>
            ) : null}
          </div>

          <h2 className="mt-3 text-base font-bold leading-snug text-hijau-tua md:text-lg">
            {lokasi.name}
          </h2>
        </div>
      </div>

      <div className="mt-4 space-y-2 border-t border-gray-100 pt-4">
        <p className="text-xs leading-relaxed text-gray-500">
          {lokasi.address}
        </p>
        {lokasi.description ? (
          <p className="text-sm leading-relaxed text-gray-600">
            {lokasi.description}
          </p>
        ) : null}
        <p
          className={`text-xs font-semibold ${
            hasCoordinate ? "text-hijau" : "text-amber-700"
          }`}
        >
          {hasCoordinate ? "Tampil di peta" : "Koordinat belum tersedia"}
        </p>
      </div>
    </button>
  );
};

type LokasiPentingSectionProps = {
  locations: VillageLocation[];
  selectedLocationId: string | null;
  onLocationSelect: (locationId: string) => void;
  onClearLocation: () => void;
};

const LokasiPentingSection = ({
  locations,
  selectedLocationId,
  onLocationSelect,
  onClearLocation,
}: LokasiPentingSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(locations.length / ITEMS_PER_PAGE));
  const effectivePage = Math.min(currentPage, totalPages);
  const startIndex = (effectivePage - 1) * ITEMS_PER_PAGE;
  const currentItems = locations.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const selectedLocation = locations.find(
    (location) => location.id === selectedLocationId,
  );

  return (
    <section
      aria-label="Daftar lokasi penting Desa Cipicung"
      className="w-full bg-[#f6faf7] px-5 pb-16 pt-12 sm:px-6 md:pb-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase text-hijau">
              Direktori Lokasi
            </p>
            <h2 className="mt-2 font-montserrat text-3xl font-extrabold text-hijau-tua md:text-4xl">
              Daftar Lokasi Penting
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              {locations.length} lokasi ditampilkan dalam daftar.
            </p>
          </div>

          {selectedLocation ? (
            <button
              type="button"
              onClick={onClearLocation}
              className="inline-flex w-fit items-center justify-center rounded-lg border border-hijau bg-white px-4 py-2 text-sm font-semibold text-hijau-tua transition-colors hover:bg-[#eef8f1]"
            >
              Tampilkan semua marker
            </button>
          ) : null}
        </div>

        {currentItems.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {currentItems.map((lokasi) => (
              <LokasiCard
                key={lokasi.id}
                lokasi={lokasi}
                isSelected={lokasi.id === selectedLocationId}
                onSelect={onLocationSelect}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-lg border border-dashed border-emerald-200 bg-white p-6 text-sm text-gray-600">
            Belum ada lokasi pada kategori ini.
          </div>
        )}

        {totalPages > 1 ? (
          <div className="mt-10">
            <Pagination
              currentPage={effectivePage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default LokasiPentingSection;
