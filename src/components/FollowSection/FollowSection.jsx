import "./FollowSection.scss";

import m1 from "../../assets/images/insta.jpg";
import { FaInstagram } from "react-icons/fa";

const FollowSection = () => {
  return (
    <div className="followSection">
      <div className="followSection-imgs">
        <img src={m1} alt="" />
        <img src={m1} alt="" />
        <img src={m1} alt="" />
        <img src={m1} alt="" />
        <img src={m1} alt="" />
      </div>
      <a
        href="https://www.instagram.com/tk_production_film/?igsh=dmg3cm5tdXBxN3R1&utm_source=qr#"
        target="_blank"
      >
        <div className="followSection-desc">
          <FaInstagram className="followSection-icon" />
          <p>Follow on instagram</p>
        </div>
      </a>
    </div>
  );
};

export default FollowSection;
