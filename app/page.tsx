import Image from "next/image";
import Hero from "@/src/components/Hero";

export default function Home() {
  return (
    <main className="bg-[white] flex min-h-screen flex-col items-center justify-between">
      <Hero />
    </main>
  );
}
