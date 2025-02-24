import "./ServiceContact.scss";

const ServiceContact = () => {
  return (
    <div className="serviceContact">
      <div className="serviceContact-left">
        <div className="serviceContact-left-top">
          <h1>Contact Us</h1>
          <p className="serviceContact-left-desc">
            Feel Free To Ask Us Anything
          </p>
        </div>

        <div className="serviceContact-left-desc">
          <p>Call Us For Query</p>
          <p>+447884537171</p>
          <p>+919725621316</p>
        </div>

        <div className="serviceContact-left-desc">
          <p>SEND US EMAIL</p>
          <p>Support@tkproductionfilm.com</p>
        </div>
      </div>

      <div className="serviceContact-right">
        <form className="serviceContact-form">
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required />
          </div>
          <button type="submit" className="submit-button">
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceContact;
