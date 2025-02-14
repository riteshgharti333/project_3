import "./OurPorfolio.scss";

import card_1 from "../../assets/images/1.jpg";
import card_2 from "../../assets/images/2.jpg";

const OurPorfolio = () => {
  return (
    <div className="ourPorfolio">
      <div className="ourPorfolio-top">
        <h1>
          Our Portfolio
        </h1>
        <p>Kimono captures All of Your beautiful memories</p>
      </div>

      <div className="ourPorfolio-cards">
        <div className="ourPorfolio-card">
          <img src={card_1} alt="" />
          <h2>California Fall Collection 2023</h2>
          <p>By Jonathon Willson</p>
        </div>

        <div className="ourPorfolio-card">
          <img src={card_2} alt="" />
          <h2>California Fall Collection 2023</h2>
          <p>By Jonathon Willson</p>
        </div>

        <div className="ourPorfolio-card">
          <img src={card_2} alt="" />
          <h2>California Fall Collection 2023</h2>
          <p>By Jonathon Willson</p>
        </div>

        <div className="ourPorfolio-card">
          <img src={card_1} alt="" />
          <h2>California Fall Collection 2023</h2>
          <p>By Jonathon Willson</p>
        </div>


      </div>

      <button>Discover All Projects</button>

    </div>
  );
};

export default OurPorfolio;
