import type { StaticImageData } from "next/image";
import { perangkatDesa as perangkatDesaAssets } from "@/src/assets/assets";

export type PerangkatDesaItem = {
  nama: string;
  jabatan: string;
  image: StaticImageData | null;
  utama?: boolean;
};

export const daftarPerangkatDesa: PerangkatDesaItem[] = [
  {
    nama: "E. Suherli",
    jabatan: "Kepala Desa",
    image: perangkatDesaAssets.kepala_desa,
    utama: true,
  },
  {
    nama: "Robi Abdul Hakim",
    jabatan: "Sekretaris Desa",
    image: perangkatDesaAssets.sekretaris_desa,
  },
  {
    nama: "H. Ade Mubahist Budaer",
    jabatan: "Badan Permusyawaratan Desa",
    image: perangkatDesaAssets.badan_permusyawaratan_desa,
  },
  {
    nama: "Wulan Sari",
    jabatan: "Kaur Keuangan",
    image: perangkatDesaAssets.kaur_keuangan,
  },
  {
    nama: "Irin Sundari",
    jabatan: "Kasi Pemerintahan",
    image: perangkatDesaAssets.kasi_pemerintahan,
  },
  {
    nama: "Winda Agustiani",
    jabatan: "Kasi Kesejahteraan Rakyat",
    image: perangkatDesaAssets.kasi_kesejahteraan,
  },
  {
    nama: "Siti Sa'diyah",
    jabatan: "Kaur Perencanaan",
    image: perangkatDesaAssets.kaur_perencanaan,
  },
  {
    nama: "Sandi Sopian",
    jabatan: "Kasi Pelayanan",
    image: perangkatDesaAssets.kasi_pelayanan,
  },
  {
    nama: "Devianti Nurohmah",
    jabatan: "Kaur Umum",
    image: perangkatDesaAssets.kaur_umum,
  },
  {
    nama: "Dini Novianti",
    jabatan: "Staff",
    image: null,
  },
  {
    nama: "Amug Abdurahman",
    jabatan: "Staff",
    image: null,
  },
  {
    nama: "Edi Hidayat",
    jabatan: "Kepala Dusun III",
    image: perangkatDesaAssets.kepala_dusun3,
  },
];
