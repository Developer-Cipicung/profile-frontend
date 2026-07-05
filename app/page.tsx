import Hero from "@/src/components/Hero";
import Kades from "@/src/components/Kades";
import Intro from "@/src/components/Intro";
import Data from "@/src/components/Data";

export default function Home() {
  return (
    <main className="bg-[white] flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Kades />
      <Intro />
      <Data />
    </main>
  );
}
