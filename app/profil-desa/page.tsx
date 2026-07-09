import Header from "@/src/components/profil-desa/Header";
import ProfileDataSection from "@/src/components/profil-desa/ProfileData";
import SejarahSingkatSection from "@/src/components/profil-desa/SejarahSingkat";
import VisiMisiSection from "@/src/components/profil-desa/VisiMisi";
import { getPublicPopulationSummary } from "@/src/services/populationService";

const page = async () => {
  let populationSummary = null;

  try {
    populationSummary = await getPublicPopulationSummary();
  } catch {
    populationSummary = null;
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-white pt-4 md:pt-8">
      <Header />
      <ProfileDataSection populationSummary={populationSummary} />
      <SejarahSingkatSection />
      <VisiMisiSection />
    </main>
  );
};

export default page;
