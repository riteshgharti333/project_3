import "./Service3.scss";

import ServicePageSidebar from "../ServicePageSidebar/ServicePageSidebar";

import details from "../../../assets/images/details.jpg";

import { FaCheck } from "react-icons/fa";
import ServiceContact from "../../../components/ServiceContact/ServiceContact";
import {
  service1Data,
  service1Steps,
  service3Data,
  service3Steps,
} from "../../../assets/servicesData";

const Service3 = () => {
  return (
    <div className="service3">
      <div className="service3-top-banner">
        <div className="service3-banner">
          <div className="service3-banner-desc">
            <h1>Service Details</h1>
          </div>
        </div>
      </div>

      <div className="service3-container">
        <div className="service3-container-sidebar">
          <ServicePageSidebar />
        </div>

        <div className="service3-container-content">
          <div className="service3-container-content-top">
            <img src={details} alt="" />
            <h1>Birthday Photography & Films by TK Production Films</h1>
            <p>
              Celebrate life’s special milestones with TK Production Films!
              Whether it's a grand birthday celebration or an intimate
              gathering, we capture every joyful moment with creativity and
              precision. Our expert team ensures that your birthday memories are
              beautifully preserved through high-quality photography and
              cinematic films, making them unforgettable.
            </p>
          </div>

          <div className="service3-services">
            <h1>Our Birthday Services</h1>

            <ul>
              {service3Data.map((item) => (
                <li key={item.title}>
                  <FaCheck className="check-icon" />
                  <div className="services-desc">
                    <p>{item.title} :&nbsp;</p>
                    <p>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="service3-steps">
            <h1>Our Service Steps</h1>

            <ul>
              {service3Steps.map((item) => (
                <li>
                  <p>{item.no}</p>
                  <p>
                    <span>{item.title} – </span> {item.desc}
                  </p>
                </li>
              ))}
            </ul>

            <p>
              At TK Production Films, we turn your birthday moments into
              timeless memories. Let us capture your special day with elegance
              and creativity!
            </p>
          </div>
        </div>
      </div>

      <div className="service-contact">
        <ServiceContact />
      </div>
    </div>
  );
};

export default Service3;
