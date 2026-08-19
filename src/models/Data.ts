export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  specs: ProductSpec[];
}

export const products: Product[] = [
  {
    id: "recZkNf2kwmdBcqd0",
    name: "accent chair",
    specs: [
      { label: "Category", value: "Seating" },
      { label: "Quality", value: "A+" },
      { label: "Warranty", value: "3 Years" },
    ],
  },
  {
    id: "recEHmzvupvT8ZONH",
    name: "albany sectional",
    specs: [
      { label: "Category", value: "Living Room" },
      { label: "Quality", value: "A+" },
      { label: "Warranty", value: "5 Years" },
    ],
  },
  {
    id: "rec5NBwZ5zCD9nfF0",
    name: "albany table",
    specs: [
      { label: "Category", value: "Tables" },
      { label: "Quality", value: "A" },
      { label: "Warranty", value: "2 Years" },
    ],
  },
  {
    id: "recd1jIVIEChmiwhe",
    name: "armchair",
    specs: [
      { label: "Category", value: "Seating" },
      { label: "Quality", value: "A+" },
      { label: "Warranty", value: "3 Years" },
    ],
  },
  {
    id: "recoM2MyHJGHLVi5l",
    name: "bar stool",
    specs: [
      { label: "Category", value: "Seating" },
      { label: "Quality", value: "B+" },
      { label: "Warranty", value: "1 Year" },
    ],
  },
];
