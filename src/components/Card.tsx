import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "./../models/Data";

const Card = () => {
  const { user } = useParams();
  const product = useMemo(() => products.filter((p) => p.id === user), [user]);

  return (
    <div className="mx-auto mt-32 max-w-2xl px-6">
      <h2 className="mb-6 text-2xl font-bold text-white">Product Details</h2>

      <div className="space-y-4">
        {product.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-6">
              <h3 className="mb-2 text-3xl font-bold text-white">{p.name}</h3>
              <p className="text-sm text-white/50">Product ID: {p.id}</p>
            </div>

            <div className="mb-8">
              <h4 className="mb-2 text-lg font-semibold text-white">
                Description
              </h4>
              <p className="leading-relaxed text-white/70">
                This is a premium {p.name.toLowerCase()} designed with quality
                and style in mind. Perfect for modern living spaces and
                professional environments.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <Link
                to="/contact"
                className="rounded-lg border border-white/20 bg-white/15 px-5 py-2.5 font-medium text-white no-underline backdrop-blur-sm transition-all duration-200 hover:bg-white/25"
              >
                ← Back to Products
              </Link>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/70">
                Premium Quality
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
