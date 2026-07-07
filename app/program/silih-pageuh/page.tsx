import SilihPageuhHeroSection from "@/src/components/program/silih-pageuh/SilihPageuhHero";
import SilihPageuhPilarSection from "@/src/components/program/silih-pageuh/SilihPageuhPilar";
import SilihPageuhPublikasiSection from "@/src/components/program/silih-pageuh/SilihPageuhPublikasi";

export default function SilihPageuhPage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <SilihPageuhHeroSection />
      <SilihPageuhPilarSection />
      <SilihPageuhPublikasiSection />
    </main>
  );
}
