import "./AboutAgency.scss";

import bg7 from "../../assets/images/7.png";
import { BsArrowUpRight } from "react-icons/bs";

const AboutAgency = () => {
  return (
    <div className="aboutAgency">
      <div className="aboutAgency-top">
        <h1>About Agency</h1>

        <button className="book-kimono">
          Book Us Now
          <span className="corner top-left"></span>
          <span className="corner top-right"></span>
          <span className="corner bottom-left"></span>
          <span className="corner bottom-right"></span>
          <span className="arrows">
            <BsArrowUpRight className="up-arrow first-arrow" />
            <BsArrowUpRight className="up-arrow second-arrow" />
          </span>
        </button>
      </div>

      <div className="aboutAgency-bottom">
        <div className="aboutAgency-bottom-left">
          <img src={bg7} alt="" />

          <div className="aboutAgency-bottom-left-desc">
            Explore Us
            <span className="arrows">
              <BsArrowUpRight className="up-arrow first-arrow" />
              <BsArrowUpRight className="up-arrow second-arrow" />
            </span>
          </div>

          <div className="aboutAgency-bottom-left-btn">
            Explore Us
            <span className="arrows">
              <BsArrowUpRight className="up-arrow first-arrow" />
              <BsArrowUpRight className="up-arrow second-arrow" />
            </span>
          </div>
        </div>

        <div className="aboutAgency-bottom-right">
          <h2>About TK Productions</h2>
          <p className="about-desc1">
            Welcome to TK Production Films, where your most precious moments
            come to life with cinematic excellence. Founded by Taufeq Khan, a
            visionary filmmaker with over 16 years of experience, our team has
            mastered the art of storytelling through stunning wedding
            videography and photography.
          </p>

          <p className="about-desc2">
            Taufeq’s journey began in Diu, India, where he built an impressive
            portfolio of over 700+ weddings and 145+ pre-wedding shoots. His
            expertise and passion have now expanded internationally, with TK
            Production delivering its services throughout the UK and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAgency;
