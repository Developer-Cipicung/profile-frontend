const sejarahDesa = [
  {
    title: null,
    paragraphs: [
      'Desa Cipicung adalah salah satu desa yang terletak di Kecamatan Cijeruk, Kabupaten Bogor, Jawa Barat. Nama "Cipicung" kemungkinan berasal dari bahasa Sunda, di mana "Ci" berarti air atau sungai, dan "Picung" merujuk pada jenis pohon atau tanaman tertentu, yang dulunya mungkin banyak ditemukan di wilayah tersebut. Seperti banyak desa di kawasan kaki Gunung Salak, Cipicung memiliki sejarah panjang yang berakar pada kehidupan agraris dan budaya Sunda yang kuat.',
    ],
  },
  {
    title: "Asal Usul Desa Cipicung",
    paragraphs: [
      "Desa Cipicung mungkin dibentuk dari pemukiman tradisional yang berpusat di sekitar lahan pertanian subur, yang merupakan ciri khas daerah di kaki Gunung Salak. Desa ini diperkirakan tumbuh dari komunitas petani yang menggantungkan hidupnya pada sektor pertanian dan perkebunan, terutama pada tanaman padi, sayuran, dan tanaman keras lainnya. Masyarakat desa Cipicung sejak lama mengelola lahan pertanian secara mandiri dan tradisional, mengikuti siklus tanam yang disesuaikan dengan musim hujan dan kemarau.",
    ],
  },
  {
    title: "Kehidupan Sosial Budaya",
    paragraphs: [
      "Seperti kebanyakan desa di Kecamatan Cijeruk, Cipicung kental dengan budaya Sunda dan nilai-nilai Islam yang mendasari kehidupan sehari-hari masyarakatnya. Tradisi gotong royong dan silaturahmi tetap menjadi bagian penting dalam kehidupan sosial. Desa ini juga memiliki kearifan lokal yang mencerminkan harmoni antara manusia dan alam.",
      "Dalam konteks budaya, masyarakat Desa Cipicung sering kali mengadakan acara-acara keagamaan dan adat yang melibatkan seluruh komunitas, seperti peringatan hari besar Islam dan ritual pertanian tradisional yang berakar dari budaya Sunda. Kebersamaan dan solidaritas di antara warga desa menjadi fondasi yang kuat dalam menjaga keharmonisan sosial.",
    ],
  },
  {
    title: "Perkembangan Pembangunan",
    paragraphs: [
      "Seiring dengan perkembangan waktu, Desa Cipicung mengalami perubahan yang cukup signifikan dalam hal pembangunan infrastruktur dan ekonomi. Dengan adanya program pemerintah seperti Dana Desa, Cipicung mulai memodernisasi fasilitas umum dan membangun infrastruktur dasar seperti jalan, sarana pendidikan, serta kesehatan. Ini membawa dampak positif bagi perekonomian lokal, dengan sektor perdagangan dan usaha kecil mulai berkembang.",
      "Secara keseluruhan, sejarah Desa Cipicung mencerminkan perjalanan panjang sebuah komunitas tradisional Sunda yang terus beradaptasi dengan perubahan zaman, namun tetap menjaga kearifan lokal dan budaya agrarisnya.",
    ],
  },
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

          <div className="mt-6 space-y-6">
            {sejarahDesa.map((section) => (
              <section key={section.title ?? "pengantar"}>
                {section.title ? (
                  <h3 className="text-base font-bold text-hijau-tua md:text-lg">
                    {section.title}
                  </h3>
                ) : null}
                <div className={section.title ? "mt-3 space-y-4" : "space-y-4"}>
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-7 text-gray-600 md:text-base md:leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default SejarahSingkatSection;
