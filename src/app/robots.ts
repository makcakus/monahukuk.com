import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://monahukuk.com/sitemap.xml",
    host: "https://monahukuk.com",
  };
}
