const sejarahDesa = [
  "Desa Cipicung merupakan salah satu dari sembilan desa yang berada di wilayah Kecamatan Cijeruk, Kabupaten Bogor, Provinsi Jawa Barat. Desa ini terletak pada ketinggian sekitar 600 meter di atas permukaan laut dengan luas wilayah kurang lebih 461,820 hektare. Kondisi geografisnya didominasi oleh daerah perbukitan yang subur sehingga sejak dahulu menjadi kawasan yang mengandalkan sektor pertanian sebagai mata pencaharian utama masyarakatnya.",
  "Pemerintahan Desa Cipicung mulai berjalan pada tahun 1969, dengan kantor desa pertama yang berlokasi di Kampung Genteng. Seiring meningkatnya kebutuhan pelayanan kepada masyarakat, pada tahun 1970 diselenggarakan musyawarah yang melibatkan LKMD, LMD, dan tokoh masyarakat untuk menentukan lokasi kantor desa yang lebih representatif. Hasil musyawarah tersebut menetapkan pemindahan kantor desa ke Kampung Cipicung RT 002/RW 004. Selama proses pembangunan berlangsung, kegiatan pemerintahan sementara dilaksanakan di sebuah lumbung padi yang berada di lokasi tersebut hingga kantor desa selesai dibangun pada tahun 1973 melalui bantuan pemerintah serta semangat swadaya masyarakat.",
  "Sejak berdirinya, Desa Cipicung telah dipimpin oleh beberapa kepala desa yang secara bergantian melanjutkan pembangunan dan pelayanan kepada masyarakat. Kepemimpinan dimulai oleh H. Nurjen pada tahun 1969-1976, kemudian dilanjutkan oleh H. Sarbini pada tahun 1976-1986, Uyeh Sutisna pada tahun 1986-1993, Zaenal Arifin pada tahun 1993-2001, Cecep Saepuloh pada tahun 2001-2007, HM. Kamaludin pada tahun 2007-2019 selama dua periode, dan sejak tahun 2019 hingga sekarang dipimpin oleh E. Suherli.",
  "Berbekal semangat gotong royong, kebersamaan, dan partisipasi aktif masyarakat, Desa Cipicung terus berkembang menjadi desa yang berkomitmen mewujudkan tata kelola pemerintahan yang baik, meningkatkan kualitas pelayanan publik, serta mengoptimalkan potensi sumber daya alam dan sumber daya manusia demi terciptanya masyarakat yang maju, mandiri, dan sejahtera.",
];

const SejarahSingkatSection = () => {
  return (
    <section
      aria-labelledby="sejarah-singkat-title"
      className="w-full bg-[#f6faf7] px-5 pb-8 pt-2 sm:px-6 md:pb-14 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <article className="rounded-lg border border-emerald-100 bg-white p-4 shadow-[0_12px_28px_rgba(22,94,51,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-hijau/40 hover:shadow-[0_18px_38px_rgba(22,94,51,0.13)] md:p-8">
          <p className="text-xs font-bold uppercase text-hijau md:text-sm">
            Sejarah
          </p>
          <h2
            id="sejarah-singkat-title"
            className="mt-1.5 text-lg font-bold text-hijau-tua md:mt-2 md:text-2xl"
          >
            Sejarah Singkat
          </h2>

          <div className="mt-4 space-y-3 text-left md:mt-6 md:space-y-4 md:text-justify">
            {sejarahDesa.map((paragraph) => (
              <p
                key={paragraph}
                className="text-xs leading-6 text-gray-700 md:text-base md:leading-8"
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
