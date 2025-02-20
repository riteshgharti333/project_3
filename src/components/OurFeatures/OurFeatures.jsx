import "./OurFeatures.scss";

import React, { useState, useEffect, useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { TiArrowRight } from "react-icons/ti";
import { gsap } from "gsap";

import { featuresData } from "../../assets/data";

const OurFeatures = () => {
  const [hoveredItem, setHoveredItem] = useState(featuresData[0]);
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    gsap.fromTo(
      img,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
      }
    );
  }, [hoveredItem]);

  return (
    <div className="ourFeatures">
      <div className="ourFeatures-mobile">
        <h1 className="ourFeatures-mobile-title">Why choose Us</h1>

        <div className="ourFeatures-mobile-cards">
          {featuresData.map((feature) => (
            <div className="ourFeatures-mobile-desc" key={feature.id}>
              <h1>{feature.title}</h1>
              <p>
                We use state-of-the-art equipment and techniques to ensure the
                highest quality photos. Your memories deserve nothing but the
                best.
              </p>
              <button>Read More</button>
            </div>
          ))}
        </div>
      </div>

      <div className="ourFeatures-left">
        <h1>Why choose Us</h1>

        <div className="ourFeatures-left-desc">
          <ul>
            {featuresData.map((item) => (
              <li key={item.id} onMouseEnter={() => setHoveredItem(item)}>
                <BsArrowUpRight className="up-arrow" />
                {item.title}

                <div className="ourFeatures-left-card" ref={cardRef}>
          <p>{hoveredItem.cardContent.description}</p>
          <span className="read-more">
            {hoveredItem.cardContent.readMore}{" "}
            <TiArrowRight className="right-arrow" />
          </span>
        </div>
              </li>
            ))}
          </ul>
        </div>

       
      </div>

      <div className="ourFeatures-right">
        <div className="ourFeatures-right-img">
          <img
            ref={imgRef}
            src={hoveredItem.image}
            alt="Feature"
            style={{ opacity: 0 }}
          />
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
