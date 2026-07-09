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
    value: "(0251) 000-0000",
    icon: Phone,
    href: "tel:+622510000000",
  },
  {
    label: "Email",
    value: "desa.cipicung@gmail.com",
    icon: Mail,
    href: "mailto:desa.cipicung@gmail.com",
  },
  {
    label: "Alamat",
    value:
      "Jl. Genteng No.01, Cipicung, Cijeruk, Kabupaten Bogor, Jawa Barat 16740",
    icon: MapPin,
  },
];

const cardClassName =
  "rounded-2xl border border-gray-100 bg-white shadow-[0_8px_24px_rgba(22,94,51,0.08)] transition-shadow duration-300 hover:shadow-md md:rounded-3xl";

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
    { label: "Kode Desa", value: "3201282005" },
    { label: "Luas Wilayah", value: "415,16 Ha" },
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
      className="w-full py-4 md:py-6"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_0.85fr]">
          <article className={`${cardClassName} p-6 md:p-8`}>
            <h2 className="text-xl font-bold text-hijau-tua md:text-2xl">
              Identitas Desa
            </h2>

            <dl className="mt-6 grid grid-cols-1 gap-x-8 md:grid-cols-2">
              {identitasDesa.map((item) => (
                <div
                  key={item.label}
                  className="flex min-w-0 items-start justify-between gap-4 border-b border-gray-100 py-4"
                >
                  <dt className="shrink-0 text-sm text-gray-500">
                    {item.label}
                  </dt>
                  <dd className="min-w-0 break-words text-right text-sm font-semibold text-slate-800">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 text-xs font-medium text-gray-500">
              {importedDateText ?? "Data penduduk belum tersedia."}
            </p>
          </article>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <article
              className={`${cardClassName} flex flex-col items-center justify-center p-6 text-center md:p-8`}
            >
              <div className="flex size-28 items-center justify-center rounded-full">
                <Image
                  src={assets.profile}
                  alt="Logo Desa Cipicung"
                  className="h-full w-full object-contain"
                />
              </div>
              <h2 className="mt-5 text-xl font-bold text-hijau-tua">
                Desa Cipicung
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Kab. Bogor, Jawa Barat
              </p>
            </article>

            <article className={`${cardClassName} p-6`}>
              <h2 className="text-xl font-bold text-hijau-tua">Kontak Desa</h2>
              <address className="mt-6 space-y-5 not-italic">
                {contactData.map(({ label, value, href, icon: Icon }) => (
                  <div key={label} className="flex min-w-0 items-start gap-3">
                    <div className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-hijau-muda/20 text-hijau-tua">
                      <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-hijau-tua">
                        {label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">
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
