import type { LucideIcon } from "lucide-react";
import { Heart, House, LandPlot, Store, UsersRound } from "lucide-react";
import { getPublicPopulationSummary } from "@/src/services/populationService";
import { formatNumber } from "@/src/utils/format";

type DataCardProps = {
  icon: LucideIcon;
  value: string;
  description: string;
};

const DataCard = ({ icon: Icon, value, description }: DataCardProps) => {
  return (
    <article className="flex min-h-[140px] flex-col items-center justify-center rounded-xl bg-white px-4 py-5 text-center shadow-[0_8px_20px_rgba(22,94,51,0.16)] transition-transform duration-300 last:col-span-2 last:w-[calc(50%-0.5rem)] last:justify-self-center hover:-translate-y-1 sm:last:col-span-1 sm:last:w-full">
      <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
        <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
      </div>
      <p className="text-lg font-bold text-hijau-tua md:text-xl">{value}</p>
      <p className="mt-1 text-[11px] text-[#5A7A68] md:text-xs">
        {description}
      </p>
    </article>
  );
};

const Data = async () => {
  let populationSummary = null;

  try {
    populationSummary = await getPublicPopulationSummary();
  } catch {
    populationSummary = null;
  }

  const villageData: DataCardProps[] = [
    {
      icon: UsersRound,
      value: populationSummary
        ? formatNumber(populationSummary.currentPopulation)
        : "Data menyesuaikan",
      description: "Jumlah Penduduk",
    },
    {
      icon: LandPlot,
      value: "415,16 Ha",
      description: "Luas Desa",
    },
    {
      icon: House,
      value: populationSummary
        ? `${formatNumber(populationSummary.sumRt)} / ${formatNumber(
            populationSummary.sumRw,
          )}`
        : "Data menyesuaikan",
      description: "Jumlah RT / RW",
    },
    {
      icon: Heart,
      value: "12",
      description: "Jumlah Posyandu",
    },
    {
      icon: Store,
      value: "5",
      description: "Jumlah UMKM",
    },
  ];

  return (
    <section
      aria-label="Data Desa Cipicung"
      className="w-full px-4 py-8 md:px-32 md:py-16"
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
        {villageData.map((item) => (
          <DataCard key={item.description} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Data;
