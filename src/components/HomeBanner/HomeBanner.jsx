import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./HomeBanner.scss";

import m1 from "../../assets/images/m1.jpg";
import m2 from "../../assets/images/m2.jpg";
import m3 from "../../assets/images/m3.jpg";

import { TiArrowRight } from "react-icons/ti";

const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="bannerSwiper"
      >
        <SwiperSlide>
          <img src={m1} alt="Banner 1" className="fade-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={m2} alt="Banner 2" className="fade-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={m3} alt="Banner 3" className="fade-img" />
        </SwiperSlide>
      </Swiper>

      <div className="homeBanner-desc">
        <p>The Mulberry Weddings</p>
        <h1>
          Timeless Movies <span>for <span className="break-line">Lifetime</span> </span> <span>Events</span>
        </h1>

        <button>
          <TiArrowRight className="right-arrow" /> Explore Now
        </button>

        <div className="social-links">
          <span>Facebook</span>
          <span className="line">|</span>
          <span>Instagram</span>
          <span className="line">|</span>
          <span>Youtube</span>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
