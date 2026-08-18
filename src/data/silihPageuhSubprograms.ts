export type SilihPageuhSubprogram = {
  slug: string;
  name: string;
  focus: string;
  href: string;
  shortDescription: string;
};

export const silihPageuhSubprograms = [
  {
    slug: "akar-desa",
    name: "AKAR DESA",
    focus: "Keluarga Ramah Lingkungan",
    href: "/program/silih-pageuh/akar-desa",
    shortDescription:
      "Subprogram Keluarga Ramah Lingkungan yang berfokus pada edukasi pemilahan sampah dan penguatan pengelolaan sampah melalui POS PANDAI, bottle press, dan lubang biopori.",
  },
  {
    slug: "rindang-pangan",
    name: "RINDANG PANGAN",
    focus: "Keluarga Cerdas Pangan",
    href: "/program/silih-pageuh/rindang-pangan",
    shortDescription:
      "Subprogram Keluarga Cerdas Pangan yang mendorong pemanfaatan pangan lokal melalui PMT ikan nila, produk CiBi! dan CiHerb, serta budidaya ayam petelur.",
  },
  {
    slug: "tunas-sehat",
    name: "TUNAS SEHAT",
    focus: "Keluarga Ramah Lansia dan sistem pendataan kesehatan",
    href: "/program/silih-pageuh/tunas-sehat",
    shortDescription:
      "Subprogram Keluarga Ramah Lansia dan pendataan kesehatan yang memperkuat layanan posyandu melalui website pendataan, pelatihan kader, Posbindu Lansia, caregiver lansia, dan P2L.",
  },
  {
    slug: "batang-kayu",
    name: "BATANG KAYU",
    focus: "Keluarga Peduli Sehat dan kelembagaan Komunitas Silih Asuh",
    href: "/program/silih-pageuh/batang-kayu",
    shortDescription:
      "Subprogram Keluarga Peduli Sehat yang berfokus pada penguatan kader, penyuluhan ibu dan anak, serta pembentukan kelembagaan Komunitas Silih Asuh untuk keberlanjutan program.",
  },
] as const satisfies SilihPageuhSubprogram[];

export type SilihPageuhSubprogramSlug =
  (typeof silihPageuhSubprograms)[number]["slug"];

export function getSilihPageuhSubprogram(slug: string) {
  return silihPageuhSubprograms.find((subprogram) => subprogram.slug === slug);
}
