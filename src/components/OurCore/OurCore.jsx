import "./OurCore.scss";
import slider_img from "../../assets/images/3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Importing icons
import "swiper/css";
import "swiper/css/navigation";

import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const teamMembers = [
  { name: "Nelson Jameson", role: "Photographer", img: slider_img },
  { name: "Emily Carter", role: "Videographer", img: slider_img },
  { name: "David Smith", role: "Editor", img: slider_img },
  { name: "Sophia Brown", role: "Director", img: slider_img },
  { name: "Michael Lee", role: "Designer", img: slider_img },
];

const OurCore = () => {
  return (
    <div className="ourCore">
      <div className="ourCore-top">
        <h1>Our Team</h1>
        <p>
          We’re deeply passionate about capturing your lovely memories and
          conveying your love for every moment of life.
        </p>
      </div>

      <Swiper
        slidesPerView={3.5}
        spaceBetween={20}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        modules={[Navigation, Autoplay]}
        className="ourCore-slider"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2.5, spaceBetween: 15 }, // Show half of next slide
          1024: { slidesPerView: 3.5, spaceBetween: 20 }, // Show half of 4th slide
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="ourCore-slider-card">
            <img src={member.img} alt={member.name} />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons with React Icons */}
      <div className="custom-prev ">
        <BsArrowLeft className="core-icon" />
      </div>
      <div className="custom-next">
        <BsArrowRight className="core-icon" />
      </div>
    </div>
  );
};

export default OurCore;
