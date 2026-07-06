const visiDesa =
  "Terwujudnya Desa Cipicung yang Maju, Mandiri, Sehat, dan Sejahtera Berlandaskan Nilai Gotong Royong dan Kearifan Lokal";

const misiDesa = [
  "Meningkatkan kualitas pelayanan publik yang prima, transparan, dan mudah diakses oleh masyarakat.",
  "Mengembangkan potensi ekonomi lokal melalui pertanian, pangan lokal, dan produk UMKM desa.",
  "Mewujudkan masyarakat sehat melalui layanan posyandu dan program kesehatan masyarakat yang berkelanjutan.",
  "Membangun infrastruktur desa secara merata untuk mendukung aktivitas sosial dan ekonomi warga.",
  "Melestarikan budaya, gotong royong, serta kearifan lokal masyarakat Desa Cipicung.",
];

const VisiMisiSection = () => {
  return (
    <section
      aria-label="Visi dan misi Desa Cipicung"
      className="w-full bg-[#f8faf8] px-6 pb-20 pt-8"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="flex h-full flex-col rounded-2xl bg-hijau-tua p-6 text-white shadow-[0_8px_24px_rgba(22,94,51,0.18)] md:rounded-3xl md:p-8">
          <h2 className="text-xl font-bold text-hijau-muda md:text-2xl">
            Visi
          </h2>
          <blockquote className="my-auto pt-6 text-base italic leading-8 text-white/90 md:text-lg md:leading-9">
            “{visiDesa}”
          </blockquote>
        </article>

        <article className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_8px_24px_rgba(22,94,51,0.08)] transition-shadow duration-300 hover:shadow-md md:rounded-3xl md:p-8">
          <h2 className="text-xl font-bold text-hijau-tua md:text-2xl">
            Misi
          </h2>
          <ol className="mt-6 space-y-4">
            {misiDesa.map((item, index) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-hijau-muda/40 text-xs font-semibold text-hijau-tua">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-gray-600">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  );
};

export default VisiMisiSection;
