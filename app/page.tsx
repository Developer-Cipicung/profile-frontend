import Hero from "@/src/components/Hero";
import Kades from "@/src/components/Kades";
import Intro from "@/src/components/Intro";
import Data from "@/src/components/Data";
import PetaDesaSection from "@/src/components/Map";
import SotkSection from "@/src/components/Sotk";
import BeritaDesaSection from "@/src/components/Berita";

export default function Home() {
  return (
    <main className="bg-[white] flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Kades />
      <Intro />
      <Data />
      <PetaDesaSection />
      <SotkSection />
      <BeritaDesaSection />
    </main>
  );
}
