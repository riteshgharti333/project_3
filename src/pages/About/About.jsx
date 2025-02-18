import "./About.scss";
import { FaPlus, FaMinus } from "react-icons/fa6";

import { useState, useEffect, useRef } from "react";

import bg17 from "../../assets/images/bg17.jpg";

import bg18 from "../../assets/images/bg18.jpg";
import bg19 from "../../assets/images/bg19.jpg";
import bg20 from "../../assets/images/bg20.jpg";

import bg23 from "../../assets/images/bg23.jpg";

import CountUp from "react-countup";

import OurCore from "../../components/OurCore/OurCore";

import ClientReview from "../../components/ClientReview/ClientReview";

import OurPhotography from "../../components/OurPhotography/OurPhotography";

import AOS from "aos";
import "aos/dist/aos.css";

import overlay3 from "../../assets/images/overlay3.png";

import { TbPlayerPlayFilled } from "react-icons/tb";

const lists = [
  {
    title: "Limono Mission",
    desc: "Our business consulting programs help break the performance of your business down into customers and product groups so you know exactly which customers or product groups are working.",
  },
  {
    title: "Our Strategy",
    desc: "We provide strategic insights that empower businesses to make data-driven decisions and optimize their performance in a competitive market.",
  },
  {
    title: "Customer-Centric Approach",
    desc: "Our approach ensures that our clients receive personalized solutions that cater to their unique business needs.",
  },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleList = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [startCount, setStartCount] = useState(false);
  const aboutContentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.7 }
    );

    if (aboutContentRef.current) {
      observer.observe(aboutContentRef.current);
    }

    return () => {
      if (aboutContentRef.current) {
        observer.unobserve(aboutContentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: true,
    });
  }, []);

  return (
    <div className="about">
      <div className="top-banner">
        <div className="about-banner">
          <div className="about-banner-desc">
            <h1>About</h1>
          </div>
        </div>
      </div>

      <div className="about-big-img" data-aos="fade-up">
        <img src={bg17} alt="About Us" />
      </div>

      <div className="about-overlay">
        <img src={overlay3} alt="" />
      </div>

      <div className="about-content" ref={aboutContentRef}>
        <div className="about-content-left">
          <div className="about-content-left-top">
            <img
              src={bg18}
              alt=""
              data-aos="fade-up"
              data-aos-offset="700"
            />

            <div className="about-content-left-top-right">
              <h1>
                Our <span className="line-break">Vision</span>
              </h1>
              <p>
                Our vision is to create a visual narrative that captures the
                essence of love and celebration. We strive to tell your unique
                story through our lens, creating a legacy of timeless memories.
                Our vision is to create a visual narrative that captures the
                essence of love and celebration. We strive to tell your unique
                story through our lens, creating a legacy of timeless memories.
              </p>
            </div>
          </div>

          <div className="about-content-left-bottom">
            <div className="about-content-left-content">
              <div className="about-content-left-content-top">
                <h1>
                  <CountUp
                    start={startCount ? 0 : null}
                    end={100}
                    duration={2.5}
                  />
                  %
                </h1>
                <p>Customer Satisfaction</p>
              </div>

              <hr className="about-content-left-bottom-line" />
            </div>

            <div className="about-content-left-content">
              <div className="about-content-left-content-top">
                <h1>
                  <CountUp
                    start={startCount ? 0 : null}
                    end={350}
                    duration={2.5}
                  />
                  +
                </h1>

                <p>Photography Session</p>
              </div>

              <hr className="about-content-left-bottom-line" />
            </div>
          </div>
        </div>

        <div className="about-content-right">
          <img
            src={bg19}
            alt=""
            data-aos="fade-up"
            data-aos-offset="700"
          />
        </div>
      </div>

      <div className="about-content2">
        <div className="about-content2-img">
          <img src={bg20} alt="Why Choose Us" />
        </div>

        <div className="about-content2-desc">
          <h1>
            Why Choose <span className="line-break">Us</span>
          </h1>

          <div className="about-content2-lists">
            {lists.map((list, index) => (
              <div key={index} className="about-content2-list">
                <div
                  className={`about-content2-list-top ${
                    openIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleList(index)}
                >
                  <h3>{list.title}</h3>
                  {openIndex === index ? (
                    <FaMinus className="about-content2-icon" />
                  ) : (
                    <FaPlus className="about-content2-icon" />
                  )}
                </div>
                <p
                  className={`about-content2-desc-text ${
                    openIndex === index ? "open" : ""
                  }`}
                >
                  {list.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="experience">
            <div className="experience-circle">
              <h4>15+</h4>
            </div>
            <h2>Years Experience</h2>
          </div>
        </div>
      </div>

      <div class="about-content3">
        <div class="scrolling-container">
          <div class="scrolling-content">
            <h1>Photography</h1>
            <h1>Studio</h1>
            <h1>Agency</h1>
          </div>
          <div class="scrolling-content">
            <h1>Photography</h1>
            <h1>Studio</h1>
            <h1>Agency</h1>
          </div>
        </div>
      </div>

      <div className="about-content4">
        <img src={bg23} alt="" />

        <div className="player">
          <TbPlayerPlayFilled className="player-icon" />
        </div>
      </div>

      <div className="core-option">
        <OurCore />
      </div>

      <ClientReview />

      <OurPhotography />
    </div>
  );
};

export default About;
