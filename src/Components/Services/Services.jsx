import { Link } from "react-router-dom";
import "./style.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <h1 className="heading">
        our <span>services</span>
      </h1>

      <div className="box-container">
        <div className="card-box">
          <i className="fas fa-dog"></i>
          <h3>dog boarding</h3>
          <Link to="/" className="btn">
            read more
          </Link>
        </div>

        <div className="card-box">
          <i className="fas fa-cat"></i>
          <h3>cat boarding</h3>
          <Link to="/" className="btn">
            read more
          </Link>
        </div>

        <div className="card-box">
          <i className="fas fa-bath"></i>
          <h3>spa & grooming</h3>
          <Link to="/" className="btn">
            read more
          </Link>
        </div>

        <div className="card-box">
          <i className="fas fa-drumstick-bite"></i>
          <h3>healthy meal</h3>
          <Link to="/" className="btn">
            read more
          </Link>
        </div>

        <div className="card-box">
          <i className="fas fa-baseball-ball"></i>
          <h3>activity exercises</h3>
          <Link to="/" className="btn">
            read more
          </Link>
        </div>

        <div className="card-box">
          <i className="fas fa-heartbeat"></i>
          <h3>health care</h3>
          <Link to="/" className="btn">
            read more
          </Link>
        </div>

        <div className="card-box">
          <i className="fas fa-syringe"></i>
          <h3>vaccination</h3>
          <Link to="/" className="btn">
            read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
