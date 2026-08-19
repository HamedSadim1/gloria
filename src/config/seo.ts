import { BRAND } from "@/config/constants";

/** Central SEO configuration for the whole app */
export const SEO = {
  /** Site name shown in titles and structured data */
  SITE_NAME: BRAND,

  /** Production origin (no trailing slash) */
  // TODO: replace with the real production domain before launch
  SITE_URL: "https://gloria.example.com",

  /** Content locale (BCP 47) */
  LOCALE: "en",

  /** Default title used by the home page and index.html */
  DEFAULT_TITLE: `${BRAND} — Next-Generation Digital Platform`,

  /** Default meta description */
  DEFAULT_DESCRIPTION:
    "Experience the future of web development. GLORIA is built with cutting-edge technologies for performance, security, and stunning visuals.",

  /** Default Open Graph image (absolute URL is derived at render time) */
  DEFAULT_OG_IMAGE: "/logo512.png",

  /** Accessible description of the default OG image */
  OG_IMAGE_ALT: "GLORIA logo",

  /** Twitter card type */
  TWITTER_CARD: "summary_large_image",

  /** Personal brand details shown on the About page and in the Person schema */
  PERSON: {
    NAME: "Hamed Sadim",
    JOB_TITLE: "Full-Stack Web Developer",
    /** Social/profile URLs Google associates with the name (schema.org sameAs) */
    SAME_AS: ["https://github.com/HamedSadim1"],
  } as const,
} as const;
