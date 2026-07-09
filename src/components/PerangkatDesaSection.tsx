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
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_24px_rgba(22,94,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-60 w-full overflow-hidden bg-[var(--hijau-muda)]/40">
        {perangkat.image ? (
          <Image
            src={perangkat.image}
            alt={`Foto ${perangkat.nama}`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
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
          <span className="mb-3 w-fit rounded-full bg-[var(--kuning)] px-3 py-1 text-xs font-bold text-[var(--hijau-tua)]">
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
          className={`mt-2 w-fit rounded-full px-3 py-1 text-sm font-semibold leading-relaxed ${
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
    <section className="bg-[#f8faf8] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[var(--hijau-tua)] md:text-4xl">
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
