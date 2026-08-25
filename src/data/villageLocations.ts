export type VillageLocationCategory =
  | "Kantor Desa"
  | "Posyandu"
  | "Fasilitas Umum"
  | "Pendidikan"
  | "Kesehatan";

export type VillageLocation = {
  id: string;
  name: string;
  category: VillageLocationCategory;
  rw?: string;
  address: string;
  description?: string;
  position: [number, number] | null;
};

export const villageLocations: VillageLocation[] = [
  {
    id: "kantor-desa-cipicung",
    name: "Kantor Desa Cipicung",
    category: "Kantor Desa",
    address:
      "Jl. Genteng No.01, Cipicung, Cijeruk, Kabupaten Bogor, Jawa Barat 16740",
    description: "Kantor pemerintahan Desa Cipicung.",
    position: [-6.67849, 106.799572],
  },
  {
    id: "posyandu-cempaka-1",
    name: "Posyandu Cempaka 1",
    category: "Posyandu",
    rw: "RW 01",
    address: "RW 01, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 01.",
    position: [-6.668888, 106.815106],
  },
  {
    id: "posyandu-anggrek-1",
    name: "Posyandu Anggrek 1",
    category: "Posyandu",
    rw: "RW 02",
    address: "RW 02, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 02.",
    position: [-6.669637, 106.807272],
  },
  {
    id: "posyandu-anggrek-2",
    name: "Posyandu Anggrek 2",
    category: "Posyandu",
    rw: "RW 02",
    address: "RW 02, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 02.",
    position: [-6.672791, 106.804678],
  },
  {
    id: "posyandu-melati-1",
    name: "Posyandu Melati 1",
    category: "Posyandu",
    rw: "RW 03",
    address: "RW 03, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 03.",
    position: [-6.679167, 106.793944],
  },
  {
    id: "posyandu-melati-2",
    name: "Posyandu Melati 2",
    category: "Posyandu",
    rw: "RW 03",
    address: "RW 03, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 03.",
    position: [-6.66601, 106.81213],
  },
  {
    id: "posyandu-flamboyan-1",
    name: "Posyandu Flamboyan 1",
    category: "Posyandu",
    rw: "RW 04",
    address: "RW 04, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 04.",
    position: [-6.678544, 106.799417],
  },
  {
    id: "posyandu-flamboyan-2",
    name: "Posyandu Flamboyan 2",
    category: "Posyandu",
    rw: "RW 04",
    address: "RW 04, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 04.",
    position: [-6.679167, 106.793944],
  },
  {
    id: "posyandu-mawar-1",
    name: "Posyandu Mawar 1",
    category: "Posyandu",
    rw: "RW 05",
    address: "RW 05, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 05.",
    position: [-6.686819, 106.799575],
  },
  {
    id: "posyandu-mawar-2",
    name: "Posyandu Mawar 2",
    category: "Posyandu",
    rw: "RW 05",
    address: "RW 05, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 05.",
    position: [-6.684, 106.799306],
  },
  {
    id: "posyandu-bougenvil",
    name: "Posyandu Bougenvil",
    category: "Posyandu",
    rw: "RW 06",
    address: "RW 06, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 06.",
    position: [-6.6785705, 106.8070737],
  },
  {
    id: "posyandu-cempaka-2",
    name: "Posyandu Cempaka 2",
    category: "Posyandu",
    rw: "RW 06",
    address: "RW 06, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 06.",
    position: [-6.673159, 106.81187],
  },
  {
    id: "posyandu-aster",
    name: "Posyandu Aster",
    category: "Posyandu",
    rw: "RW 07",
    address: "RW 07, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 07.",
    position: [-6.683651, 106.802491],
  },
  {
    id: "kandang-budidaya-ayam-petelur",
    name: "Kandang Budidaya Ayam Petelur",
    category: "Fasilitas Umum",
    address: "Desa Cipicung",
    description: "Lokasi kandang budidaya ayam petelur.",
    position: [-6.675669, 106.814155],
  },
  {
    id: "kolam-budidaya-ikan-nila",
    name: "Kolam Budidaya Ikan Nila",
    category: "Fasilitas Umum",
    address: "Desa Cipicung",
    description: "Lokasi kolam budidaya ikan nila.",
    position: [-6.684974, 106.801376],
  },
  {
    id: "lahan-budidaya-ubi-jahe-kunyit",
    name: "Lahan Budidaya Ubi, Jahe dan Kunyit",
    category: "Fasilitas Umum",
    address: "Desa Cipicung",
    description: "Lokasi lahan budidaya ubi, jahe dan kunyit.",
    position: [-6.6766368, 106.813448],
  },
  {
    id: "biopori-kebun-pak-sigit",
    name: "Biopori Kebun Pak Sigit (Biopori 1)",
    category: "Fasilitas Umum",
    address: "Desa Cipicung",
    description: "Lokasi biopori kebun Pak Sigit.",
    position: [-6.662233, 106.812938],
  },
  {
    id: "biopori-kebun-pak-h-ijudin",
    name: "Biopori Kebun Pak H. Ijudin (Biopori 2)",
    category: "Fasilitas Umum",
    address: "Desa Cipicung",
    description: "Lokasi biopori kebun Pak H. Ijudin.",
    position: [-6.682283, 106.804361],
  },
  {
    id: "biopori-kebun-kel-h-taufik",
    name: "Biopori Kebun Kel. H. Taufik (Biopori 3)",
    category: "Fasilitas Umum",
    address: "Desa Cipicung",
    description: "Lokasi biopori kebun Kel. H. Taufik.",
    position: [-6.682646, 106.806129],
  },
  {
    id: "rumah-produksi-teras-cipicung",
    name: "Rumah Produksi Teras Cipicung",
    category: "Fasilitas Umum",
    address: "Desa Cipicung",
    description: "Lokasi rumah produksi Teras Cipicung.",
    position: [-6.683735, 106.802629],
  },
  {
    id: "bottle-press-sdn-01",
    name: "Bottle Press SDN 01",
    category: "Fasilitas Umum",
    address: "SDN 01, Desa Cipicung",
    description: "Lokasi bottle press SDN 01.",
    position: [-6.669711, 106.806623],
  },
  {
    id: "bottle-press-sdn-02",
    name: "Bottle Press SDN 02",
    category: "Fasilitas Umum",
    address: "SDN 02, Desa Cipicung",
    description: "Lokasi bottle press SDN 02.",
    position: [-6.682788, 106.789967],
  },
  {
    id: "bottle-press-sdn-03",
    name: "Bottle Press SDN 03",
    category: "Fasilitas Umum",
    address: "SDN 03, Desa Cipicung",
    description: "Lokasi bottle press SDN 03.",
    position: [-6.678687, 106.800188],
  },
  {
    id: "bottle-press-sdn-04",
    name: "Bottle Press SDN 04",
    category: "Fasilitas Umum",
    address: "SDN 04, Desa Cipicung",
    description: "Lokasi bottle press SDN 04.",
    position: [-6.668516, 106.815087],
  },
  {
    id: "bottle-press-sdn-05",
    name: "Bottle Press SDN 05",
    category: "Fasilitas Umum",
    address: "SDN 05, Desa Cipicung",
    description: "Lokasi bottle press SDN 05.",
    position: [-6.662315, 106.809522],
  },
  {
    id: "bottle-press-sdn-cipaok",
    name: "Bottle Press SDN Cipaok",
    category: "Fasilitas Umum",
    address: "SDN Cipaok, Desa Cipicung",
    description: "Lokasi bottle press SDN Cipaok.",
    position: [-6.688145, 106.799262],
  },
  {
    id: "bottle-press-mts-maarif-nu",
    name: "Bottle Press MTs Maarif NU",
    category: "Fasilitas Umum",
    address: "MTs Maarif NU, Desa Cipicung",
    description: "Lokasi bottle press MTs Maarif NU.",
    position: [-6.662306, 106.811998],
  },
  {
    id: "pos-pandai",
    name: "POS PANDAI",
    category: "Fasilitas Umum",
    address: "Desa Cipicung",
    description: "Lokasi POS PANDAI.",
    position: [-6.661992, 106.812012],
  },
  {
    id: "pengepul-sampah",
    name: "Pengepul Sampah",
    category: "Fasilitas Umum",
    address: "Desa Cipicung",
    description: "Lokasi pengepul sampah.",
    position: [-6.677717, 106.808202],
  },
];

export const mappedVillageLocations = villageLocations.filter(
  (location): location is VillageLocation & { position: [number, number] } =>
    location.position !== null,
);
