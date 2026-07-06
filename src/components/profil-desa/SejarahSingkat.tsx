const sejarahDesa = [
  "Desa Cipicung merupakan salah satu desa di Kecamatan Cijeruk, Kabupaten Bogor, Jawa Barat. Desa ini dikenal sebagai wilayah yang memiliki potensi pangan lokal, pertanian, serta industri rumah tangga makanan tradisional yang berkembang di tengah masyarakat.",
  "Mayoritas masyarakat Desa Cipicung bekerja di sektor pertanian dan usaha rumah tangga. Kehidupan sosial masyarakat desa juga didukung oleh semangat gotong royong, kebersamaan, dan kearifan lokal yang masih terjaga hingga saat ini.",
  "Seiring perkembangan zaman, Desa Cipicung terus berupaya meningkatkan pelayanan publik, keterbukaan informasi, pemberdayaan masyarakat, serta pengembangan potensi lokal agar desa semakin maju, sehat, dan berdaya.",
];

const SejarahSingkatSection = () => {
  return (
    <section
      aria-labelledby="sejarah-singkat-title"
      className="w-full bg-[#f8faf8] px-6 pb-8 pt-16"
    >
      <div className="mx-auto max-w-7xl">
        <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_8px_24px_rgba(22,94,51,0.08)] transition-shadow duration-300 hover:shadow-md md:rounded-3xl md:p-8">
          <h2
            id="sejarah-singkat-title"
            className="text-xl font-bold text-hijau-tua md:text-2xl"
          >
            Sejarah Singkat
          </h2>

          <div className="mt-6 space-y-5">
            {sejarahDesa.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-7 text-gray-600 md:text-base md:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default SejarahSingkatSection;
