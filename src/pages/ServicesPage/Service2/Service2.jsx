import "./Service2.scss";
import m1 from "../../../assets/images/m1.jpg";
import ServicePageSidebar from "../ServicePageSidebar/ServicePageSidebar";

import details from "../../../assets/images/details.jpg";

import { FaCheck } from "react-icons/fa";
import ServiceContact from "../../../components/ServiceContact/ServiceContact";

const Service2 = () => {
  return (
    <div className="service2">
      <div className="service2-banner">
        <img src={m1} alt="" />

        <div className="service2-banner-desc">
          <h1>Service Details</h1>
        </div>

        <div className="service2-container">
          <div className="service2-container-sidebar">
            <ServicePageSidebar />
          </div>

          <div className="service2-container-content">
            <div className="service2-container-content-top">
              <img src={details} alt="" />
              <h1>Destination Weddings</h1>
              <p>
                The talent at kimono runs wide and deep. Across many markets,
                geographies & typologies, our team members are some of the
                finest professionals in the industry wide and deep. Across many
                markets, geographies and typologies, our team members are some
                of the finest.
              </p>
            </div>

            <div className="service2-steps">
              <h1>Service Steps</h1>
              <p>
                The talent at kimono runs wide and deep. Across many markets,
                geographies & typologies, our team members are some of the
                finest professionals in the industry wide and deep.
              </p>

              <ul>
                <li>
                  <FaCheck className="check-icon" /> The talent at Kimono runs
                  wide and deep. Across many markets, geographies
                </li>
                <li>
                  <FaCheck className="check-icon" /> Our team members are some
                  of the finest professionals in the industry
                </li>

                <li>
                  <FaCheck className="check-icon" />
                  Organized to deliver the most specialized service possible and
                  enriched by the
                </li>
              </ul>

              <p>
                The talent at kimono runs wide and deep. Across many markets,
                geographies & typologies, our team members are some of the
                finest professionals in the industry wide and deep. Across many
                markets, geographies and typologies, our team members are some
                of the finest.
              </p>

              <p>
                The talent at kimono runs wide and deep. Across many markets,
                geographies & typologies, our team members are some of the
                finest professionals in the industry wide and deep. Across many
                markets, geographies and typologies, our team members are some
                of the finest.The talent at kimora runs wide and deep. Across
                many markets, geographies & typologies, our team members are
                some of the finest professionals in the industry wide and deep.
                Across many markets, geographies and typologies, our team
                members are some of the finest.
              </p>
            </div>
          </div>
        </div>

        <div className="service-contact">
          <ServiceContact />
        </div>
      </div>
    </div>
  );
};

export default Service2;
