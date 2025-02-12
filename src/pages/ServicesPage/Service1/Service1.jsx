import "./Service1.scss";
import m1 from "../../../assets/images/m1.jpg";
import ServicePageSidebar from "../ServicePageSidebar/ServicePageSidebar";

import details from "../../../assets/images/details.jpg";

import { FaCheck } from "react-icons/fa";
import ServiceContact from "../../../components/ServiceContact/ServiceContact";
// import ServiceSidebar from "../ServicePageSidebar/ServicePageSidebar";

const Service1 = () => {
  return (
    <div className="service1">
      <div className="service1-banner">
        <img src={m1} alt="" />

        <div className="service1-banner-desc">
          <h1>Service Details</h1>
        </div>
      </div>
      <div className="service1-container">
        <div className="service1-container-sidebar">
          <ServicePageSidebar />
        </div>

        <div className="service1-container-content">
          <div className="service1-container-content-top">
            <img src={details} alt="" />
            <h1>Pre-Wedding Shoots</h1>
            <p>
              The talent at kimono runs wide and deep. Across many markets,
              geographies & typologies, our team members are some of the finest
              professionals in the industry wide and deep. Across many markets,
              geographies and typologies, our team members are some of the
              finest.
            </p>
          </div>

          <div className="service1-steps">
            <h1>Service Steps</h1>
            <p>
              The talent at kimono runs wide and deep. Across many markets,
              geographies & typologies, our team members are some of the finest
              professionals in the industry wide and deep.
            </p>

            <ul>
              <li>
                <FaCheck className="check-icon" /> The talent at Kimono runs
                wide and deep. Across many markets, geographies
              </li>
              <li>
                <FaCheck className="check-icon" /> Our team members are some of
                the finest professionals in the industry
              </li>

              <li>
                <FaCheck className="check-icon" />
                Organized to deliver the most specialized service possible and
                enriched by the
              </li>
            </ul>

            <p>
              The talent at kimono runs wide and deep. Across many markets,
              geographies & typologies, our team members are some of the finest
              professionals in the industry wide and deep. Across many markets,
              geographies and typologies, our team members are some of the
              finest.
            </p>

            <p>
              The talent at kimono runs wide and deep. Across many markets,
              geographies & typologies, our team members are some of the finest
              professionals in the industry wide and deep. Across many markets,
              geographies and typologies, our team members are some of the
              finest.The talent at kimora runs wide and deep. Across many
              markets, geographies & typologies, our team members are some of
              the finest professionals in the industry wide and deep. Across
              many markets, geographies and typologies, our team members are
              some of the finest.
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

export default Service1;
