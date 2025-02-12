import { TiArrowRight } from "react-icons/ti";
import "./OurService.scss";

import camera from "../../assets/images/camera.svg";

const OurService = () => {
  return (
    <div className="ourService">
      <div className="ourService-top">
        <h1>
          Our<span className="line-break">Services</span>
        </h1>
        <div className="ourService-top-right">
          <p>
            We offer a range of personalized services: from engagement shoots to
            wedding day photography, each session is tailored to capture your
            story with elegance. Our commitment is to turn your precious moments
            into everlasting memories.
          </p>

          <span className="read-more">
            Read More <TiArrowRight className="right-arrow" />
          </span>
        </div>
      </div>

      <div className="ourService-bottom">
        <div className="ourService-top-cards">
          <div className="ourService-top-card">
            <img src={camera} alt="" />

            <div className="ourService-top-card-desc">
              <p>01</p>
              <h1>
                <span className="line-break">Wedding </span>Photography
              </h1>
            </div>
          </div>

          <div className="ourService-top-card">
            <img src={camera} alt="" />

            <div className="ourService-top-card-desc">
              <p>01</p>
              <h1>
                <span className="line-break">Wedding </span>Photography
              </h1>
            </div>
          </div>

          <div className="ourService-top-card">
            <img src={camera} alt="" />

            <div className="ourService-top-card-desc">
              <p>01</p>
              <h1>
                <span className="line-break">Wedding </span>Photography
              </h1>
            </div>
          </div>

          <div className="ourService-top-card">
            <img src={camera} alt="" />

            <div className="ourService-top-card-desc">
              <p>01</p>
              <h1>
                <span className="line-break">Wedding </span>Photography
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
