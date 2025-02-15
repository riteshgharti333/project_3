import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi"; // Mobile menu icons
import { services } from "../../assets/data";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scroll ? "scrolled" : ""}`}>
      {/* Left: Logo */}
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img src={logo} alt="Company Logo" />
        </Link>
      </div>


      {/* Right: Navigation Links */}
      <ul className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active-link">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/portfolio" className="nav-link" activeClassName="active-link">
            Portfolio
          </NavLink>
        </li>

        {/* Services Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="nav-link">
            Services <IoIosArrowDown className="dropdown-icon" />
          </span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              {services.map((service) => (
                <li key={service.service_name}>
                  <Link to={service.link} className="dropdown-item">
                    {service.service_name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <NavLink to="/about-us" className="nav-link" activeClassName="active-link">
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact-us" className="nav-link" activeClassName="active-link">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
