/** All application route paths */
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  PRODUCTS: "/contact",
  PRODUCT_DETAIL: "/contact/:id",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
} as const;

/** Helper to build a product detail URL */
export const productUrl = (id: string) => `/contact/${id}` as const;
