import { beritaList } from "@/src/data/berita";
import type { NewsItem } from "@/src/services/newsService";

export const fallbackNews: NewsItem[] = beritaList.map((item) => ({
  id: item.id,
  title: item.title,
  category: item.category,
  excerpt: item.description,
  content: item.content.join("\n\n"),
  imageUrl: "",
  publishedAt: item.isoDate,
  createdAt: item.isoDate,
}));
