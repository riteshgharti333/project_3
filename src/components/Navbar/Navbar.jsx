import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom"; 
import logo from "../../assets/images/logo.png";
import { SlCalender } from "react-icons/sl";

const Navbar = () => {
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
          activeClassName="active-link"
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
        <Link to={"/contact-us"} className="nav-link">
          Portfolio
        </Link>

        <Link to={"/contact-us"} className="nav-link">
          Services
        </Link>

    
        <Link to={"/contact-us"} className="contact-button">
        <SlCalender className="calender" />  Contact
        </Link>

      </div>
    </div>
  );
};

export default Navbar;
