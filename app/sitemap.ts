import type { MetadataRoute } from "next";
import { fallbackNews } from "@/src/data/newsFallback";
import { silihPageuhSubprograms } from "@/src/data/silihPageuhSubprograms";
import { fallbackUmkm } from "@/src/data/umkmFallback";
import { createAbsoluteUrl } from "@/src/lib/seo";
import { getNewsList, type NewsItem } from "@/src/services/newsService";
import { getUmkmList, type UmkmItem } from "@/src/services/umkmService";

type SitemapUrl = MetadataRoute.Sitemap[number];
type SitemapRoute = Omit<SitemapUrl, "url"> & {
  path: string;
};

const staticRoutes = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/profil-desa",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/profil-desa/struktur-organisasi",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/berita",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    path: "/umkm",
    changeFrequency: "weekly",
    priority: 0.85,
  },
  {
    path: "/lokasi",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/program/silih-pageuh",
    changeFrequency: "monthly",
    priority: 0.85,
  },
] satisfies SitemapRoute[];

function encodeRouteSegment(value: string) {
  return encodeURIComponent(value.trim());
}

function getRouteDate(value: string | undefined) {
  if (!value) return undefined;

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function toSitemapUrl(route: SitemapRoute): SitemapUrl {
  return {
    ...route,
    url: createAbsoluteUrl(route.path),
  };
}

function getNewsPath(news: NewsItem) {
  return `/berita/${encodeRouteSegment(news.slug ?? news.id)}`;
}

function getUmkmPath(product: UmkmItem) {
  return `/umkm/${encodeRouteSegment(product.slug ?? product.id)}`;
}

async function getNewsRoutes(): Promise<SitemapRoute[]> {
  let newsItems = fallbackNews;

  try {
    newsItems = await getNewsList();
  } catch {
    newsItems = fallbackNews;
  }

  return newsItems.map((news) => ({
    path: getNewsPath(news),
    lastModified: getRouteDate(news.publishedAt ?? news.createdAt),
    changeFrequency: "weekly",
    priority: 0.65,
  }));
}

async function getUmkmRoutes(): Promise<SitemapRoute[]> {
  let products = fallbackUmkm;

  try {
    products = await getUmkmList();
  } catch {
    products = fallbackUmkm;
  }

  return products.map((product) => ({
    path: getUmkmPath(product),
    lastModified: getRouteDate(product.createdAt),
    changeFrequency: "weekly",
    priority: 0.65,
  }));
}

function getSilihPageuhRoutes(): SitemapRoute[] {
  return silihPageuhSubprograms.map((subprogram) => ({
    path: subprogram.href,
    changeFrequency: "monthly",
    priority: 0.75,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [newsRoutes, umkmRoutes] = await Promise.all([
    getNewsRoutes(),
    getUmkmRoutes(),
  ]);

  const routes = [
    ...staticRoutes,
    ...getSilihPageuhRoutes(),
    ...newsRoutes,
    ...umkmRoutes,
  ];

  return Array.from(
    new Map(routes.map((route) => [route.path, route])).values(),
  ).map(toSitemapUrl);
}
