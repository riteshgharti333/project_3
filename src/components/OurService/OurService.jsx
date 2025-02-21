import { TiArrowRight } from "react-icons/ti";
import "./OurService.scss";

import camera from "../../assets/images/serviceicon/service1.svg";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import overlay1 from "../../assets/images/overlay1.png";
import { servicesCards } from "../../assets/data";

import {Link} from "react-router-dom"

const OurService = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: false,
      delay: 500,
    });

    AOS.refresh();
  }, []);

  return (
    <div className="ourService">
      <div className="ourService-top">
        <h1>Our Services</h1>
        <div className="ourService-top-right">
          <p>
            We offer a range of personalized services: from engagement shoots to
            wedding day photography, each session is tailored to capture your
            story with elegance. Our commitment is to turn your precious moments
            into everlasting memories.
          </p>

          <span className="read-more">
            Read More <TiArrowRight className="right-arrow" />
          </span>
        </div>
      </div>

      <div className="overlay">
        <img src={overlay1} alt="" />
      </div>

      <div className="ourService-bottom">
        <div className="ourService-top-cards">
          {servicesCards.map((item) => (
            <Link to={item.link} key={item.no}>
              <div className="ourService-top-card" data-aos="fade-right">
                <img src={item.img} alt="" />

                <div className="ourService-top-card-desc">
                  <p>{item.no}</p>
                  <h1>{item.title}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
