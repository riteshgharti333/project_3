import "./Navbar.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi"; // Mobile menu icons
import { services } from "../../assets/data";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation(); // Get the current path

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactClass = location.pathname === "/contact-us" ? "contact-class" : "";

  const homeClass = location.pathname === "/" ? "home-class" : "";


  return (
    <nav className={`navbar ${scroll ? "scrolled" : ""} ${contactClass} ${homeClass}`}>
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
    </nav>
  );
};

export default Navbar;
