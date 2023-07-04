import "./style.css";
import food from "../../Images/dogfood-about.webp";
import Food from "../Food/Food";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="image">
        <img src={food} alt="" />
      </div>

      <div className="about-content">
        <h3>
          premium <span>pet food </span> supplier
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis dicta
          dolorum voluptate repellendus aut porro odio quos. Ipsa, iste
          sapiente. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Nobis dicta dolorum voluptate repellendus aut porro odio quos. Ipsa,
          iste sapiente.
        </p>
        <Link to="/" className="btn">
          read more
        </Link>
      </div>
      <Food />
    </section>
  );
};

export default About;
