import "./Getintouch.scss";

const Getintouch = () => {
  return (
    <div className="getintouch">
      <div className="getintouch-content">
        <h1>Get In Touch</h1>
        <p>
          Contact us for a great photography session & beautiful captured
          moments
        </p>
        <form className="getintouch-form">
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

export default Getintouch;
