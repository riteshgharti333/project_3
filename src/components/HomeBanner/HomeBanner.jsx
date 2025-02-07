import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./HomeBanner.scss";

import m1 from "../../assets/images/m1.jpg";
import m2 from "../../assets/images/m2.jpg";
import m3 from "../../assets/images/m3.jpg";

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }} 
        pagination={{ clickable: true }}
        className="bannerSwiper"
      >
        <SwiperSlide>
          <img src={m1} alt="Banner 1" className="fade-img"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={m2} alt="Banner 2" className="fade-img"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={m3} alt="Banner 3" className="fade-img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
