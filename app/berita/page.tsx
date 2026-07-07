import BeritaHeroSection from "@/src/components/berita/BeritaHero";
import BeritaListSection from "@/src/components/berita/BeritaList";

export default function BeritaPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#f8faf8]">
      <BeritaHeroSection />
      <BeritaListSection />
    </main>
  );
}
