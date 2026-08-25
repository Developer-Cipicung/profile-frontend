import type { MetadataRoute } from "next";
import { createAbsoluteUrl, siteUrl } from "@/src/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/login/",
        "/dashboard/",
        "/tutor-dashboard/",
      ],
    },
    sitemap: createAbsoluteUrl("/sitemap.xml"),
    host: siteUrl.origin,
  };
}
