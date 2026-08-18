const visiDesa =
  "Terwujudnya Pemerintahan Desa yang Transparan, Profesional dan Akuntabel menuju Masyarakat Sejahtera, Cerdas dan Agamis";

const misiDesa = [
  "Meningkatkan Pelayanan Publik yang Prima.",
  "Meningkatkan Pembangunan Sarana dan Prasarana Tepat Sasaran.",
  "Optimalisasi Pelayanan Posyandu.",
  "Menciptakan Kondisi Masyarakat Desa Cipicung yang Aman, Tertib, dan Rukun dalam kehidupan bermasyarakat dengan azas musyawarah mufakat serta gotong royong.",
  "Pemberdayaan Potensi Kepemudaan Melalui Wadah Organisasi.",
];

const VisiMisiSection = () => {
  return (
    <section
      aria-label="Visi dan misi Desa Cipicung"
      className="w-full bg-[#f6faf7] px-5 pb-20 pt-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="flex h-full flex-col rounded-lg bg-hijau-tua p-6 text-white shadow-[0_18px_40px_rgba(22,94,51,0.18)] md:p-8">
          <h2 className="text-xl font-bold text-[#ffefb0] md:text-2xl">
            Visi
          </h2>
          <blockquote className="my-auto pt-6 text-base italic leading-8 text-white/90 md:text-lg md:leading-9">
            &quot;{visiDesa}&quot;
          </blockquote>
        </article>

        <article className="h-full rounded-lg border border-emerald-100 bg-white p-6 shadow-[0_12px_28px_rgba(22,94,51,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-hijau/40 hover:shadow-[0_18px_38px_rgba(22,94,51,0.13)] md:p-8">
          <h2 className="text-xl font-bold text-hijau-tua md:text-2xl">
            Misi
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Misi Desa Cipicung yaitu sebagai berikut:
          </p>
          <ol className="mt-6 space-y-4">
            {misiDesa.map((item, index) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#eef8f1] text-xs font-semibold text-hijau-tua">
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
