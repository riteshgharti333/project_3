import "./ContactSection.scss";

import { IoIosGlobe } from "react-icons/io";
import { CiMobile2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const ContactSection = () => {
  return (
    <div className="contactSection">
      <div className="contactSection-card">
        <div className="contactSection-left">
          <IoIosGlobe className="contactSection-icon" />
        </div>
        <div className="contactSection-right">
          <h1>Our Website</h1>
          <p>www.kimonophotography.com</p>
          <span>Visit Now</span>
        </div>
      </div>

      <div className="contactSection-card">
        <div className="contactSection-left">
          <CiMobile2 className="contactSection-icon" />
        </div>
        <div className="contactSection-right">
          <h1>Book Us</h1>
          <p>+123 455 987 994</p>
          <span>Call Now</span>
        </div>
      </div>

      <div className="contactSection-card">
        <div className="contactSection-left">
          <IoLocationOutline className="contactSection-icon" />
        </div>
        <div className="contactSection-right">
          <h1>Studio Address</h1>
          <p>13 Madison Street, NY, USA</p>
          <span>View Map</span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
