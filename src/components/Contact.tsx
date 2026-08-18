import { products } from "./../models/Data";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-grid min-h-screen px-6 pt-32">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00f5ff]/30 bg-[#00f5ff]/10 px-4 py-1.5 text-sm text-[#00f5ff]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00f5ff]" />
            Products
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white">Our Products</h1>
          <p className="max-w-xl text-gray-400">
            Discover our collection of premium products. Click on any item to
            view detailed specifications.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={`/contact/${product.id}`}
              className="group relative overflow-hidden rounded-xl border border-gray-800 bg-[#12121a] no-underline transition-all duration-300 hover:border-[#00f5ff]/30 hover:shadow-[0_0_30px_rgba(0,245,255,0.1)]"
            >
              {/* Card header gradient */}
              <div className="h-32 bg-gradient-to-br from-[#00f5ff]/10 to-[#bf00ff]/10">
                <div className="flex h-full items-center justify-center text-4xl opacity-50 transition-opacity group-hover:opacity-80">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-white capitalize">
                      {product.name}
                    </h3>
                    <p className="font-mono text-xs text-gray-500">
                      ID: {product.id.slice(0, 12)}...
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                  <span className="rounded-md bg-[#00f5ff]/10 px-3 py-1 text-xs font-medium text-[#00f5ff]">
                    Premium
                  </span>
                  <span className="text-sm text-gray-400 transition-colors group-hover:text-[#00f5ff]">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
