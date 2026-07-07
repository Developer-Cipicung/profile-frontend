"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { assets } from "@/src/assets/assets";
import Pagination from "@/src/components/Pagination";

type ProdukUMKM = {
  name: string;
  seller: string;
  dusun: string;
  price: number;
  image: StaticImageData;
  whatsapp: string;
};

const produkUMKM: ProdukUMKM[] = [
  {
    name: "Keripik Singkong Mpok Imas",
    seller: "Mpok Imas",
    dusun: "Dusun Cipicung",
    price: 15000,
    image: assets.desa,
    whatsapp: "6281234567890",
  },
  {
    name: "Anyaman Bambu Tas Belanja",
    seller: "Kelompok PKK Ciwangi",
    dusun: "Dusun Ciwangi",
    price: 85000,
    image: assets.desa,
    whatsapp: "6281234567890",
  },
  {
    name: "Tempe Organik Pak Ujang",
    seller: "Pak Ujang",
    dusun: "Dusun Sindangresmi",
    price: 5000,
    image: assets.desa,
    whatsapp: "6281234567890",
  },
  {
    name: "Madu Hutan Murni",
    seller: "Kelompok Tani Maju Bersama",
    dusun: "Dusun Neglasari",
    price: 120000,
    image: assets.desa,
    whatsapp: "6281234567890",
  },
  {
    name: "Batik Cap Motif Cipicung",
    seller: "Bu Siti Rahayu",
    dusun: "Dusun Cipicung",
    price: 195000,
    image: assets.desa,
    whatsapp: "6281234567890",
  },
  {
    name: "Jus Lidah Buaya Segar",
    seller: "Warung Sehat Bu Neneng",
    dusun: "Dusun Ciwangi",
    price: 8000,
    image: assets.desa,
    whatsapp: "6281234567890",
  },
];

const ITEMS_PER_PAGE = 6;

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};

const createWhatsappLink = (phone: string, productName: string) => {
  const message = `Halo, saya tertarik membeli ${productName} dari Desa Cipicung. Apakah produk ini masih tersedia?`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

const ProdukCard = ({ product }: { product: ProdukUMKM }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_22px_rgba(22,94,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-44 w-full shrink-0 overflow-hidden lg:h-48">
        <Image
          src={product.image}
          alt={`Foto produk ${product.name}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-lg font-bold leading-snug text-hijau-tua">
          {product.name}
        </h2>
        <p className="mt-2 text-sm font-medium text-gray-600">
          {product.seller}
        </p>
        <p className="mt-1 text-sm text-gray-500">{product.dusun}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
          <p className="text-xl font-bold text-hijau">
            {formatRupiah(product.price)}
          </p>
          <a
            href={createWhatsappLink(product.whatsapp, product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-hijau px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-hijau-tua"
            aria-label={`Beli ${product.name} melalui WhatsApp`}
          >
            <MessageCircle size={16} strokeWidth={1.8} aria-hidden="true" />
            Beli via WA
          </a>
        </div>
      </div>
    </article>
  );
};

const ProdukUMKMSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(produkUMKM.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = produkUMKM.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <section
      aria-labelledby="produk-umkm-title"
      className="w-full bg-[#f8faf8] px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <header className="text-center">
          <h1
            id="produk-umkm-title"
            className="font-reddy text-3xl text-hijau-tua md:text-5xl"
          >
            Katalog Produk UMKM
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
            Dukung produk lokal warga Desa Cipicung, pembelian langsung via
            WhatsApp
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {currentItems.map((product) => (
            <ProdukCard key={product.name} product={product} />
          ))}
        </div>

        <div className="mt-10">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default ProdukUMKMSection;
