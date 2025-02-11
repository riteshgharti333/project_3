import "./AboutAgency.scss";

import m1 from "../../assets/images/m1.jpg";

const AboutAgency = () => {
  return (
    <div className="aboutAgency">
      <div className="aboutAgency-top">
        <h1>
          About <span className="line-break">Agency</span>
        </h1>

        <button>Book us now</button>
      </div>

      <div className="aboutAgency-bottom">
        <div className="aboutAgency-bottom-left">
          <img src={m1} alt="" />

          <div className="aboutAgency-bottom-left-desc">
            <span>Explore Us</span>
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
