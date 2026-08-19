import { SEO } from "../config/seo";
import { ROUTES, productUrl } from "../config/routes";
import { products, type Product } from "../models/Data";

/** Resolve a relative path against the production site URL */
export const absoluteUrl = (path: string): string => `${SEO.SITE_URL}${path}`;

/** Schema.org Organization (site-wide, used on the home page) */
export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SEO.SITE_NAME,
  url: SEO.SITE_URL,
  logo: absoluteUrl("/logo512.png"),
});

/** Schema.org WebSite (site-wide, used on the home page) */
export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SEO.SITE_NAME,
  url: SEO.SITE_URL,
  description: SEO.DEFAULT_DESCRIPTION,
  inLanguage: SEO.LOCALE,
});

/** Schema.org ItemList of all products (products page) */
export const itemListSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "GLORIA Products",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: product.name,
    url: absoluteUrl(productUrl(product.id)),
  })),
});

/** Schema.org Product (product detail page) */
export const productSchema = (product: Product) => {
  const category = product.specs.find((s) => s.label === "Category")?.value;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    url: absoluteUrl(productUrl(product.id)),
    description: `${product.name} — premium product from the GLORIA collection.`,
    ...(category ? { category } : {}),
    brand: { "@type": "Brand", name: SEO.SITE_NAME },
  };
};

/** Schema.org Person for the site owner (About page) */
export const personSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: SEO.PERSON.NAME,
  url: absoluteUrl(ROUTES.ABOUT),
  jobTitle: SEO.PERSON.JOB_TITLE,
  sameAs: SEO.PERSON.SAME_AS,
});

/** Schema.org BreadcrumbList (product detail page) */
export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});
