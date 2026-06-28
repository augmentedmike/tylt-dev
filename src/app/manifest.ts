import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tylt — Agentic Dev Shop",
    short_name: "Tylt",
    description:
      "American-owned agentic dev shop. In-house AI workers managed by senior product talent build and ship your software for 60%+ less than a traditional onshore agency.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a12",
    theme_color: "#0a0a12",
    categories: ["business", "productivity", "developer"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
