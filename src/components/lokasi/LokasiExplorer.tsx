"use client";

import { useMemo, useState } from "react";
import LokasiPentingSection from "@/src/components/lokasi/LokasiPenting";
import MapClient from "@/src/components/MapClient";
import {
  mappedVillageLocations,
  villageLocations,
  type VillageLocationCategory,
} from "@/src/data/villageLocations";

type LocationCategoryFilter = VillageLocationCategory | "Semua";

const categoryOrder: VillageLocationCategory[] = [
  "Kantor Desa",
  "Posyandu",
  "Sumber Daya",
  "Bottle Press",
  "Biopori",
  "Fasilitas Umum",
  "Pendidikan",
];

export default function LokasiExplorer() {
  const [selectedCategory, setSelectedCategory] =
    useState<LocationCategoryFilter>("Semua");
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(
    null,
  );

  const categoryOptions = useMemo<LocationCategoryFilter[]>(() => {
    const availableCategories = new Set(
      villageLocations.map((location) => location.category),
    );

    return [
      "Semua",
      ...categoryOrder.filter((category) => availableCategories.has(category)),
    ];
  }, []);

  const filteredLocations = useMemo(
    () =>
      selectedCategory === "Semua"
        ? villageLocations
        : villageLocations.filter(
            (location) => location.category === selectedCategory,
          ),
    [selectedCategory],
  );

  const selectedLocation = useMemo(
    () =>
      selectedLocationId
        ? filteredLocations.find((location) => location.id === selectedLocationId)
        : null,
    [filteredLocations, selectedLocationId],
  );
  const visibleMarkers = useMemo(
    () =>
      selectedLocation
        ? mappedVillageLocations.filter(
            (location) => location.id === selectedLocation.id,
          )
        : mappedVillageLocations.filter(
            (location) =>
              selectedCategory === "Semua" ||
              location.category === selectedCategory,
          ),
    [selectedCategory, selectedLocation],
  );

  const handleCategoryChange = (category: LocationCategoryFilter) => {
    setSelectedCategory(category);
    setSelectedLocationId(null);
  };

  return (
    <>
      <section className="bg-white px-5 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase text-hijau">Peta Desa</p>
            <h1 className="mt-2 font-montserrat text-3xl font-extrabold leading-tight text-[var(--hijau-tua)] md:text-5xl">
              Lokasi Penting Desa
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
              Temukan fasilitas, layanan, dan lokasi strategis di Desa Cipicung
            </p>
          </div>

          <div className="mb-5 flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.05)] md:flex-row md:items-center md:justify-between">
            <div>
              <label
                htmlFor="location-category"
                className="text-sm font-bold text-hijau-tua"
              >
                Filter marker
              </label>
              <p className="mt-1 text-xs text-gray-500">
                {visibleMarkers.length} marker tampil di peta.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative w-full sm:w-auto">
                <select
                  id="location-category"
                  value={selectedCategory}
                  onChange={(event) =>
                    handleCategoryChange(
                      event.target.value as LocationCategoryFilter,
                    )
                  }
                  className="h-11 w-full min-w-48 appearance-none rounded-full border border-gray-200 bg-white pl-5 pr-10 text-sm font-semibold text-hijau-tua shadow-sm outline-none transition-colors hover:border-gray-300 focus:border-hijau-tua focus:ring-4 focus:ring-gray-100 sm:w-auto"
                >
                  {categoryOptions.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 h-2 w-2 -translate-y-2 rotate-45 border-b-2 border-r-2 border-gray-400" />
              </div>

              {selectedLocation ? (
                <button
                  type="button"
                  onClick={() => setSelectedLocationId(null)}
                  className="h-11 rounded-full border border-gray-200 bg-white px-5 text-sm font-semibold text-hijau-tua shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-100"
                >
                  Reset pilihan
                </button>
              ) : null}
            </div>
          </div>

          <MapClient
            locations={visibleMarkers}
            focusLocationId={selectedLocationId}
          />
        </div>
      </section>

      <LokasiPentingSection
        key={selectedCategory}
        locations={filteredLocations}
        selectedLocationId={selectedLocationId}
        onLocationSelect={setSelectedLocationId}
        onClearLocation={() => setSelectedLocationId(null)}
      />
    </>
  );
}
