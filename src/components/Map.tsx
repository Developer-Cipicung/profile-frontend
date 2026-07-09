import MapClient from "@/src/components/MapClient";

export default function PetaDesaSection() {
  return (
    <section
      aria-labelledby="peta-desa-title"
      className="w-full px-4 py-6 md:px-32 md:py-10"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <MapClient showTitle />
      </div>
    </section>
  );
}
