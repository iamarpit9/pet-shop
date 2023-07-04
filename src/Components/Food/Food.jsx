import "./style.css";
import prod from "../../Images/products2.webp";
import { Link } from "react-router-dom";

const Food = () => {
  return (
    <div className="food">
      <div className="dog">
        <h4>
          <span>all dog & cat products</span> are available
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          ducimus, a doloribus excepturi dolores, placeat, vitae eligendi
          officiis necessitatibus fugiat incidunt neque deleniti soluta
          repellat?
        </p>
        <Link to="/shop" className="btn">
          shop now
        </Link>
      </div>
      <div className="image">
        <img src={prod} alt="" />
      </div>
    </div>
  );
};

export default Food;
