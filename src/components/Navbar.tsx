"use client";

import { assets } from "@/src/assets/assets";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Beranda", href: "/" },
  { label: "Profil Desa", href: "/profil-desa" },
  { label: "Lokasi", href: "/lokasi" },
  { label: "Berita", href: "/berita" },
  { label: "Program", href: "/program" },
  { label: "Produk Lokal", href: "/produk-lokal" },
];

function VillageLogo() {
  return (
    <svg
      aria-hidden="true"
      className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
      viewBox="0 0 48 48"
      fill="none"
    >
      <circle cx="24" cy="24" r="23" fill="white" fillOpacity="0.14" />
      <path
        d="M14 27.5 24 18l10 9.5V36H14v-8.5Z"
        fill="white"
        fillOpacity="0.95"
      />
      <path d="M20.5 36v-7h7v7" fill="#165E33" />
      <path
        d="M24 17c.7-4.8 3.5-7.3 8.2-7.5-.2 4.7-2.9 7.4-8.2 7.5Z"
        fill="#BDE7C8"
      />
      <path
        d="M23.8 17.2c-3.9-.5-6.2-2.6-6.8-6.4 3.9.1 6.4 2.2 6.8 6.4Z"
        fill="#D7F2DE"
      />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 bg-[#165E33] text-white shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex min-h-20 max-w-8xl items-center justify-between gap-3 px-2 sm:px-2 lg:px-8"
      >
        <a
          href="#beranda"
          aria-label="Beranda Desa Cipicung"
          className="flex min-w-0 items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          onClick={() => setIsOpen(false)}
        >
          {/* <VillageLogo /> */}
          <Image
            src={assets.profile}
            alt="logo-desa"
            className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
          />
          <span className="min-w-0 pl-1 leading-none">
            <span className="block text-xs font-medium tracking-[0.12em] text-white/75 sm:text-sm">
              Kabupaten Bogor
            </span>
            <span className="mt-0 block text-lg font-bold tracking-tight sm:text-xl">
              Desa Cipicung
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  active
                    ? "text-white underline decoration-2 underline-offset-8"
                    : "text-white/85 hover:text-white/70"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/25 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">{isOpen ? "Tutup menu" : "Buka menu"}</span>
          <span className="relative block h-5 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 top-0.5 h-0.5 w-6 rounded-full bg-white transition-transform duration-200 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 h-0.5 w-6 rounded-full bg-white transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0.5 left-0 h-0.5 w-6 rounded-full bg-white transition-transform duration-200 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-[#165E33] transition-[max-height,opacity] duration-200 lg:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-1 px-4 py-3 sm:px-6">
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-white ${
                  active
                    ? "text-white underline decoration-2 underline-offset-4"
                    : "text-white/90 hover:text-white/70"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
