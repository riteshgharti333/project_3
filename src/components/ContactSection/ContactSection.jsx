import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosGlobe } from "react-icons/io";
import { CiMobile2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import "./ContactSection.scss";

const ContactSection = () => {
  useEffect(() => {
    // Initialize AOS without the global offset
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false,
      delay: 500,
    });

    AOS.refresh(); // Refresh AOS to apply changes
  }, []);

  return (
    <div className="contactSection">
      <div
        className="contactSection-card"
        data-aos="fade-right"
        // data-aos-offset="1500" // Apply specific offset here
      >
        <div className="contactSection-left">
          <IoIosGlobe className="contactSection-icon" />
        </div>
        <div className="contactSection-right">
          <h1>Our Website</h1>
          <p>www.kimonophotography.com</p>
          <span>Visit Now</span>
        </div>
      </div>

      <div
        className="contactSection-card"
        data-aos="fade-right"
        // data-aos-offset="1500" // Specific offset for this card
      >
        <div className="contactSection-left">
          <CiMobile2 className="contactSection-icon" />
        </div>
        <div className="contactSection-right">
          <h1>Book Us</h1>
          <p>+123 455 987 994</p>
          <span>Call Now</span>
        </div>
      </div>

      <div
        className="contactSection-card"
        data-aos="fade-right"
        // data-aos-offset="1500" // Specific offset for this card
      >
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
