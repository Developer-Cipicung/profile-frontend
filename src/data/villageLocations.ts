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
    position: [-6.6786, 106.7989],
  },
  {
    id: "posyandu-cempaka-1",
    name: "Posyandu Cempaka 1",
    category: "Posyandu",
    rw: "RW 01",
    address: "RW 01, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 01.",
    position: null,
  },
  {
    id: "posyandu-anggrek-1",
    name: "Posyandu Anggrek 1",
    category: "Posyandu",
    rw: "RW 02",
    address: "RW 02, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 02.",
    position: null,
  },
  {
    id: "posyandu-anggrek-2",
    name: "Posyandu Anggrek 2",
    category: "Posyandu",
    rw: "RW 02",
    address: "RW 02, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 02.",
    position: null,
  },
  {
    id: "posyandu-melati-1",
    name: "Posyandu Melati 1",
    category: "Posyandu",
    rw: "RW 03",
    address: "RW 03, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 03.",
    position: [-6.6791667, 106.7939444],
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
    position: null,
  },
  {
    id: "posyandu-flamboyan-2",
    name: "Posyandu Flamboyan 2",
    category: "Posyandu",
    rw: "RW 04",
    address: "RW 04, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 04.",
    position: [-6.6791667, 106.7939444],
  },
  {
    id: "posyandu-mawar-1",
    name: "Posyandu Mawar 1",
    category: "Posyandu",
    rw: "RW 05",
    address: "RW 05, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 05.",
    position: [-6.6868191, 106.7995754],
  },
  {
    id: "posyandu-mawar-2",
    name: "Posyandu Mawar 2",
    category: "Posyandu",
    rw: "RW 05",
    address: "RW 05, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 05.",
    position: [-6.684, 106.7993056],
  },
  {
    id: "posyandu-bougenvil",
    name: "Posyandu Bougenvil",
    category: "Posyandu",
    rw: "RW 06",
    address: "RW 06, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 06.",
    position: null,
  },
  {
    id: "posyandu-cempaka-2",
    name: "Posyandu Cempaka 2",
    category: "Posyandu",
    rw: "RW 06",
    address: "RW 06, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 06.",
    position: null,
  },
  {
    id: "posyandu-aster",
    name: "Posyandu Aster",
    category: "Posyandu",
    rw: "RW 07",
    address: "RW 07, Desa Cipicung",
    description: "Layanan posyandu wilayah RW 07.",
    position: null,
  },
];

export const mappedVillageLocations = villageLocations.filter(
  (location): location is VillageLocation & { position: [number, number] } =>
    location.position !== null,
);
