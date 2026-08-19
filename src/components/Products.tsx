import { products } from "./../models/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <div className="bg-grid relative min-h-screen overflow-hidden px-4 sm:px-6 pt-28 sm:pt-32">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/10 px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-[#00f5ff]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-[#00f5ff]"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-hidden="true"
            />
            Products
          </motion.div>
          <motion.h1
            className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our Products
          </motion.h1>
          <motion.p
            className="max-w-xl text-base sm:text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover our collection of premium products. Click on any item to
            view detailed specifications.
          </motion.p>
        </motion.div>

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
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Link
                to={`/contact/${product.id}`}
                className="group relative block overflow-hidden rounded-xl border border-gray-800 bg-[#12121a] no-underline transition-all duration-300 hover:border-[#00f5ff]/30 hover:shadow-[0_0_30px_rgba(0,245,255,0.1)]"
              >
                <div className="relative h-24 sm:h-32 overflow-hidden bg-gradient-to-br from-[#00f5ff]/10 to-[#bf00ff]/10">
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
                        ID: {product.id.slice(0, 12)}...
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-800 pt-3 sm:pt-4">
                    <span className="rounded-md bg-[#00f5ff]/10 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-[#00f5ff]">
                      Premium
                    </span>
                    <motion.span
                      className="text-xs sm:text-sm text-gray-400 transition-colors group-hover:text-[#00f5ff]"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      aria-hidden="true"
                    >
                      View Details →
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Products;
