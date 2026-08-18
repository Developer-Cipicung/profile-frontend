import Image from "next/image";
import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { assets } from "@/src/assets/assets";
import type { PopulationSummary } from "@/src/services/populationService";
import { formatNumber } from "@/src/utils/format";

type ProfileDataSectionProps = {
  populationSummary?: PopulationSummary | null;
};

const contactData: Array<{
  label: string;
  value: string;
  icon: LucideIcon;
  href?: string;
}> = [
  {
    label: "Telepon",
    value: "-",
    icon: Phone,
  },
  {
    label: "Email",
    value: "cipicungjuara01@gmail.com",
    icon: Mail,
    href: "mailto:cipicungjuara01@gmail.com",
  },
  {
    label: "Alamat",
    value:
      "Jl. Genteng No.01, Cipicung, Cijeruk, Kabupaten Bogor, Jawa Barat 16740",
    icon: MapPin,
  },
];

const cardClassName =
  "rounded-lg border border-emerald-100 bg-white shadow-[0_12px_28px_rgba(22,94,51,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-hijau/40 hover:shadow-[0_18px_38px_rgba(22,94,51,0.13)]";

const ContactValue = ({ href, value }: { href?: string; value: string }) => {
  if (!href) {
    return <span>{value}</span>;
  }

  return (
    <a href={href} className="break-all transition-colors hover:text-hijau-tua">
      {value}
    </a>
  );
};

function formatImportedDate(value?: string) {
  if (!value) return null;

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Data terbaru dari sistem";

  return `Data penduduk diperbarui terakhir pada ${new Intl.DateTimeFormat(
    "id-ID",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  ).format(date)}.`;
}

const ProfileDataSection = ({
  populationSummary,
}: ProfileDataSectionProps) => {
  const identitasDesa = [
    { label: "Nama Desa", value: "Cipicung" },
    { label: "Kecamatan", value: "Cijeruk" },
    { label: "Kabupaten", value: "Bogor" },
    { label: "Provinsi", value: "Jawa Barat" },
    { label: "Kode Pos", value: "16740" },
    { label: "Kode Desa", value: "32.01.28.2005" },
    { label: "Luas Wilayah", value: "461,820 Ha" },
    { label: "Ketinggian", value: "± 600 mdpl" },
    {
      label: "Wilayah Kecamatan",
      value: "Salah satu dari sembilan desa di Kecamatan Cijeruk",
    },
    {
      label: "Jumlah Penduduk",
      value: populationSummary
        ? formatNumber(populationSummary.currentPopulation)
        : "Data menyesuaikan",
    },
    {
      label: "Jumlah KK",
      value: populationSummary
        ? formatNumber(populationSummary.sumKk)
        : "Data menyesuaikan",
    },
    {
      label: "Jumlah Dusun",
      value: populationSummary
        ? formatNumber(populationSummary.sumDusun)
        : "Data menyesuaikan",
    },
    {
      label: "Jumlah RT",
      value: populationSummary
        ? formatNumber(populationSummary.sumRt)
        : "Data menyesuaikan",
    },
    {
      label: "Jumlah RW",
      value: populationSummary
        ? formatNumber(populationSummary.sumRw)
        : "Data menyesuaikan",
    },
  ];
  const importedDateText = formatImportedDate(populationSummary?.lastImported);

  return (
    <section
      aria-label="Data profil Desa Cipicung"
      className="w-full bg-[#f6faf7] px-5 py-8 sm:px-6 md:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-[2fr_0.85fr]">
          <article className={`${cardClassName} p-4 md:p-8`}>
            <p className="text-xs font-bold uppercase text-hijau md:text-sm">
              Identitas
            </p>
            <h2 className="mt-1.5 text-lg font-bold text-hijau-tua md:mt-2 md:text-2xl">
              Identitas Desa
            </h2>

            <dl className="mt-4 grid grid-cols-2 gap-2 md:mt-6 md:gap-x-8 md:gap-y-0">
              {identitasDesa.map((item) => (
                <div
                  key={item.label}
                  className="min-w-0 rounded-lg border border-emerald-50 bg-[#fbfdfb] p-3 md:flex md:items-start md:justify-between md:gap-4 md:border-x-0 md:border-t-0 md:bg-transparent md:px-0 md:py-4"
                >
                  <dt className="text-[11px] leading-4 text-[#5A7A68] md:shrink-0 md:text-sm md:leading-normal">
                    {item.label}
                  </dt>
                  <dd className="mt-1 min-w-0 break-words text-xs font-bold leading-5 text-slate-800 md:mt-0 md:text-right md:text-sm md:leading-normal">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-3 text-[11px] font-medium leading-5 text-gray-500 md:mt-4 md:text-xs">
              {importedDateText ?? "Data penduduk belum tersedia."}
            </p>
          </article>

          <div className="grid grid-cols-2 gap-3 md:gap-8 lg:grid-cols-1">
            <article
              className={`${cardClassName} flex flex-col items-center justify-center p-4 text-center md:p-8`}
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-[#f6faf7] p-2 md:size-28">
                <Image
                  src={assets.logo_desa}
                  alt="Logo Desa Cipicung"
                  className="h-full w-full object-contain"
                />
              </div>
              <h2 className="mt-3 text-sm font-bold text-hijau-tua md:mt-5 md:text-xl">
                Desa Cipicung
              </h2>
              <p className="mt-1 text-xs leading-5 text-gray-500 md:text-sm">
                Kab. Bogor, Jawa Barat
              </p>
            </article>

            <article className={`${cardClassName} p-4 md:p-6`}>
              <h2 className="text-sm font-bold text-hijau-tua md:text-xl">
                Kontak Desa
              </h2>
              <address className="mt-3 space-y-3 not-italic md:mt-6 md:space-y-5">
                {contactData.map(({ label, value, href, icon: Icon }) => (
                  <div key={label} className="flex min-w-0 items-start gap-2 md:gap-3">
                    <div className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-lg bg-[#eef8f1] text-hijau-tua md:size-9">
                      <Icon size={14} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-hijau-tua md:text-xs">
                        {label}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-5 text-gray-600 md:mt-1 md:text-sm md:leading-relaxed">
                        <ContactValue href={href} value={value} />
                      </p>
                    </div>
                  </div>
                ))}
              </address>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDataSection;
