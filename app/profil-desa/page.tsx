import Header from "@/src/components/profil-desa/Header";
import ProfileDataSection from "@/src/components/profil-desa/ProfileData";
import SejarahSingkatSection from "@/src/components/profil-desa/SejarahSingkat";
import VisiMisiSection from "@/src/components/profil-desa/VisiMisi";
import { createSeoMetadata } from "@/src/lib/seo";
import { getPublicPopulationSummary } from "@/src/services/populationService";

export const metadata = createSeoMetadata({
  title: "Profil Desa",
  description:
    "Mengenal lebih jauh sejarah, identitas, dan arah pembangunan Desa Cipicung.",
  path: "/profil-desa",
});

const page = async () => {
  let populationSummary = null;

  try {
    populationSummary = await getPublicPopulationSummary();
  } catch {
    populationSummary = null;
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[#f6faf7]">
      <Header />
      <ProfileDataSection populationSummary={populationSummary} />
      <SejarahSingkatSection />
      <VisiMisiSection />
    </main>
  );
};

export default page;
