import "./Navbar.scss";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";  // Import NavLink
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="navbar">
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
          activeClassName="active-link"  // Apply 'active-link' when this link is active
        >
          Home
        </NavLink>

        <NavLink
          to={"/about-us"}
          className="nav-link"
          activeClassName="active-link"  // Apply 'active-link' when this link is active
        >
          About Us
        </NavLink>
        
        {/* Uncomment and modify if needed */}
        {/* <Link to={"/contact-us"} className="nav-link">
          Contact Us
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
