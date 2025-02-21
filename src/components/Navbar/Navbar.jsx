import "./Navbar.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { instaGallery, services } from "../../assets/data";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import MobileBurger from "../MobileBurger/MobileBurger";

import { RxCross1 } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";

import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { SlScreenSmartphone } from "react-icons/sl";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const location = useLocation();
  const [openFollowCard, setOpenFollowCard] = useState(false);

  const openSocialCard = () => {
    setOpenFollowCard((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const midPoint = window.innerHeight / 1; // Mid-point of the viewport

      if (currentScrollY > midPoint) {
        // Scrolling down past mid-point
        if (currentScrollY > lastScrollY) {
          setNavbarVisible(false); // Hide navbar
        } else {
          setNavbarVisible(true); // Show navbar when scrolling up
        }
      } else {
        setNavbarVisible(true); // Always show navbar above mid-point
      }

      setLastScrollY(currentScrollY); // Update last scroll position
      setScroll(currentScrollY > 50); // For scrolled class (optional)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const homeClass = location.pathname === "/" ? "home-class" : "";

  return (
    <>
      <nav
        className={`navbar ${scroll ? "scrolled" : ""}  ${homeClass} ${
          navbarVisible ? "navbar-visible" : "navbar-hidden"
        }`}
      >
        {/* Left: Logo */}
        <div className="navbar-left">
          <Link to="/" className="logo">
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>

        {/* Right: Navigation Links */}
        <ul className={`navbar-right ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active-link" : ""
              }`}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/portfolio"
              className={`nav-link ${
                location.pathname === "/portfolio" ? "active-link" : ""
              }`}
            >
              Portfolio
            </NavLink>
          </li>

          {/* Services Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="name-link">
              Services <IoIosArrowDown className="dropdown-icon" />
            </span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                {services.map((service) => (
                  <li key={service.service_name}>
                    <Link
                      to={service.link}
                      className={`dropdown-item ${
                        location.pathname === service.link ? "active-link" : ""
                      }`}
                    >
                      {service.service_name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/about-us"
              className={`nav-link ${
                location.pathname === "/about-us" ? "active-link" : ""
              }`}
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact-us"
              className={`nav-link ${
                location.pathname === "/contact-us" ? "active-link" : ""
              }`}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        <div className="mobile-nav-menu">
          <div className="social-burger">
            <div className="nav-social" onClick={openSocialCard}>
              <div className="nav-social-menu">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <div className="mobile-burger">
            <MobileBurger />
          </div>
        </div>
      </nav>

      {openFollowCard && (
        <div
          className={`nav-social-card ${
            openFollowCard ? "active" : "hidden"
          } show`}
        >
          <button onClick={openSocialCard}>
            Close <RxCross1 className="cross-icon" />
          </button>

          <div className="nav-social-logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav-social-desc">
            <h6>// Instagram</h6>
            <div className="inside-insta-logo">
              <FaInstagram className="insta-icon" />
              Instagram
            </div>

            <div className="insta-gallery">
              {instaGallery.map((item) => (
                <div className="gallery-img">
                  <img src={item.img} />
                </div>
              ))}
            </div>

            <div className="nav-social-media">
              <div className="nav-social-media-item">
                <CiMail className="social-media-icon" />
                <span>kimocare@gmail.com</span>
              </div>

              <div className="nav-social-media-item">
                <CiLocationOn className="social-media-icon" />
                <span>28 Street, New York, USA</span>
              </div>

              <div className="nav-social-media-item">
                <SlScreenSmartphone className="social-media-icon" />
                <span>(+987) 654 321 228 11</span>
              </div>
            </div>

            <div className="nav-social-follow">
              <h6>// Follow Us</h6>
              <div className="nav-social-follow-icons">
                <FaFacebook className="nav-social-follow-icon" />

                <FaInstagram className="nav-social-follow-icon" />

                <FaLinkedin className="nav-social-follow-icon" />
                <FaYoutube className="nav-social-follow-icon" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
