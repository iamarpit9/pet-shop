import "./style.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        contact <span>us</span>
      </h1>

      <div className="box-container">
        <div className="card-box">
          <i className="fas fa-phone-volume"></i>
          <h2>call us on</h2>
          <h3>
            <span>+91-80599-XXXXX</span>
          </h3>
        </div>

        <div className="card-box">
          <i className="fas fa-file"></i>
          <h2>fill out the</h2>
          <h3>
            <span>The Contact Form</span>
          </h3>
        </div>

        <div className="card-box">
          <i className="fas fa-envelope"></i>
          <h2>email us at</h2>
          <h3>
            <span>petshop@gmail.com</span>
          </h3>
        </div>
      </div>

      <div className="contact-details">
        <form>
          <h3>contact form</h3>
          <input type="text" placeholder="your name" className="box" />
          <input type="text" placeholder="your email" className="box" />
          <input
            type="number"
            placeholder="your phone number"
            className="box"
          />
          <textarea
            className="box"
            placeholder="your message"
            cols="5"
            rows="5"
          ></textarea>
          <input
            type="submit"
            value="send message"
            onClick={(e) => e.preventDefault()}
            className="btn"
          />
        </form>

        <div className="details">
          <div>
            <h3>Our Address</h3>
            <h4>ABC Colony, District Centre, </h4>
            <h4>
              <span>Panipat-132103, Haryana</span>
            </h4>
          </div>
          <div>
            <h3>WhatsApp us at</h3>
            <h4>
              <i className="fab fa-whatsapp"></i> +91-80599-XXXXX
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
