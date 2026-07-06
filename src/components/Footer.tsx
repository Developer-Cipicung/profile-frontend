import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { assets } from "@/src/assets/assets";

const navigationLinks = [
  { label: "Beranda", href: "/" },
  { label: "Profil Desa", href: "/profil-desa" },
  { label: "Berita", href: "/berita" },
  { label: "Program", href: "/program" },
];

const serviceLinks = [
  { label: "Produk UMKM", href: "/produk-lokal" },
  { label: "Lokasi Penting", href: "/lokasi" },
];

const socialLinks: Array<{
  label: string;
  href: string;
  symbol: string;
}> = [
  { label: "Facebook Desa Cipicung", href: "https://facebook.com", symbol: "f" },
  {
    label: "Instagram Desa Cipicung",
    href: "https://instagram.com",
    symbol: "◎",
  },
  { label: "YouTube Desa Cipicung", href: "https://youtube.com", symbol: "▶" },
];

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="text-sm text-white/60 transition-colors hover:text-kuning"
    >
      {label}
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-hijau-tua text-white">
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.35fr] lg:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={assets.profile}
                alt="Logo Desa Cipicung"
                className="h-11 w-11 shrink-0 rounded-full bg-white p-1 object-contain"
              />
              <div>
                <p className="text-lg font-bold leading-tight text-white">
                  Desa Cipicung
                </p>
                <p className="mt-0.5 text-xs text-white/60">Kabupaten Bogor</p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Masyarakat Cipicung yang informatif, maju, sehat, dan berdaya
              menuju desa mandiri.
            </p>

            <div className="mt-6 flex gap-3" aria-label="Media sosial Desa Cipicung">
              {socialLinks.map(({ label, href, symbol }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-white/80 transition-all hover:bg-kuning hover:text-hijau-tua"
                >
                  <span
                    aria-hidden="true"
                    className="text-sm font-bold leading-none"
                  >
                    {symbol}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <nav aria-labelledby="footer-navigation-title">
            <h2
              id="footer-navigation-title"
              className="text-sm font-bold text-white"
            >
              Navigasi
            </h2>
            <ul className="mt-5 space-y-3">
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
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <FooterLink {...item} />
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold text-white">Kontak</h2>
            <address className="mt-5 space-y-4 not-italic">
              <div className="flex items-start gap-3 text-sm leading-relaxed text-white/65">
                <MapPin
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-white/80"
                />
                <span>
                  Jl. Genteng No.01, Cipicung, Cijeruk, Kabupaten Bogor, Jawa
                  Barat 16740
                </span>
              </div>

              <a
                href="tel:+622321234567"
                className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-kuning"
              >
                <Phone
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="shrink-0 text-current"
                />
                (0232) 123-4567
              </a>

              <a
                href="mailto:desa.cipicung@gmail.com"
                className="flex min-w-0 items-center gap-3 text-sm text-white/65 transition-colors hover:text-kuning"
              >
                <Mail
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="shrink-0 text-current"
                />
                <span className="break-all">desa.cipicung@gmail.com</span>
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/40 md:text-left">
            © 2024 Pemerintah Desa Cipicung. Seluruh hak dilindungi
            undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
