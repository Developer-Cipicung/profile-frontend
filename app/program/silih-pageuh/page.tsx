import SilihPageuhAboutSection from "@/src/components/program/silih-pageuh/SilihPageuhAbout";
import SilihPageuhHeroSection from "@/src/components/program/silih-pageuh/SilihPageuhHero";
import SilihPageuhPilarSection from "@/src/components/program/silih-pageuh/SilihPageuhPilar";
import SilihPageuhPublikasiSection from "@/src/components/program/silih-pageuh/SilihPageuhPublikasi";
import { createSeoMetadata } from "@/src/lib/seo";

export const metadata = createSeoMetadata({
  title: "Silih Pageuh",
  description:
    "Program SILIH PAGEUH merupakan program yang telah dirancang bersama masyarakat Desa Cipicung guna memberdayakan masyarakat dan mengintegrasikan peningkatan kesehatan melalui optimalisasi ketahanan pangan lokal dan pengelolaan lingkungan dalam 4 Sistem Keluarga.",
  path: "/program/silih-pageuh",
});

export default function SilihPageuhPage() {
  return (
    <main className="min-h-screen w-full bg-[#f6faf7]">
      <SilihPageuhHeroSection />
      <SilihPageuhAboutSection />
      <SilihPageuhPilarSection />
      <SilihPageuhPublikasiSection />
    </main>
  );
}
