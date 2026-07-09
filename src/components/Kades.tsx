import Image from "next/image";
import { daftarPerangkatDesa } from "@/src/data/perangkatDesa";

const kepalaDesa = daftarPerangkatDesa.find((perangkat) => perangkat.utama);

const Kades = () => {
  if (!kepalaDesa?.image) return null;

  return (
    <div className="my-8 flex h-auto w-full flex-col items-center justify-center gap-4 px-4 sm:flex-row md:my-16 md:px-32">
      <Image
        src={kepalaDesa.image}
        alt={`Foto ${kepalaDesa.nama}, ${kepalaDesa.jabatan}`}
        className="h-30 w-30 rounded-full object-cover object-top md:h-50 md:w-50"
      />
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-hijau-tua">
          Sambutan Kepala Desa
        </h1>
        <span className="font-bold text-l md:text-xl mb-2">
          {kepalaDesa.nama}
        </span>
        <p className="text-xs sm:text-base mt-2">
          Website ini kami hadirkan sebagai bagian dari upaya meningkatkan
          transparansi, partisipasi, dan pelayanan publik yang lebih baik di
          desa kita. Melalui media ini, kami berharap dapat memudahkan warga
          dalam mengakses informasi mengenai kegiatan pemerintahan desa, program
          pembangunan, serta layanan masyarakat lainnya. Selain itu, kami
          berharap website ini dapat menjadi wadah untuk menjalin silaturahmi,
          baik antara warga desa maupun dengan masyarakat di luar desa, guna
          mempererat tali persaudaraan dan membangun Desa Cipicung yang lebih
          maju.
        </p>
      </div>
    </div>
  );
};

export default Kades;
