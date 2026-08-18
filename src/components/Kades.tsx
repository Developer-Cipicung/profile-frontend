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
    <section className="w-full bg-white px-5 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-8 rounded-lg border border-emerald-100 bg-[#f8fbf8] p-5 shadow-[0_18px_50px_rgba(22,94,51,0.08)] md:grid-cols-[300px_minmax(0,1fr)] md:p-8 lg:grid-cols-[360px_minmax(0,1fr)]">
        <div className="relative mx-auto w-full max-w-[280px] md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-white shadow-[0_18px_36px_rgba(15,23,42,0.14)]">
            <Image
              src={kepalaDesa.image}
              alt={`Foto ${kepalaDesa.nama}, ${kepalaDesa.jabatan}`}
              fill
              sizes="(min-width: 1024px) 360px, (min-width: 768px) 300px, 280px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        <div className="min-w-0">
          <p className="text-sm font-bold uppercase text-hijau">
            Pemerintah Desa Cipicung
          </p>
          <h2 className="mt-2 text-2xl font-bold text-hijau-tua sm:text-3xl md:text-4xl">
            Sambutan Kepala Desa
          </h2>
          <div className="mt-5 rounded-lg border border-emerald-100 bg-white p-4 md:p-5">
            <span className="block text-lg font-bold text-hijau-tua md:text-xl">
              {kepalaDesa.nama}
            </span>
            <p className="mt-1 text-xs font-semibold uppercase text-[#5A7A68]">
              Kepala Desa Cipicung
            </p>
          </div>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700 md:text-base md:leading-8">
            {sambutanKepalaDesa.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kades;
