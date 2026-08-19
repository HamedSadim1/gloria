import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SEO } from "../../config/seo";
import { absoluteUrl } from "../../utils/seo";

interface SeoProps {
  /** Page title (site name is appended unless it is already included) */
  title: string;
  /** Meta + Open Graph description */
  description?: string;
  /** Relative route path used for canonical and og:url (e.g. "/about") */
  path?: string;
  /** Open Graph type */
  type?: string;
  /** Open Graph / Twitter image path */
  image?: string;
  /** Add robots noindex, nofollow (auth, 404, private pages) */
  noindex?: boolean;
  /** JSON-LD structured data — one or more schema.org objects */
  jsonLd?: object | object[];
}

const Seo = ({
  title,
  description,
  path,
  type = "website",
  image = SEO.DEFAULT_OG_IMAGE,
  noindex = false,
  jsonLd,
}: SeoProps) => {
  const { pathname } = useLocation();
  const resolvedPath = path ?? pathname;
  const fullTitle = title.includes(SEO.SITE_NAME)
    ? title
    : `${title} | ${SEO.SITE_NAME}`;
  const url = absoluteUrl(resolvedPath);
  const ogImage = absoluteUrl(image);
  const robots = noindex ? "noindex, nofollow" : "index, follow";
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      <meta name="robots" content={robots} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SEO.SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={SEO.OG_IMAGE_ALT} />
      <meta property="og:locale" content={SEO.LOCALE} />

      <meta name="twitter:card" content={SEO.TWITTER_CARD} />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={SEO.OG_IMAGE_ALT} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
