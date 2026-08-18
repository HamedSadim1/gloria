import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "./../models/Data";

const Card = () => {
  const { user } = useParams();
  const product = useMemo(() => products.filter((p) => p.id === user), [user]);

  return (
    <div className="bg-grid min-h-screen px-6 pt-32">
      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          to="/contact"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 no-underline transition-colors hover:text-[#00f5ff]"
        >
          ← Back to Products
        </Link>

        {product.map((p) => (
          <div
            key={p.id}
            className="overflow-hidden rounded-2xl border border-gray-800 bg-[#12121a]"
          >
            {/* Header */}
            <div className="relative border-b border-gray-800 bg-gradient-to-r from-[#00f5ff]/10 to-[#bf00ff]/10 p-8">
              <div className="mb-2 text-xs font-medium tracking-widest text-[#00f5ff] uppercase">
                Product Details
              </div>
              <h1 className="text-3xl font-bold capitalize text-white">
                {p.name}
              </h1>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Product Info Grid */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-gray-800 bg-[#0a0a0f] p-4">
                  <div className="mb-1 text-xs text-gray-500">Product ID</div>
                  <div className="font-mono text-sm text-white">{p.id}</div>
                </div>
                <div className="rounded-lg border border-gray-800 bg-[#0a0a0f] p-4">
                  <div className="mb-1 text-xs text-gray-500">Status</div>
                  <div className="flex items-center gap-2 text-sm text-green-400">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    Active
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="mb-3 text-sm font-semibold tracking-widest text-[#00f5ff] uppercase">
                  Description
                </h2>
                <p className="leading-relaxed text-gray-300">
                  This is a premium {p.name.toLowerCase()} designed with quality
                  and style in mind. Crafted using the finest materials and
                  cutting-edge manufacturing processes, this product represents
                  the perfect blend of form and function.
                </p>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h2 className="mb-3 text-sm font-semibold tracking-widest text-[#00f5ff] uppercase">
                  Specifications
                </h2>
                <div className="space-y-2">
                  {[
                    { label: "Category", value: "Premium Collection" },
                    { label: "Quality", value: "A+" },
                    { label: "Warranty", value: "5 Years" },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-gray-800 py-3"
                    >
                      <span className="text-sm text-gray-400">{label}</span>
                      <span className="text-sm font-medium text-white">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="flex-1 rounded-lg border border-gray-700 bg-transparent py-3 text-center font-medium text-white no-underline transition-all duration-300 hover:border-[#00f5ff]/50 hover:bg-[#00f5ff]/5"
                >
                  ← Back
                </Link>
                <Link
                  to="/login"
                  className="flex-1 rounded-lg bg-[#00f5ff] py-3 text-center font-semibold text-black no-underline transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,255,0.4)]"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
