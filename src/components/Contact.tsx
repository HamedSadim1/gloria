import { products } from "./../models/Data";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="mx-auto mt-32 max-w-4xl px-6">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-white">Our Products</h1>
        <p className="text-lg text-white/60">
          Discover our amazing collection. Click on any product to view details.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="group rounded-xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-2xl"
          >
            <div className="mb-4">
              <h3 className="mb-1 text-lg font-semibold text-white">
                {product.name}
              </h3>
              <p className="text-xs text-white/50">
                ID: {product.id.slice(0, 8)}...
              </p>
            </div>
            <Link to={`/contact/${product.id}`} className="block no-underline">
              <button className="w-full cursor-pointer rounded-lg border border-white/20 bg-white/15 py-2.5 font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/25 hover:shadow-md">
                View Details →
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
