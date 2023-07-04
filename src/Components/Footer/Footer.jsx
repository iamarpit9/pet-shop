import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <svg
        viewBox="0 -20 700 80"
        width="100%"
        height="110"
        preserveAspectRatio="none"
      >
        <path
          transform="translate(0, -20)"
          d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700"
          fill="#e67e22"
        />
      </svg>
      <div className="footer-details">
        <div className="share">
          <div className="btn">
            <i className="fab fa-facebook"></i> facebook
          </div>

          <div className="btn">
            <i className="fab fa-twitter"></i> twitter
          </div>

          <div className="btn">
            <i className="fab fa-instagram"></i> instagram
          </div>

          <div className="btn">
            <i className="fab fa-linkedin"></i> linkedin
          </div>
        </div>

        <div className="credit">
          created by <span>Arpit Gupta</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
