import type { Metadata } from "next";

export const siteName = "Website Desa Cipicung";
export const shortSiteName = "Desa Cipicung";
export const siteDescription =
  "Website resmi Pemerintah Desa Cipicung sebagai media informasi, komunikasi, dan pelayanan kepada masyarakat.";

const fallbackSiteUrl = "https://cijeruk-cipicung.com";

function normalizeSiteUrl(value: string | undefined) {
  const candidate = value?.trim() || fallbackSiteUrl;
  const withProtocol = /^https?:\/\//i.test(candidate)
    ? candidate
    : `https://${candidate}`;

  try {
    return new URL(withProtocol);
  } catch {
    return new URL(fallbackSiteUrl);
  }
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL,
);

export function createAbsoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function createMetaDescription(value: string, fallback = siteDescription) {
  const text = value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const description = text || fallback;

  return description.length > 160
    ? `${description.slice(0, 157).trimEnd()}...`
    : description;
}

type SeoMetadataOptions = {
  title?: string;
  absoluteTitle?: boolean;
  description?: string;
  path?: string;
};

export function createSeoMetadata({
  title,
  absoluteTitle = false,
  description = siteDescription,
  path = "/",
}: SeoMetadataOptions = {}): Metadata {
  const resolvedTitle = title ?? siteName;

  return {
    title: title
      ? absoluteTitle
        ? { absolute: title }
        : title
      : undefined,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url: path,
      siteName: shortSiteName,
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: resolvedTitle,
      description,
    },
  };
}
