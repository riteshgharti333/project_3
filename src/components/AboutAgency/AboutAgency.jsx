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
          <h2>About Kimono</h2>
          <p className="about-desc1">
            Kimono photography Agency runs wide and deep. Across many markets,
            geographies & typologies, our team members
          </p>

          <p className="about-desc2">
            The talent at kimono runs wide range of services. Across many
            markets, geographies & typologies, our team members are some of the
            finest people of photographers in the industry wide and deep. From
            Across many markets, geographies & boundaries. Hire Kimono in your
            event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAgency;
