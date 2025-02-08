import "./HomeSection2.scss";

import m1 from "../../assets/images/m1.jpg";

const HomeSection2 = () => {
  return (
    <div className="homeSection2">
      <div className="homeSection2-left">
        <img src={m1} alt="" />
        <div className="homeSection2-left-desc">
          <p>Timeless Movies for</p>
          <p>Lifetime Events</p>
        </div>
      </div>

      <div className="homeSection2-right">
        <img src={m1} alt="" />
      </div>
    </div>
  );
};

export default HomeSection2;
