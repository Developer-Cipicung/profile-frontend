import type { StaticImageData } from "next/image";
import { assets } from "@/src/assets/assets";

export type BeritaItem = {
  id: string;
  title: string;
  date: string;
  isoDate: string;
  category: string;
  description: string;
  content: string[];
  image: StaticImageData;
};

export const beritaList: BeritaItem[] = [
  {
    id: "pelantikan-kader-posyandu",
    title: "Pelantikan 24 Kader Posyandu Baru Desa Cipicung",
    date: "28 Juni 2024",
    isoDate: "2024-06-28",
    category: "Kegiatan",
    description:
      "Sebanyak 24 kader posyandu baru resmi dilantik oleh Kepala Desa dalam rangka penguatan layanan kesehatan.",
    image: assets.desa,
    content: [
      "Sebanyak 24 kader posyandu baru resmi dilantik oleh Pemerintah Desa Cipicung sebagai bagian dari penguatan layanan kesehatan masyarakat.",
      "Kader posyandu memiliki peran penting dalam mendukung pelayanan kesehatan ibu, anak, dan lansia di tingkat desa.",
      "Dengan adanya kader baru, diharapkan pelayanan posyandu di Desa Cipicung dapat berjalan lebih optimal dan menjangkau lebih banyak warga.",
    ],
  },
  {
    id: "bantuan-sembako-150-keluarga",
    title: "Bantuan Sembako untuk 150 Keluarga Kurang Mampu Disalurkan",
    date: "20 Juni 2024",
    isoDate: "2024-06-20",
    category: "Kegiatan",
    description:
      "Pemerintah Desa Cipicung menyalurkan bantuan paket sembako kepada 150 keluarga kurang mampu.",
    image: assets.desa,
    content: [
      "Pemerintah Desa Cipicung menyalurkan bantuan paket sembako kepada 150 keluarga kurang mampu pada Kamis, 20 Juni 2024. Bantuan ini merupakan bagian dari Program Silih Pageuh.",
      "Setiap paket berisi beras 10 kg, minyak goreng 2 liter, gula pasir 1 kg, tepung 1 kg, dan mi instan 5 bungkus. Total nilai bantuan mencapai Rp112.500.000 yang bersumber dari Dana Desa tahun anggaran 2024.",
      "Penyaluran dilakukan secara langsung kepada penerima manfaat yang telah terdata dalam sistem DTKS Desa Cipicung. Pemerintah desa berharap bantuan ini dapat meringankan kebutuhan pokok masyarakat dan memperkuat kepedulian sosial di lingkungan desa.",
    ],
  },
  {
    id: "musrenbangdes-2025",
    title: "Musrenbangdes 2025: Lebih dari 200 Warga Hadir dan Berpartisipasi",
    date: "15 Juni 2024",
    isoDate: "2024-06-15",
    category: "Kegiatan",
    description:
      "Musyawarah Rencana Pembangunan Desa tahun 2025 diikuti secara antusias oleh lebih dari 200 warga.",
    image: assets.desa,
    content: [
      "Musyawarah Rencana Pembangunan Desa tahun 2025 dilaksanakan dengan partisipasi aktif masyarakat Desa Cipicung.",
      "Lebih dari 200 warga hadir untuk menyampaikan aspirasi dan masukan terkait prioritas pembangunan desa.",
      "Kegiatan ini menjadi wadah penting bagi pemerintah desa dan masyarakat dalam menentukan arah pembangunan yang lebih tepat sasaran.",
    ],
  },
  {
    id: "pelatihan-anyaman-bambu-pkk",
    title: "Pelatihan Anyaman Bambu bagi Ibu-Ibu PKK Desa Cipicung",
    date: "10 Juni 2024",
    isoDate: "2024-06-10",
    category: "Pemberdayaan",
    description:
      "Dinas Koperasi dan UMKM Kabupaten bekerja sama dengan Desa Cipicung menyelenggarakan pelatihan keterampilan bagi ibu-ibu PKK.",
    image: assets.desa,
    content: [
      "Pelatihan anyaman bambu diselenggarakan untuk meningkatkan keterampilan dan membuka peluang usaha baru bagi ibu-ibu PKK Desa Cipicung.",
      "Peserta mempelajari pemilihan bahan, teknik dasar menganyam, hingga pengembangan desain produk yang bernilai jual.",
      "Pemerintah desa berharap kegiatan ini dapat mendorong tumbuhnya produk kreatif lokal dan menambah pendapatan keluarga.",
    ],
  },
  {
    id: "jadwal-posyandu-lansia-juli-2024",
    title: "Pengumuman: Jadwal Posyandu Lansia Bulan Juli 2024",
    date: "5 Juni 2024",
    isoDate: "2024-06-05",
    category: "Pengumuman",
    description:
      "Jadwal pemeriksaan kesehatan lansia di 12 posyandu Desa Cipicung untuk bulan Juli 2024 telah diumumkan.",
    image: assets.desa,
    content: [
      "Pemerintah Desa Cipicung bersama kader kesehatan telah menyusun jadwal layanan Posyandu Lansia untuk bulan Juli 2024.",
      "Layanan meliputi pemeriksaan tekanan darah, berat badan, konsultasi kesehatan, dan pemantauan kondisi warga lanjut usia.",
      "Warga diminta mengikuti jadwal di posyandu terdekat dan membawa dokumen kesehatan yang diperlukan.",
    ],
  },
  {
    id: "gotong-royong-pembersihan-saluran-air",
    title: "Agenda Gotong Royong Pembersihan Saluran Air Desa",
    date: "1 Juni 2024",
    isoDate: "2024-06-01",
    category: "Agenda",
    description:
      "Kegiatan gotong royong pembersihan saluran irigasi dan drainase desa dijadwalkan pada akhir pekan ini.",
    image: assets.desa,
    content: [
      "Warga Desa Cipicung akan melaksanakan gotong royong untuk membersihkan saluran irigasi dan drainase di sejumlah titik desa.",
      "Kegiatan ini bertujuan menjaga kelancaran aliran air, mengurangi risiko genangan, dan menciptakan lingkungan yang lebih bersih.",
      "Pemerintah desa mengajak seluruh warga untuk berpartisipasi dan membawa peralatan kerja bakti masing-masing.",
    ],
  },
];
