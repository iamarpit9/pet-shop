import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>
          <span>hi</span> welcome to our pet shop
        </h3>
        <Link to="/shop" className="btn">
          shop now
        </Link>
      </div>
      <div className="test-user">
        <div>Use the credentials for testing:</div>
        <div>Email: testuser@gmail.com</div>
        <div>Password: 1234567890</div>
      </div>
    </section>
  );
};

export default Home;
