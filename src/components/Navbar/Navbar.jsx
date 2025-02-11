import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom"; 
import logo from "../../assets/images/logo.png";
import { SlCalender } from "react-icons/sl";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [scroll, setScroll] = useState(false);

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

  const navbarClass = scroll ? "navbar scrolled" : "navbar";


  return (
    <div className={navbarClass}>
      <div className="nav-left">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </div>

      <div className="nav-right">
        <NavLink
          to={"/"}
          className="nav-link"
          activeClassName="active-link"
        >
          Home
        </NavLink>

        <NavLink
          to={"/about-us"}
          className="nav-link"
          activeClassName="active-link" 
        >
          About Us
        </NavLink>
        <Link to={""} className="nav-link">
          Portfolio
        </Link>

        <Link to={""} className="nav-link">
          Services
        </Link>


      </div>
    </div>
  );
};

export default Navbar;
