import { products, type Product } from "@/models/Data";

/** Find a product by its id, or null if not found */
export const getProductById = (id: string | undefined): Product | null =>
  products.find((p) => p.id === id) ?? null;
