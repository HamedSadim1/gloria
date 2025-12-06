import { products } from "./../models/Data";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: 80 }}
      >
        <h3 className="ui header">Contact</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque
          vel asperiores neque soluta a eligendi consequuntur nobis, est
          reprehenderit aspernatur facere doloremque excepturi labore quos harum
          architecto nisi debitis.
        </p>

        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="ui link container center aligned cards"
            >
              <div className="card">
                <div className="content">
                  <div className="header">{product.name}</div>
                </div>
                <div className="extra content">
                  <div className="ui two buttons">
                    <Link to={`/contact/${product.id}`}>
                      <div className="ui basic green button">View</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contact;
