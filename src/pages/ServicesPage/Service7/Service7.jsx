import "./Service7.scss";

import ServicePageSidebar from "../ServicePageSidebar/ServicePageSidebar";

import details from "../../../assets/images/details.jpg";

import { FaCheck } from "react-icons/fa";
import ServiceContact from "../../../components/ServiceContact/ServiceContact";
import { service1Data, service1Steps, service7Data, service7Steps } from "../../../assets/servicesData";

const Service7 = () => {
  return (
    <div className="service7">
      <div className="service7-top-banner">
        <div className="service7-banner">
          <div className="service7-banner-desc">
            <h1>Service Details</h1>
          </div>
        </div>
      </div>

      <div className="service7-container">
        <div className="service7-container-sidebar">
          <ServicePageSidebar />
        </div>

        <div className="service7-container-content">
          <div className="service7-container-content-top">
            <img src={details} alt="" />
            <h1>Graduation Photography by TK Production Films</h1>
            <p>
              Graduation is a milestone achievement, marking years of dedication
              and hard work. At TK Production Films, we specialize in capturing
              this proud moment with stunning photography and cinematic visuals.
              Whether it's an individual session, a group celebration, or a full
              graduation event, we ensure that your success story is beautifully
              documented.
            </p>
          </div>

          <div className="service7-services">
            <h1>Our Graduation Photography Services</h1>

            <ul>
              {service7Data.map((item) => (
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

          <div className="service7-steps">
            <h1>Our Service Steps</h1>

            <ul>
              {service7Steps.map((item) => (
                <li key={item.no}>
                  <p>{item.no}</p>
                  <p>
                    <span>{item.title} – </span> {item.desc}
                  </p>
                </li>
              ))}
            </ul>

            <p>
            At TK Production Films, we make your graduation memories last a lifetime. Let us celebrate your achievement with photography that reflects your success!
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

export default Service7;
