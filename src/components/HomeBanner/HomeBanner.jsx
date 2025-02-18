import { useState, useEffect } from "react";
import "./HomeBanner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { slides } from "../../assets/data";
import { BsArrowUpRight } from "react-icons/bs";

const HomeBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [initialized, setInitialized] = useState(false);

  // Set the animation trigger after component mounts
  useEffect(() => {
    setInitialized(true);
  }, []);

  return (
    <div className="homeBanner">
      <Swiper
        modules={[EffectFade, Pagination, Navigation]}
        effect="fade"
        loop={true}
        speed={1200}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="slide">
            <div className="homeBanner-imgs">
              <img src={slide.image} alt="Banner" />
            </div>

            <div
              className={`homeBanner-desc ${
                initialized && index === activeIndex ? "animate" : ""
              }`}
            >
              <h6>Wedding Agency</h6>
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              <div className="homeBanner-btns">
                <button className="book-kimono">
                  Book Kimono
                <span className="arrows">
                    <BsArrowUpRight className="up-arrow first-arrow" />
                    <BsArrowUpRight className="up-arrow second-arrow" />
                  </span>
                </button>
                <button className="book-kimono">
                  Explore Now
                  <span className="corner top-left"></span>
                  <span className="corner top-right"></span>
                  <span className="corner bottom-left"></span>
                  <span className="corner bottom-right"></span>
                  <span className="arrows">
                    <BsArrowUpRight className="up-arrow first-arrow" />
                    <BsArrowUpRight className="up-arrow second-arrow" />
                  </span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev">Prev</div>
      <div className="swiper-button-next">Next</div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default HomeBanner;
