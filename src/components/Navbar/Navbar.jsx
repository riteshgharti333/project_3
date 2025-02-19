import "./Navbar.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { services } from "../../assets/data";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import MobileBurger from "../MobileBurger/MobileBurger";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const location = useLocation(); // Get the current path

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
    <nav
      className={`navbar ${
        scroll ? "scrolled" : ""
      }  ${homeClass} ${
        navbarVisible ? "navbar-visible" : "navbar-hidden"
      }`}
    >
      {/* Left: Logo */}
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src={logo} alt="Company Logo" />
        </Link>
      </div>

      <div className="mobile-Menu">
        <MobileBurger />
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
