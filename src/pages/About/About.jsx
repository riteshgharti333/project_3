import "./About.scss";

import m1 from "../../assets/images/m2.jpg";

import { MdVerified } from "react-icons/md";
import m2 from "../../assets/images/review.jpg";

import RingLine from "../../components/RingLine/RingLine"

const About = () => {
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

      <div className="about-banner2">
        <div className="about-banner2-container">
          <div className="about-banner2-left">
            <img src={m1} alt="" />
          </div>

          <div className="about-banner2-right">
            <p>
              The Mulberry Weddings, renowned for its exquisite wedding
              photography, embodies the fusion of artistry and emotion. Founded
              by a team of passionate photographers, we specialize in capturing
              the essence of love and celebration. Our philosophy is rooted in
              the belief that each couple’s story is extraordinary and deserves
              to be told with grace and elegance. We excel in creating a blend
              of candid moments and artistically composed portraits, ensuring
              every emotion and detail is captured. Our commitment to quality
              and attention to detail, combined with our warm, personalized
              approach, makes your photography experience truly memorable. Let
              us narrate your love story through our lenses, creating a legacy
              of timeless memories.
            </p>
          </div>
        </div>
      </div>

      <RingLine />

      <div className="about-content">
        <div className="about-content-left">
          <div className="about-content-left-top">
            <img src={m2} alt="" />

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
              <h1>100%</h1>
              <p>Customer Satisfaction</p>
            </div>

            <div className="about-content-left-content">
              <h1>350+</h1>
              <p>Photography Session</p>
            </div>
          </div>
        </div>

        <div className="about-content-right">
          <img src={m2} alt="" />
        </div>
      </div>

      <RingLine />


      <div className="about-content2">
        <div className="about-content2-img">
          <img src={m1} alt="" />
        </div>

        <div className="about-content2-desc">
          <h1>
            Why Choose <span className="line-break">Us</span>
          </h1>

          <div className="about-content2-points">
            <div className="about-content2-point">
              <MdVerified className="about-content2-points-icon" />

              <div className="about-content2-points-desc">
                <h2>Fully Equiped</h2>
                <p>
                  We are fully equiped with cameras, drones, lighting systems,
                  etc.
                </p>
              </div>
            </div>

            <div className="about-content2-point">
              <MdVerified className="about-content2-points-icon" />

              <div className="about-content2-points-desc">
                <h2>Fully Equiped</h2>
                <p>
                  We are fully equiped with cameras, drones, lighting systems,
                  etc.
                </p>
              </div>
            </div>

            <div className="about-content2-point">
              <MdVerified className="about-content2-points-icon" />

              <div className="about-content2-points-desc">
                <h2>Fully Equiped</h2>
                <p>
                  We are fully equiped with cameras, drones, lighting systems,
                  etc.
                </p>
              </div>
            </div>
            

            <div className="about-content2-point">
              <MdVerified className="about-content2-points-icon" />

              <div className="about-content2-points-desc">
                <h2>Fully Equiped</h2>
                <p>
                  We are fully equiped with cameras, drones, lighting systems,
                  etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
