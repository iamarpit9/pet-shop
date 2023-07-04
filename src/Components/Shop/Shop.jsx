import "./style.css";
import prod1 from "../../Images/dog-food.jpeg";
import prod2 from "../../Images/products7.jpeg";
import prod3 from "../../Images/products3.jpeg";
import prod4 from "../../Images/products4.jpeg";
import prod5 from "../../Images/products5.jpeg";
import prod6 from "../../Images/products6.jpeg";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <section className="shop" id="shop">
      <h1 className="heading">
        our <span>products</span>
      </h1>

      <div className="box-container">
        <div className="card-box">
          <div className="icons">
            <Link to="/" className="fas fa-shopping-cart">
              {" "}
            </Link>
            <Link to="/" className="fas fa-heart">
              {" "}
            </Link>
            <Link to="/" className="fas fa-eye">
              {" "}
            </Link>
          </div>
          <div className="food-image">
            <img src={prod1} alt="" />
          </div>
          <div className="food-content">
            <h3> dog food</h3>
            <div className="amount">Rs.1500 - Rs.3000</div>
          </div>
        </div>

        <div className="card-box">
          <div className="icons">
            <Link to="/" className="fas fa-shopping-cart">
              {" "}
            </Link>
            <Link to="/" className="fas fa-heart">
              {" "}
            </Link>
            <Link to="/" className="fas fa-eye">
              {" "}
            </Link>
          </div>
          <div className="food-image">
            <img src={prod2} alt="" />
          </div>
          <div className="food-content">
            <h3>dog clothing</h3>
            <div className="amount">Rs.1500 - Rs.3000</div>
          </div>
        </div>

        <div className="card-box">
          <div className="icons">
            <Link to="/" className="fas fa-shopping-cart">
              {" "}
            </Link>
            <Link to="/" className="fas fa-heart">
              {" "}
            </Link>
            <Link to="/" className="fas fa-eye">
              {" "}
            </Link>
          </div>
          <div className="food-image">
            <img src={prod3} alt="" />
          </div>
          <div className="food-content">
            <h3>cat food</h3>
            <div className="amount">Rs.1500 - Rs.3000</div>
          </div>
        </div>

        <div className="card-box">
          <div className="icons">
            <Link to="/" className="fas fa-shopping-cart">
              {" "}
            </Link>
            <Link to="/" className="fas fa-heart">
              {" "}
            </Link>
            <Link to="/" className="fas fa-eye">
              {" "}
            </Link>
          </div>
          <div className="food-image">
            <img src={prod4} alt="" />
          </div>
          <div className="food-content">
            <h3>dog toys</h3>
            <div className="amount">Rs.1500 - Rs.3000</div>
          </div>
        </div>

        <div className="card-box">
          <div className="icons">
            <Link to="/" className="fas fa-shopping-cart">
              {" "}
            </Link>
            <Link to="/" className="fas fa-heart">
              {" "}
            </Link>
            <Link to="/" className="fas fa-eye">
              {" "}
            </Link>
          </div>
          <div className="food-image">
            <img src={prod5} alt="" />
          </div>
          <div className="food-content">
            <h3>cat toys</h3>
            <div className="amount">Rs.1500 - Rs.3000</div>
          </div>
        </div>

        <div className="card-box">
          <div className="icons">
            <Link to="/" className="fas fa-shopping-cart">
              {" "}
            </Link>
            <Link to="/" className="fas fa-heart">
              {" "}
            </Link>
            <Link to="/" className="fas fa-eye">
              {" "}
            </Link>
          </div>
          <div className="food-image">
            <img src={prod6} alt="" />
          </div>
          <div className="food-content">
            <h3>dog treats</h3>
            <div className="amount">Rs.1500 - Rs.3000</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
