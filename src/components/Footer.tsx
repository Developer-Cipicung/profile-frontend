import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { assets } from "@/src/assets/assets";

const navigationLinks = [
  { label: "Beranda", href: "/" },
  { label: "Profil Desa", href: "/profil-desa" },
  { label: "Berita", href: "/berita" },
  { label: "Program", href: "/program/silih-pageuh" },
];

const serviceLinks = [
  { label: "Produk UMKM", href: "/umkm" },
  { label: "Lokasi Penting", href: "/lokasi" },
];

const socialLinks = [
  {
    label: "Instagram Desa Cipicung",
    href: "https://www.instagram.com/desa.cipicung",
    icon: "instagram",
  },
  {
    label: "YouTube Cipicung Bangkit",
    href: "https://www.youtube.com/@cipicungbangkit01",
    icon: "youtube",
  },
  {
    label: "TikTok Desa Cipicung",
    href: "https://www.tiktok.com/@desa.cipicung01",
    icon: "tiktok",
  },
] as const;

function SocialIcon({ icon }: { icon: (typeof socialLinks)[number]["icon"] }) {
  if (icon === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4"
        fill="none"
      >
        <rect
          x="5"
          y="5"
          width="14"
          height="14"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2" />
        <circle cx="16.5" cy="7.5" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "tiktok") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
      >
        <path
          d="M14 4v9.1a4.1 4.1 0 1 1-3.8-4.1"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M14 4c.6 2.8 2.1 4.5 5 5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
    >
      <rect
        x="3"
        y="6.5"
        width="18"
        height="11"
        rx="3"
        fill="currentColor"
      />
      <path d="m10.5 9.5 4.5 2.5-4.5 2.5v-5Z" fill="var(--hijau-tua)" />
    </svg>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm leading-relaxed text-white/65 transition-colors hover:text-kuning"
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-hijau-tua text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-6 md:py-12">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.35fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={assets.logo_desa}
                alt="Logo Desa Cipicung"
                className="h-10 w-10 shrink-0 rounded-full bg-white p-1 object-contain md:h-11 md:w-11"
              />
              <div>
                <p className="text-lg font-bold leading-tight text-white">
                  Desa Cipicung
                </p>
                <p className="mt-0.5 text-xs text-white/60">
                  Kabupaten Bogor
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Website resmi Pemerintah Desa Cipicung sebagai media informasi,
              komunikasi, dan pelayanan bagi masyarakat.
            </p>

            <div
              className="mt-4 flex gap-3"
              aria-label="Media sosial Desa Cipicung"
            >
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-white/80 transition-all hover:bg-kuning hover:text-hijau-tua"
                >
                  <SocialIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:contents">
            <nav aria-labelledby="footer-navigation-title">
              <h2
                id="footer-navigation-title"
                className="text-sm font-bold text-white"
              >
                Navigasi
              </h2>
              <ul className="mt-3 space-y-2 md:mt-5 md:space-y-3">
                {navigationLinks.map((item) => (
                  <li key={item.href}>
                    <FooterLink {...item} />
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="footer-services-title">
              <h2
                id="footer-services-title"
                className="text-sm font-bold text-white"
              >
                Layanan
              </h2>
              <ul className="mt-3 space-y-2 md:mt-5 md:space-y-3">
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <FooterLink {...item} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white">Kontak</h2>
            <address className="mt-3 space-y-3 not-italic md:mt-5 md:space-y-4">
              <div className="flex items-start gap-3 text-sm leading-relaxed text-white/65">
                <MapPin
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-hijau-muda"
                />
                <span>
                  Jl. Genteng No.01, Cipicung, Cijeruk, Kabupaten Bogor, Jawa
                  Barat 16740
                </span>
              </div>

              <div className="flex items-center gap-3 text-sm text-white/65">
                <Phone
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="shrink-0 text-hijau-muda"
                />
                -
              </div>

              <a
                href="mailto:cipicungjuara01@gmail.com"
                className="flex min-w-0 items-center gap-3 text-sm text-white/65 transition-colors hover:text-kuning"
              >
                <Mail
                  size={16}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="shrink-0 text-hijau-muda"
                />
                <span className="break-all">cipicungjuara01@gmail.com</span>
              </a>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 md:mt-10 md:pt-6">
          <p className="text-xs leading-relaxed text-white/40">
            &copy; 2026 Pemerintah Desa Cipicung. Seluruh hak dilindungi
            undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
}
