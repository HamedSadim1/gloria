import { products } from "./../models/Data";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="glass page-container-wide">
        <h3 className="text-white mb-1">Our Products</h3>
        <p className="text-white-secondary mb-2 line-height-1-6">
          Discover our amazing collection of products. Click on any product to
          view more details.
        </p>

        <div className="grid-products">
          {products.map((product) => {
            return (
              <div key={product.id} className="glass-card product-card">
                <div className="mb-1">
                  <h4 className="text-white product-title">{product.name}</h4>
                  <p className="text-white-muted product-id">
                    Product ID: {product.id}
                  </p>
                </div>
                <Link to={`/contact/${product.id}`}>
                  <button className="glass-button btn-full-width">
                    View Details
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Contact;
