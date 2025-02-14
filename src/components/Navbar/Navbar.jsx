import "./Navbar.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import { IoIosArrowDown } from "react-icons/io";

import { services } from "../../assets/data";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const location = useLocation();

  const path = location.pathname;
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

  const navbarClass = `navbar ${path === "/contact-us" ? "static" : "fixed"} ${
    scroll ? "scrolled" : ""
  }`;

  return (
    <div className={navbarClass}>
      <div className="nav-left">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </div>

      <div className="mobile-menu">
        <MobileMenu />
      </div>

      <div className="nav-right">
        <NavLink to={"/"} className="nav-link" activeClassName="active-link">
          Home
        </NavLink>

        <NavLink
          to={"/portfolio"}
          className="nav-link"
          activeClassName="active-link"
        >
          Portfolio
        </NavLink>

        <div className="dropdown-menu">
          <div className="name-link">
            Services <IoIosArrowDown className="dropdown-icon" />
            <div className="services-dropdown">
              {services.map((service) => (
                <Link
                  to={service.link}
                  key={service.service_name}
                  className="dropdown-link"
                >
                  {service.service_name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <NavLink
          to={"/about-us"}
          className="nav-link"
          activeClassName="active-link"
        >
          About Us
        </NavLink>

        <NavLink
          to={"/contact-us"}
          className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link")}
        >
          Contact Us
        </NavLink>

       
   
      </div>
    </div>
  );
};

export default Navbar;
