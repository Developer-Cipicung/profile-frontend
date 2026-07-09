import BeritaHeroSection from "@/src/components/berita/BeritaHero";
import BeritaListSection from "@/src/components/berita/BeritaList";
import { fallbackNews } from "@/src/data/newsFallback";
import { getNewsList } from "@/src/services/newsService";

export default async function BeritaPage() {
  let news = fallbackNews;
  let isUsingFallback = false;

  try {
    news = await getNewsList();
  } catch (error) {
    isUsingFallback = true;
    console.error("Unable to load news from the API; using fallback data.", error);
  }

  return (
    <main className="flex min-h-screen w-full flex-col bg-[#f8faf8]">
      <BeritaHeroSection />
      <BeritaListSection news={news} isUsingFallback={isUsingFallback} />
    </main>
  );
}
