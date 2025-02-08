import "./HomeSection3.scss";


import m1 from "../../assets/images/m1.jpg";
import m2 from "../../assets/images/m2.jpg";

const HomeSection3 = () => {
  return (
    <div className="homeSection3">
      <div className="homeSection3-left">
        <h1>
          Capturing Love, <span className="break-line">Crafting Memories</span>
        </h1>

        <p>
          Immerse yourself in the artistry of The Mulberry Weddings, where every
          click resonates with the heartbeat of your love story. Specializing in
          weaving the tender moments of your wedding day into a tapestry of
          timeless photographs, we promise not just images, but echoes of joy
          and love.
        </p>

        <div className="percent-desc">
          <div className="percent-desc-container">
            <div className="percent-desc-top">
              <h4>Personalized Support</h4>
              <span>100%</span>
            </div>
            <hr className="percent-bar"/>
          </div>

          <div className="percent-desc-container">
            <div className="percent-desc-top">
              <h4>Personalized Support</h4>
              <span>100%</span>
            </div>
            <hr className="percent-bar"/>
          </div>


          <div className="percent-desc-container">
            <div className="percent-desc-top">
              <h4>Personalized Support</h4>
              <span>100%</span>
            </div>
            <hr className="percent-bar"/>
          </div>


          <div className="percent-desc-container">
            <div className="percent-desc-top">
              <h4>Personalized Support</h4>
              <span>100%</span>
            </div>
            <hr className="percent-bar"/>
          </div>
        </div>
      </div>

      <div className="homeSection3-right">
            <img src={m1} alt="Wedding 1" />
          </div>
        </div>
  );
};

export default HomeSection3;
