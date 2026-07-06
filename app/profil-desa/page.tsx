import React from "react";
import Header from "@/src/components/profil-desa/Header";
import ProfileDataSection from "@/src/components/profil-desa/ProfileData";
import SejarahSingkatSection from "@/src/components/profil-desa/SejarahSingkat";
import VisiMisiSection from "@/src/components/profil-desa/VisiMisi";

const page = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-white pt-4 md:pt-8">
      <Header />
      <ProfileDataSection />
      <SejarahSingkatSection />
      <VisiMisiSection />
    </main>
  );
};

export default page;
