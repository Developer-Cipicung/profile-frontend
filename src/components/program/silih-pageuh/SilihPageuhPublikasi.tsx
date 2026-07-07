import Link from "next/link";
import { Download, FileText } from "lucide-react";

const publikasi = [
  {
    title: "Buku Panduan Silih Pageuh 2024",
    type: "PDF",
    year: "2024",
    href: "#",
  },
  {
    title: "Laporan Kinerja Program Semester I",
    type: "PDF",
    year: "2024",
    href: "#",
  },
  {
    title: "Modul Pelatihan Kader Posyandu",
    type: "PDF",
    year: "2024",
    href: "#",
  },
];

const SilihPageuhPublikasiSection = () => {
  return (
    <section
      aria-labelledby="publikasi-title"
      className="w-full bg-[#f8faf8] px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="publikasi-title"
          className="text-3xl font-bold text-hijau-tua md:text-4xl"
        >
          Materi &amp; Publikasi
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {publikasi.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex min-w-0 items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-[0_8px_20px_rgba(22,94,51,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:border-hijau hover:shadow-md"
              aria-label={`Unduh ${item.title}`}
            >
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-hijau-muda/25 text-hijau-tua">
                <FileText size={21} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold leading-snug text-hijau-tua">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  {item.type} · {item.year}
                </p>
              </div>
              <Download
                size={19}
                strokeWidth={1.8}
                aria-hidden="true"
                className="shrink-0 text-hijau transition-transform group-hover:translate-y-0.5"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SilihPageuhPublikasiSection;
