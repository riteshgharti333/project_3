import { Link } from "react-router-dom";
import "./Footer.scss";

import logo from "../../assets/images/logo2.png";
import { BsArrowUpRight } from "react-icons/bs";
import { footerLinks, services, servicesCards } from "../../assets/data";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-inner">
            <div className="row">
              <div className="row1">
                <div className="footer-widget">
                  <ul>
                    {footerLinks.map((item) => (
                      <li key={item.link}>
                        <Link to={item.link}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="row2">
                <div className="row2-widget">
                  <div className="footer-logo">
                    <img src={logo} alt="" />
                  </div>
                  <h6 className="row2-title">
                    Sign up for all the latests
                    <br />
                    news and offers
                  </h6>
                  <div className="row2-input">
                    <form
                      action="
                    "
                    >
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        required
                      />
                      <button type="submit" className="book-kimono">
                        Subscribe
                        <span className="arrows">
                          <BsArrowUpRight className="up-arrow first-arrow" />
                          <BsArrowUpRight className="up-arrow second-arrow" />
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="row3">
                <div className="footer-widget">
                  <ul>
                    {services.map((item) => (
                      <li key={item.no}>
                        <Link to={item.link}>{item.service_name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
            <p>kimono photography, All Rights Reserved</p>

            <div className="footer-icons">
              <FaFacebook className="footer-icon" />
              <FaInstagram className="footer-icon" />
              <FaLinkedin className="footer-icon" />
              <FaYoutube className="footer-icon" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
