import "./Service3.scss";

import ServicePageSidebar from "../ServicePageSidebar/ServicePageSidebar";

import details from "../../../assets/images/details.jpg";

import { FaCheck } from "react-icons/fa";
import ServiceContact from "../../../components/ServiceContact/ServiceContact";
import {
  service2Data,
  service2Steps,
} from "../../../assets/servicesData";

import s3 from "../../../assets/images/serviceimgs/s3.jpeg";
import { useRef } from "react";

const Service3 = () => {

  
    const contentRef = useRef(null);
  
    const scrollToContent = () => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

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
          <ServicePageSidebar  onSidebarClick={scrollToContent}/>
        </div>
        <div className="service3-container-content" ref={contentRef}>
          <div className="service3-container-content-top">
            <img src={s3} alt="" />
            <h1>Pre Wedding Films by TK Production Film</h1>
            <p>
              A pre-wedding shoot is the perfect way to celebrate your love
              story before the big day. At TK Production Film, we specialize in
              capturing the chemistry, emotions, and unique connection between
              couples through breathtaking pre-wedding photography and films.
              Whether in iconic cityscapes, lush landscapes, or dreamy
              international locations like Lisbon, Portugal, our expert team
              ensures your love story is beautifully told.
            </p>
          </div>

          <div className="service3-services">
            <h1>Our Pre-Wedding Services</h1>

            <ul>
              {service2Data.map((item) => (
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
              {service2Steps.map((item) => (
                <li key={item.no}>
                  <p>{item.no}</p>
                  <p>
                    <span>{item.title} – </span> {item.desc}
                  </p>
                </li>
              ))}
            </ul>

            <p>
              With creativity, passion, and technical expertise, TK Production
              Film makes your pre-wedding moments truly magical. Let us turn
              your love story into a cinematic masterpiece!
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
