import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosGlobe } from "react-icons/io";
import { CiMobile2 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import "./ContactSection.scss";

import { MdMailOutline } from "react-icons/md";

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
        // data-aos-offset="1400"
      >
        <div className="contactSection-left">
          <MdMailOutline className="contactSection-icon" />
        </div>
        <div className="contactSection-right">
          <h1>Our Mail</h1>
          <p>Support@tkproductionfilm.com</p>
          <a href="mailto:Support@tkproductionfilm.com" className="mail-link">
            <span>Mail Us</span>
          </a>
        </div>
      </div>

      <div
        className="contactSection-card"
        data-aos="fade-right"
        // data-aos-offset="1400"
      >
        <div className="contactSection-left">
          <CiMobile2 className="contactSection-icon" />
        </div>
        <div className="contactSection-right">
          <h1>Book Us</h1>
          <p>+447884537171</p>
          <p>+919725621316</p>
          <span>Call Now</span>
        </div>
      </div>

      <div
        className="contactSection-card"
        data-aos="fade-right"
        // data-aos-offset="1400"
      >
        <div className="contactSection-left">
          <IoLocationOutline className="contactSection-icon" />
        </div>
        <div className="contactSection-right address-tk">
          <h1>Address</h1>
          <div className="address">
            <p>Registred Office in London : </p>
            <span>506a Ladymargret Road Southall ub1 2np</span>
          </div>

          <div className="address">
            <p>India Office :</p>
            <div className="sm-address">
              <span>Main bazar Near.sbi bank Diu (362520)</span>
              <span>
                Nathani complex blue stars building 6th floor 604 near millenium
                hospital kausa mumbra thane 400612
              </span>

              <span className="view-map">View Map</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
