import "./About.scss";
import m1 from "../../assets/images/m2.jpg";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

import OurCore from "../../components/OurCore/OurCore";

import ClientReview from "../../components/ClientReview/ClientReview";

import review_img from "../../assets/images/review.jpg";

import OurPhotography from "../../components/OurPhotography/OurPhotography"

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

  return (
    <div className="about">
      <div className="about-banner">
        <div className="about-banner-desc">
          <h1>About</h1>
          <h1>
            K <span className="line-break">Production</span> Film
          </h1>
        </div>
      </div>

      <div className="about-big-img">
        <img src={m1} alt="About Us" />
      </div>

      <div className="about-content">
        <div className="about-content-left">
          <div className="about-content-left-top">
            <img src={review_img} alt="" />

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



              <h1>100%</h1>
              <p>Customer Satisfaction</p>
            </div>

              <hr className="about-content-left-bottom-line" />
            </div>

            <div className="about-content-left-content">
              <div className="about-content-left-content-top">
                <h1>350+</h1>

                <p>Photography Session</p>
              </div>

              <hr className="about-content-left-bottom-line" />
            </div>
          </div>
        </div>

        <div className="about-content-right">
          <img src={review_img} alt="" />
        </div>
      </div>

      <div className="about-content2">
        <div className="about-content2-img">
          <img src={m1} alt="Why Choose Us" />
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

      <OurCore />

      <ClientReview />

      <OurPhotography />
    </div>

  );
};

export default About;
