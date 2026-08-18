import MapClient from "@/src/components/MapClient";

export default function PetaDesaSection() {
  return (
    <section
      aria-labelledby="peta-desa-title"
      className="w-full bg-white px-5 py-14 sm:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <MapClient showTitle />
      </div>
    </section>
  );
}
