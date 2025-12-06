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
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: 80 }}
    >
      <h3 className="ui header">{user}</h3>
      {product.map((product) => (
        <div className="ui card">
          <div className="content">
            <a className="header">{product.name}</a>
            <div className="meta">
              <span className="date">Joined in 2013</span>
            </div>
            <div className="description">
              Kristy is an art director living in New York.
            </div>
          </div>
          <div className="extra content">
            <a style={{ fontSize: 30 }}>
              <Link to="/contact">
                <i className="arrow alternate circle left icon"></i>
              </Link>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
