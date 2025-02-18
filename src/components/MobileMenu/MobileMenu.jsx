import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./MobileMenu.scss";
import { services } from "../../assets/data";

import { IoHomeOutline } from "react-icons/io5";

import { FaRegImage } from "react-icons/fa";

import { FaRegUser } from "react-icons/fa";

import { IoMdPhonePortrait } from "react-icons/io";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const homeClass = location.pathname === "/" ? "mobile-class" : "";


  return (
    <nav className={`mobileMenu ${scroll ? "scrolled" : ""} ${homeClass}`}>
      {/* Burger Button */}
      <button
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <IoHomeOutline className="nav-icon"/>
          <Link to="/">Home</Link>
        </li>
        <li>
        <FaRegImage className="nav-icon"/>

          <Link to="/portfolio">Portfolio</Link>
        </li>

        <li>
        <FaRegUser className="nav-icon"/>
            
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
        <IoMdPhonePortrait className="nav-icon"/>

          <Link to="/contact-us">Contact Us</Link>
        </li>

        <li>
          <Link to="/">Services : </Link>
        </li>

        {services.map((service) => (
          <Link
            to={`${service.link}`}
            className="service-link"
            key={service.service_name}
          >
            {service.service_name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
