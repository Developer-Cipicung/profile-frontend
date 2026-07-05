const MAP_QUERY = "8QCX+HQC, Cipicung, Cijeruk, Bogor Regency, West Java 16740";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=8QCX%2BHQC%2C%20Cipicung%2C%20Cijeruk%2C%20Bogor%20Regency%2C%20West%20Java%2016740&output=embed";

const MAP_DETAILS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAP_QUERY,
)}`;

const PetaDesaSection = () => {
  return (
    <section
      aria-labelledby="peta-desa-title"
      className="w-full px-4 py-6 md:px-32 md:py-10"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-8">
          <div className="max-w-2xl">
            {/* <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#36C56F] md:text-sm">
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-[#E8B921]"
              />
              Lokasi Desa
            </p> */}
            <h2
              id="peta-desa-title"
              className="text-2xl font-bold text-[#165E33] md:text-4xl"
            >
              Peta Desa
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#5A7A68] md:text-base">
              Menampilkan Peta Desa Dengan Interest Point Desa Cipicung
            </p>
          </div>

          {/* <a
            href={MAP_DETAILS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-[#165E33] transition-colors hover:text-[#36C56F] sm:self-auto"
            aria-label="Buka lokasi kantor desa di Google Maps"
          >
            Selengkapnya
            <span aria-hidden="true">&gt;</span>
          </a> */}
        </div>

        <div className="h-[300px] w-full overflow-hidden rounded-2xl border border-[#165E33]/15 bg-white shadow-[0_12px_30px_rgba(22,94,51,0.12)] md:h-[500px] md:rounded-3xl">
          <iframe
            src={MAP_EMBED_URL}
            title="Peta lokasi Kantor Desa Cipicung"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default PetaDesaSection;
