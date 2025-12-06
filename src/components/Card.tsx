import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "./../models/Data";

const Card = () => {
  const [product, setProduct] = useState(products);

  const { user } = useParams();

  useEffect(() => {
    const newUsers = products.filter((product) => product.id === user);
    setProduct(newUsers);
  }, [user]);

  return (
    <div className="glass page-container-medium">
      <h3 className="text-white mb-1">Product Details</h3>
      {product.map((product) => (
        <div key={product.id} className="glass-card content-card">
          <div className="mb-1-5">
            <h2 className="text-white product-detail-title">{product.name}</h2>
            <p className="text-white-muted product-detail-id">
              Product ID: {product.id}
            </p>
          </div>
          <div className="mb-1-5">
            <h4 className="text-white margin-0-0-0-5-0">Description</h4>
            <p className="text-white-secondary line-height-1-6">
              This is a premium {product.name.toLowerCase()} designed with
              quality and style in mind. Perfect for modern living spaces and
              professional environments.
            </p>
          </div>
          <div className="flex-space-between">
            <Link to="/contact">
              <button className="glass-button btn-back">
                ← Back to Products
              </button>
            </Link>
            <span className="text-white-light quality-badge">
              Premium Quality
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
