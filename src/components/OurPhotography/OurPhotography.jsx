import { useState } from "react";
import "./OurPhotography.scss";
import m1 from "../../assets/images/m1.jpg";
import m2 from "../../assets/images/m2.jpg";
import m3 from "../../assets/images/m3.jpg";

const ourPhotography = [
  { no: "01", title: "Photography Team of the Year 2023", img: m1 },
  { no: "02", title: "Best Wedding Photographer 2022", img: m2 },
  { no: "03", title: "Photography Team of the Year 2019", img: m3 },
];

const OurPhotography = () => {
  const [hoverIndex, setHoverIndex] = useState(1);

  return (
    <div className="ourPhotography">
      <div className="ourPhotography-top">
        <h1>Our Photography</h1>
        <p>
          We’re deeply passionate about catching your lovely memories in cameras
          and conveying your love for every moment of life as a whole.
        </p>
      </div>

      <div className="ourPhotography-lists">
        {ourPhotography.map((our, index) => (
          <div
            key={index}
            className={`ourPhotography-list ${
              hoverIndex === index ? "active" : ""
            }`} 
            onMouseEnter={() => setHoverIndex(index)} 
            onMouseLeave={() => setHoverIndex(1)}
          >
            <div className="ourPhotography-list-left">
              <h1>{our.no}</h1>
              <h1>{our.title}</h1>
            </div>
            <div className="ourPhotography-list-right">
              <img src={our.img} alt="" />
              <div className="ourPhotography-list-right-btn">
                <span>view</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPhotography;