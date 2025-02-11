import './OurCore.scss';
import slider_img from "../../assets/images/3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
        <h1>Our <span className="line-break">Team</span></h1>
        <p>We’re deeply passionate about capturing your lovely memories and conveying your love for every moment of life.</p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        speed={800} // Adjust this value for smoother transitions
        modules={[Navigation, Autoplay]}
        className="ourCore-slider"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="ourCore-slider-card">
            <img src={member.img} alt={member.name} />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurCore;