import { useContext, useState } from "react";
import LoginForm from "../Form/LoginForm";
import { Link } from "react-router-dom";
import "./style.css";
import userContext from "../../Context/userContext";
import { auth } from "../../config";
const Header = () => {
  const context = useContext(userContext);
  const { currentUser } = context;

  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
    setNav(false);
  };

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setActive(false);
  };

  // window.onscroll = () => {
  //   setActive(false);
  //   setNav(false);
  // };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <i className="fas fa-paw"></i>
        shop
      </Link>

      <nav className={nav ? "navbar active" : "navbar"}>
        <Link to="/" onClick={() => setNav(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setNav(false)}>
          About
        </Link>
        <Link to="/shop" onClick={() => setNav(false)}>
          Shop
        </Link>
        <Link to="/services" onClick={() => setNav(false)}>
          Services
        </Link>
        <Link to="/plans" onClick={() => setNav(false)}>
          Plans
        </Link>
        <Link to="/contact" onClick={() => setNav(false)}>
          Contact
        </Link>
      </nav>

      <div className="icons">
        <div>
          <i
            className="fas fa-bars"
            id="menu-btn"
            onClick={() => handleNav()}
          ></i>
        </div>

        <Link to="/home">
          <i className="fas fa-shopping-cart"></i>
        </Link>
        <div>
          <i className="fas fa-user" onClick={() => handleActive()}></i>
        </div>
      </div>
      <div className="account-btn">
        <Link to="/account">{currentUser.email}</Link>
        <Link to="/" onClick={() => auth.signOut()}>
          {auth.currentUser ? " Log Out " : ""}
        </Link>
      </div>
      <LoginForm active={active} setActive={setActive} />
    </header>
  );
};

export default Header;
