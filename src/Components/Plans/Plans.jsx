import { Link } from "react-router-dom";
import "./style.css";

const Plans = () => {
  return (
    <section className="plans" id="plans">
      <h1 className="heading">
        choose a <span>plan</span>
      </h1>

      <div className="box-container">
        <div className="card-box">
          <h3 className="title">pet care</h3>
          <h3 className="day"> 1 day</h3>
          <i className="fas fa-bicycle icon"></i>
          <div className="list">
            <p>
              pet room <span className="fas fa-check"></span>
            </p>
            <p>
              pet grooming <span className="fas fa-check"></span>
            </p>
            <p>
              pet exercise <span className="fas fa-check"></span>
            </p>
            <p>
              pet meals <span className="fas fa-check"></span>
            </p>
          </div>
          <div className="amount">
            <span>Rs.</span>2000
          </div>
          <Link to="/contact" className="btn">
            {" "}
            choose plan
          </Link>
        </div>

        <div className="card-box">
          <h3 className="title">pet care</h3>
          <h3 className="day"> 10 days</h3>
          <i className="fas fa-motorcycle icon"></i>
          <div className="list">
            <p>
              pet room <span className="fas fa-check"></span>
            </p>
            <p>
              pet grooming <span className="fas fa-check"></span>
            </p>
            <p>
              pet exercise <span className="fas fa-check"></span>
            </p>
            <p>
              pet meals <span className="fas fa-check"></span>
            </p>
          </div>
          <div className="amount">
            <span>Rs.</span>5000
          </div>
          <Link to="/contact" className="btn">
            {" "}
            choose plan
          </Link>
        </div>

        <div className="card-box">
          <h3 className="title">pet care</h3>
          <h3 className="day"> 30 days</h3>
          <i className="fas fa-car-side icon"></i>
          <div className="list">
            <p>
              pet room <span className="fas fa-check"></span>
            </p>
            <p>
              pet grooming <span className="fas fa-check"></span>
            </p>
            <p>
              pet exercise <span className="fas fa-check"></span>
            </p>
            <p>
              pet meals <span className="fas fa-check"></span>
            </p>
          </div>
          <div className="amount">
            <span>Rs.</span>12000
          </div>
          <Link to="/contact" className="btn">
            {" "}
            choose plan
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Plans;
