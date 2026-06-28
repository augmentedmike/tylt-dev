import type { MetadataRoute } from "next";

const SITE_URL = "https://tylt.dev";

// Bumped when site content changes meaningfully — keeps `lastmod` stable across
// builds instead of churning on every deploy.
const LAST_MODIFIED = "2026-06-28";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/expert-and-ai`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/work`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
