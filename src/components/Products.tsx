import { products } from "./../models/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageLayout, PageHeader } from "./ui";
import { ArrowRightIcon } from "./Icons";
import { productUrl } from "../config/routes";
import { ID_DISPLAY_LENGTH, ANIM, STAGGER, DELAY } from "../config/constants";

const Products = () => {
  return (
    <PageLayout>
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <PageHeader
          badge="Products"
          showDot
          title="Our Products"
          description="Discover our collection of premium products. Click on any item to view detailed specifications."
        />

        {/* Product Grid */}
        <section
          className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 pb-16 sm:pb-20"
          aria-label="Product list"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIM.ITEM,
                delay: DELAY.EARLY + index * STAGGER,
              }}
            >
              <Link
                to={productUrl(product.id)}
                className="group relative block overflow-hidden rounded-xl border border-gray-800 bg-dark-800 no-underline transition-all duration-300 hover:border-neon-cyan/30 hover:shadow-[0_0_30px_rgba(0,245,255,0.1)]"
              >
                <div className="relative h-24 sm:h-32 overflow-hidden bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10">
                  <motion.div
                    className="flex h-full items-center justify-center text-3xl sm:text-4xl opacity-50 transition-opacity group-hover:opacity-80"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="mb-1 text-base sm:text-lg font-semibold text-white capitalize">
                        {product.name}
                      </h3>
                      <p className="font-mono text-[10px] sm:text-xs text-gray-400">
                        ID: {product.id.slice(0, ID_DISPLAY_LENGTH)}...
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-800 pt-3 sm:pt-4">
                    <span className="rounded-md bg-neon-cyan/10 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-neon-cyan">
                      Premium
                    </span>
                    <motion.span
                      className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-400 transition-colors group-hover:text-neon-cyan"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: ANIM.BOUNCE, repeat: Infinity }}
                      aria-hidden="true"
                    >
                      View Details
                      <ArrowRightIcon className="h-4 w-4" />
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </section>
      </div>
    </PageLayout>
  );
};

export default Products;
