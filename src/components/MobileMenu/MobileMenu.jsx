import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./MobileMenu.scss";
import { services } from "../../assets/data";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="mobileMenu">

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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>

        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>

        <li><Link to="/">Services : </Link></li>

       {services.map((service) => (
        <Link to={`${service.link}`} className="service-link" key={service.service_name}>
           {service.service_name}
        </Link>
       ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
