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

      <div className="followSection-desc">
        <FaInstagram className="followSection-icon" />
        <p>Follow on instagram</p>
      </div>
    </div>
  );
};

export default FollowSection;
