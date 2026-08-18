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
    <article className="group flex min-h-[148px] flex-col justify-between rounded-lg border border-emerald-100 bg-white p-5 text-left shadow-[0_12px_28px_rgba(22,94,51,0.08)] transition-all duration-300 last:col-span-2 last:w-[calc(50%-0.5rem)] last:justify-self-center hover:-translate-y-1 hover:border-hijau/40 hover:shadow-[0_18px_38px_rgba(22,94,51,0.14)] sm:last:col-span-1 sm:last:w-full">
      <div className="flex size-11 items-center justify-center rounded-lg bg-[#eef8f1] text-hijau-tua transition-colors group-hover:bg-hijau-tua group-hover:text-white">
        <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
      </div>
      <div className="mt-5">
        <p className="text-xl font-extrabold text-hijau-tua md:text-2xl">
          {value}
        </p>
        <p className="mt-1 text-xs font-semibold uppercase text-[#5A7A68]">
          {description}
        </p>
      </div>
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
      value: "461,820 Ha",
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
      className="w-full bg-white px-5 py-10 sm:px-6 md:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-bold uppercase text-hijau">
            Data Singkat
          </p>
          <h2 className="mt-2 font-montserrat text-3xl font-extrabold text-hijau-tua md:text-4xl">
            Gambaran Desa
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {villageData.map((item) => (
            <DataCard key={item.description} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Data;
