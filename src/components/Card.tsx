import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "./../models/Data";
import { motion } from "framer-motion";
import { PageLayout, FadeIn, StatusDot, GradientHeader, SpecRow } from "./ui";
import { ROUTES } from "../config/routes";

const Card = () => {
  const { user } = useParams();
  const product = useMemo(
    () => products.find((p) => p.id === user) ?? null,
    [user],
  );

  if (!product) {
    return (
      <PageLayout>
        <div className="mx-auto max-w-md text-center">
          <FadeIn y={20} className="mb-4">
            <h1 className="text-2xl font-bold text-white">Product Not Found</h1>
          </FadeIn>
          <FadeIn delay={0.1} y={20} className="mb-6">
            <p className="text-gray-400">
              The product you're looking for doesn't exist.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} y={20}>
            <Link
              to={ROUTES.PRODUCTS}
              className="inline-flex items-center gap-2 rounded-lg bg-[#00f5ff] px-6 py-3 font-semibold text-sm text-black no-underline transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
            >
              ← Back to Products
            </Link>
          </FadeIn>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl">
        <motion.nav
          className="mb-6 sm:mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-1.5 text-xs sm:text-sm">
            <li>
              <Link
                to={ROUTES.HOME}
                className="text-gray-400 no-underline transition-colors hover:text-white"
              >
                Home
              </Link>
            </li>
            <li className="text-gray-600" aria-hidden="true">
              /
            </li>
            <li>
              <Link
                to={ROUTES.PRODUCTS}
                className="text-gray-400 no-underline transition-colors hover:text-white"
              >
                Products
              </Link>
            </li>
            <li className="text-gray-600" aria-hidden="true">
              /
            </li>
            <li>
              <span className="text-[#00f5ff]">Details</span>
            </li>
          </ol>
        </motion.nav>

        <motion.section
          className="overflow-hidden rounded-xl sm:rounded-2xl border border-gray-800 bg-[#12121a] mb-16 sm:mb-20"
          aria-labelledby="product-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GradientHeader
            label="Product Details"
            title={product.name}
            titleId="product-heading"
          />

          <div className="p-5 sm:p-8">
            <div className="mb-6 sm:mb-8 grid grid-cols-2 gap-3 sm:gap-4">
              <FadeIn x={-20} delay={0.5} y={0}>
                <div className="rounded-lg border border-gray-800 bg-[#0a0a0f] p-3 sm:p-4">
                  <div className="mb-1 text-[10px] sm:text-xs text-gray-400">
                    Product ID
                  </div>
                  <div className="font-mono text-[10px] sm:text-sm text-white break-all">
                    {product.id}
                  </div>
                </div>
              </FadeIn>
              <FadeIn x={20} delay={0.6} y={0}>
                <div className="rounded-lg border border-gray-800 bg-[#0a0a0f] p-3 sm:p-4">
                  <div className="mb-1 text-[10px] sm:text-xs text-gray-400">
                    Status
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-green-400">
                    <StatusDot color="bg-green-400" pulse={false} />
                    Active
                  </div>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.7} className="mb-6 sm:mb-8">
              <h2 className="mb-3 text-xs sm:text-sm font-semibold tracking-widest text-[#00f5ff] uppercase">
                Description
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                This is a premium {product.name.toLowerCase()} designed with
                quality and style in mind. Crafted using the finest materials
                and cutting-edge manufacturing processes, this product
                represents the perfect blend of form and function.
              </p>
            </FadeIn>

            <FadeIn delay={0.8} className="mb-6 sm:mb-8">
              <h2 className="mb-3 text-xs sm:text-sm font-semibold tracking-widest text-[#00f5ff] uppercase">
                Specifications
              </h2>
              <div className="space-y-2">
                {product.specs.map(({ label, value }, specIndex) => (
                  <SpecRow
                    key={label}
                    label={label}
                    value={value}
                    index={specIndex}
                  />
                ))}
              </div>
            </FadeIn>

            <FadeIn
              delay={1.2}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                to={ROUTES.PRODUCTS}
                className="flex-1 rounded-lg border border-gray-700 bg-transparent px-6 py-3 text-center font-medium text-white no-underline transition-all duration-300 hover:border-[#00f5ff]/50 hover:bg-[#00f5ff]/5"
              >
                ← Back
              </Link>
              <Link
                to={ROUTES.LOGIN}
                className="flex-1 rounded-lg bg-[#00f5ff] px-6 py-3 text-center font-semibold text-black no-underline transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
              >
                Sign in to Purchase
              </Link>
            </FadeIn>
          </div>
        </motion.section>
      </div>
    </PageLayout>
  );
};

export default Card;
