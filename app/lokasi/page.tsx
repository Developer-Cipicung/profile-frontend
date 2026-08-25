import LokasiExplorer from "@/src/components/lokasi/LokasiExplorer";
import { createSeoMetadata } from "@/src/lib/seo";

export const metadata = createSeoMetadata({
  title: "Lokasi Penting Desa",
  description:
    "Temukan fasilitas, layanan, dan lokasi strategis di Desa Cipicung.",
  path: "/lokasi",
});

export default function LokasiPage() {
  return (
    <main className="min-h-screen w-full bg-[#f6faf7]">
      <LokasiExplorer />
    </main>
  );
}
