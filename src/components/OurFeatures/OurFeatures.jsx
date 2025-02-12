import "./OurFeatures.scss";

import React, { useState, useEffect, useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { TiArrowRight } from "react-icons/ti";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import m1 from "../../assets/images/m1.jpg";
import m2 from "../../assets/images/m2.jpg";
import m3 from "../../assets/images/m3.jpg";

gsap.registerPlugin(Flip);

const featuresData = [
  {
    id: 1,
    title: "20+ Years Experience",
    image: m1,
    cardContent: {
      description:
        "Kimono has 20+ years of experience in photography & videography, which makes us pioneers in this profession. We are having so much fun doing this.",
      readMore: "Read More",
    },
  },
  {
    id: 2,
    title: "Creative Shoot Ideas",
    image: m2,
    cardContent: {
      description:
        "We bring unique and creative ideas to every shoot, ensuring your photos stand out. Our team is always innovating to capture the perfect moment.",
      readMore: "Read More",
    },
  },
  {
    id: 3,
    title: "Globally Awarded",
    image: m3,
    cardContent: {
      description:
        "Our work has been recognized globally with numerous awards. We take pride in delivering excellence in every project we undertake.",
      readMore: "Read More",
    },
  },
  {
    id: 4,
    title: "Best Quality Photos",
    image: m3,
    cardContent: {
      description:
        "We use state-of-the-art equipment and techniques to ensure the highest quality photos. Your memories deserve nothing but the best.",
      readMore: "Read More",
    },
  },
];

const OurFeatures = () => {
  const [hoveredItem, setHoveredItem] = useState(featuresData[0]);
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const flipState = Flip.getState(card);
    Flip.from(flipState, {
      duration: 0.8,
      ease: "power2.out",
      scale: true,
      absolute: true,
    });

    const img = imgRef.current;
    gsap.fromTo(
      img,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      }
    );
  }, [hoveredItem]);

  return (
    <div className="ourFeatures">
      <div className="ourFeatures-mobile">
        <h1 className="ourFeatures-mobile-title">
          Why choose <span className="line-break">Us</span>
        </h1>

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
        <h1>
          Why choose <span className="line-break">Us</span>
        </h1>

        <div className="ourFeatures-left-desc">
          <ul>
            {featuresData.map((item) => (
              <li key={item.id} onMouseEnter={() => setHoveredItem(item)}>
                <BsArrowUpRight className="up-arrow" />
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="ourFeatures-left-card" ref={cardRef}>
          <p>{hoveredItem.cardContent.description}</p>
          <span className="read-more">
            {hoveredItem.cardContent.readMore}{" "}
            <TiArrowRight className="right-arrow" />
          </span>
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
