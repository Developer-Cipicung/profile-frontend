"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { assets } from "@/src/assets/assets";

type NavItem = {
  label: string;
  href?: string;
  children?: Array<{ label: string; href: string }>;
};

const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil Desa",
    children: [
      { label: "Profil", href: "/profil-desa" },
      {
        label: "Struktur Organisasi Desa",
        href: "/profil-desa/struktur-organisasi",
      },
    ],
  },
  { label: "Lokasi", href: "/lokasi" },
  { label: "Berita", href: "/berita" },
  {
    label: "Program",
    children: [
      { label: "SILIH PAGEUH", href: "/program/silih-pageuh" },
    ],
  },
  { label: "Produk Lokal", href: "/umkm" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-hijau-tua text-white shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex min-h-20 max-w-[1640px] items-center justify-between gap-3 px-4 lg:px-8"
      >
        <Link
          href="/"
          aria-label="Beranda Desa Cipicung"
          className="flex min-w-0 items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          onClick={closeMobileMenu}
        >
          <Image
            src={assets.profile}
            alt="Logo Desa Cipicung"
            className="size-11 shrink-0 object-contain drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] sm:size-12"
          />
          <span className="min-w-0 leading-none">
            <span className="block text-xs font-medium tracking-[0.12em] text-white/75 sm:text-sm">
              Kabupaten Bogor
            </span>
            <span className="mt-1 block text-lg font-bold tracking-tight sm:text-xl">
              Desa Cipicung
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            if (item.children) {
              const active = item.children.some((child) => isActive(child.href));
              const isDropdownOpen = openDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="group relative"
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="menu"
                    onClick={() =>
                      setOpenDropdown((open) =>
                        open === item.label ? null : item.label,
                      )
                    }
                    className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      active
                        ? "text-white underline decoration-2 underline-offset-8"
                        : "text-white/85 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={15}
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    role="menu"
                    className={`absolute left-1/2 top-full z-50 mt-2 w-52 -translate-x-1/2 rounded-xl border border-gray-100 bg-white p-2 text-hijau-tua shadow-[0_12px_28px_rgba(0,0,0,0.16)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
                      isDropdownOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        onClick={() => setOpenDropdown(null)}
                        className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-hijau-muda/30 ${
                          isActive(child.href) ? "bg-hijau-muda/20" : ""
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            const href = item.href ?? "/";
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  active
                    ? "text-white underline decoration-2 underline-offset-8"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="grid size-11 shrink-0 place-items-center rounded-lg border border-white/25 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
          onClick={() => {
            setIsOpen((open) => !open);
            if (isOpen) setOpenDropdown(null);
          }}
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
        className={`overflow-hidden border-t border-white/10 bg-hijau-tua transition-[max-height,opacity] duration-300 lg:hidden ${
          isOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-1 px-4 py-3 sm:px-6">
          {navItems.map((item) => {
            if (item.children) {
              const isDropdownOpen = openDropdown === item.label;

              return (
                <div key={item.label}>
                  <button
                    type="button"
                    aria-expanded={isDropdownOpen}
                    onClick={() =>
                      setOpenDropdown((open) =>
                        open === item.label ? null : item.label,
                      )
                    }
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className={`transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-200 ${
                      isDropdownOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="ml-3 border-l border-white/20 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMobileMenu}
                            className={`block rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                              isActive(child.href)
                                ? "bg-white/10 text-white"
                                : "text-white/75 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            const href = item.href ?? "/";
            const active = isActive(href);

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                onClick={closeMobileMenu}
                className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
