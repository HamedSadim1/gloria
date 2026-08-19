import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { PageLayout, GradientHeader } from "../ui";
import { ANIM } from "../../config/constants";
import { productUrl, ROUTES } from "../../config/routes";
import {
  getProductById,
  capitalize,
  productSchema,
  breadcrumbSchema,
} from "../../utils";
import Seo from "../seo/Seo";
import {
  ProductNotFound,
  Breadcrumb,
  ProductInfo,
  ProductDescription,
  ProductSpecs,
  ProductActions,
} from "./card-detail";

const Card = () => {
  const { user } = useParams();
  const product = useMemo(() => getProductById(user), [user]);

  if (!product) {
    return <ProductNotFound />;
  }

  const title = capitalize(product.name);

  return (
    <PageLayout>
      <Seo
        title={title}
        description={`${title} — premium ${product.name} from the GLORIA collection. View detailed specifications, quality and warranty.`}
        path={productUrl(product.id)}
        type="product"
        jsonLd={[
          productSchema(product),
          breadcrumbSchema([
            { name: "Home", path: ROUTES.HOME },
            { name: "Products", path: ROUTES.PRODUCTS },
            { name: title, path: productUrl(product.id) },
          ]),
        ]}
      />
      <div className="mx-auto max-w-3xl">
        <Breadcrumb />

        <motion.section
          className="overflow-hidden rounded-xl sm:rounded-2xl border border-gray-800 bg-dark-800 mb-16 sm:mb-20"
          aria-labelledby="product-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIM.FADE }}
        >
          <GradientHeader
            label="Product Details"
            title={product.name}
            titleId="product-heading"
          />

          <div className="p-5 sm:p-8">
            <ProductInfo id={product.id} />
            <ProductDescription name={product.name} />
            <ProductSpecs specs={product.specs} />
            <ProductActions />
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
};

export default Card;
