import Image from "next/image";
import {
  daftarPerangkatDesa,
  type PerangkatDesaItem,
} from "@/src/data/perangkatDesa";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function PerangkatCard({ perangkat }: { perangkat: PerangkatDesaItem }) {
  const isMain = perangkat.utama === true;

  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-[0_12px_28px_rgba(22,94,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-hijau/40 hover:shadow-[0_18px_38px_rgba(22,94,51,0.14)]">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#eef8f1]">
        {perangkat.image ? (
          <Image
            src={perangkat.image}
            alt={`Foto ${perangkat.nama}`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <div
            role="img"
            aria-label={`Inisial ${perangkat.nama}`}
            className="flex h-full w-full items-center justify-center text-5xl font-extrabold text-[var(--hijau-tua)]"
          >
            {getInitials(perangkat.nama)}
          </div>
        )}
      </div>

      <div
        className={`flex min-h-32 flex-1 flex-col p-5 ${
          isMain ? "bg-[var(--hijau-tua)] text-white" : "bg-white"
        }`}
      >
        {isMain ? (
          <span className="mb-3 w-fit rounded-md bg-[var(--kuning)] px-3 py-1 text-xs font-bold text-[var(--hijau-tua)]">
            Pimpinan Desa
          </span>
        ) : null}

        <h3
          className={`break-words text-lg font-bold leading-tight ${
            isMain ? "text-white" : "text-[var(--hijau-tua)]"
          }`}
        >
          {perangkat.nama}
        </h3>
        <p
          className={`mt-2 w-fit rounded-md px-3 py-1 text-sm font-semibold leading-relaxed ${
            isMain
              ? "bg-white/10 text-[var(--hijau-muda)]"
              : "bg-[var(--hijau-muda)]/25 text-[var(--hijau-tua)]"
          }`}
        >
          {perangkat.jabatan}
        </p>
      </div>
    </article>
  );
}

export default function PerangkatDesaSection() {
  return (
    <section className="bg-[#f6faf7] px-5 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase text-hijau">
            Pemerintahan Desa
          </p>
          <h2 className="mt-2 font-montserrat text-3xl font-extrabold leading-tight text-hijau-tua md:text-5xl">
            Perangkat Desa
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
            Daftar perangkat dan unsur pemerintahan Desa Cipicung
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {daftarPerangkatDesa.map((perangkat) => (
            <PerangkatCard key={perangkat.nama} perangkat={perangkat} />
          ))}
        </div>
      </div>
    </section>
  );
}
