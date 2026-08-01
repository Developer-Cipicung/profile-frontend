import Image from "next/image";
import { daftarPerangkatDesa } from "@/src/data/perangkatDesa";

const kepalaDesa = daftarPerangkatDesa.find((perangkat) => perangkat.utama);
const sambutanKepalaDesa = [
  "Assalamu'alaikum Warahmatullahi Wabarakatuh.",
  "Puji syukur ke hadirat Allah SWT atas segala rahmat dan karunia-Nya sehingga Website Resmi Desa Cipicung dapat hadir sebagai salah satu media informasi, komunikasi, dan pelayanan kepada masyarakat.",
  "Atas nama Pemerintah Desa Cipicung, saya mengucapkan selamat datang kepada seluruh masyarakat Desa Cipicung, para perantau, investor, mitra kerja, maupun para pengunjung yang telah mengakses website ini.",
  "Website Desa Cipicung merupakan wujud komitmen Pemerintah Desa dalam mewujudkan tata kelola pemerintahan yang transparan, akuntabel, dan berbasis teknologi informasi. Melalui website ini, kami berupaya menyajikan berbagai informasi mengenai profil desa, potensi desa, program pembangunan, pelayanan administrasi, kegiatan masyarakat, serta informasi lainnya yang bermanfaat bagi seluruh warga.",
  "Kami berharap keberadaan website ini dapat menjadi sarana yang efektif untuk mempererat komunikasi antara pemerintah desa dengan masyarakat. Selain itu, kami juga mengajak seluruh elemen masyarakat untuk turut berpartisipasi dalam memberikan saran, masukan, dan ide-ide yang membangun demi kemajuan Desa Cipicung.",
  "Pembangunan desa tidak akan berhasil tanpa adanya kebersamaan, semangat gotong royong, serta dukungan dari seluruh lapisan masyarakat. Oleh karena itu, mari kita bersama-sama menjaga persatuan, meningkatkan kepedulian sosial, serta terus berkarya demi mewujudkan Desa Cipicung yang maju, mandiri, sejahtera, dan berdaya saing.",
  "Akhir kata, kami mengucapkan terima kasih kepada semua pihak yang telah memberikan dukungan dalam pengembangan website ini. Semoga website Desa Cipicung dapat memberikan manfaat yang sebesar-besarnya bagi masyarakat dan menjadi media informasi yang terpercaya, cepat, dan mudah diakses oleh siapa pun.",
  "Wassalamu'alaikum Warahmatullahi Wabarakatuh.",
];

const Kades = () => {
  if (!kepalaDesa?.image) return null;

  return (
    <div className="my-8 flex w-full flex-col items-center gap-8 px-4 sm:flex-row sm:items-center md:my-16 md:px-32">
      {/* Photo — square card, larger on desktop */}
      <div className="relative h-56 w-56 shrink-0 overflow-hidden rounded-2xl shadow-md md:h-72 md:w-72">
        <Image
          src={kepalaDesa.image}
          alt={`Foto ${kepalaDesa.nama}, ${kepalaDesa.jabatan}`}
          fill
          sizes="(min-width: 768px) 288px, 224px"
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Text block */}
      <div className="max-w-7xl">
        <h1 className="text-2xl font-bold text-hijau-tua sm:text-3xl">
          Sambutan Kepala Desa
        </h1>
        <span className="mt-1 block text-lg font-bold md:text-xl">
          {kepalaDesa.nama}
        </span>
        <p className="mt-0.5 text-xs font-semibold text-[#5A7A68]">
          Kepala Desa Cipicung
        </p>
        <div className="mt-4 space-y-3 text-xs leading-relaxed text-gray-700 sm:text-base">
          {sambutanKepalaDesa.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kades;
