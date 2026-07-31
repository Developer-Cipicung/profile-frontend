import { Suspense } from "react";
import Hero from "@/src/components/Hero";
import Kades from "@/src/components/Kades";
import Intro from "@/src/components/Intro";
import Data from "@/src/components/Data";
import PetaDesaSection from "@/src/components/Map";
import SotkSection from "@/src/components/Sotk";
import BeritaDesaSection from "@/src/components/Berita";
import BeritaDesaSkeleton from "@/src/components/BeritaDesaSkeleton";
import ProdukLokalSection from "@/src/components/ProdukLokal";
import ProdukLokalSkeleton from "@/src/components/ProdukLokalSkeleton";

export default function Home() {
  return (
    <main className="bg-[white] flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Kades />
      <Intro />
      <Data />
      <PetaDesaSection />
      <SotkSection />

      {/*
       * BeritaDesaSection is an async Server Component.
       * Suspense shows a skeleton while it fetches — if it throws, the error
       * is caught internally and displays its own error fallback instead.
       */}
      <Suspense fallback={<BeritaDesaSkeleton />}>
        <BeritaDesaSection />
      </Suspense>

      {/*
       * ProdukLokalSection is an async Server Component.
       * Same pattern: Suspense for loading, internal error fallback for failures.
       */}
      <Suspense fallback={<ProdukLokalSkeleton />}>
        <ProdukLokalSection />
      </Suspense>
    </main>
  );
}
