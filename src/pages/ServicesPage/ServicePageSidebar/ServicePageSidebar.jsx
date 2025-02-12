import "./ServicePageSidebar.scss";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { services } from "../../../assets/data";

const ServicePageSidebar = () => {
  const location = useLocation();

  return (
    <div className="servicePageSidebar">
      {services.map((service, index) => (
        <Link 
          to={service.link} 
          className={`servicePageSidebar-link ${
            location.pathname === service.link ? "active" : ""
          }`}
          key={index} // Move key to the outermost element
        >
          <div className="servicePageSidebar-item">
            <p>{service.service_name}</p>
            <MdKeyboardArrowRight className="servicePageSidebar-icon"/>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServicePageSidebar;
