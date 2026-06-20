import type { MetadataRoute } from "next";

import { SITE } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — ${SITE.role}`,
    short_name: SITE.wordmark,
    description:
      "Personal portfolio of Zein Hammad Marhabah, a frontend engineer specializing in the React ecosystem.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1322",
    theme_color: "#0B1322",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
