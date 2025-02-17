import { useState } from "react";
import "./HomeBanner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { slides } from "../../assets/data";

const HomeBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="homeBanner">
      <Swiper
        modules={[EffectFade, Pagination, Navigation]}
        effect="fade"
        loop={true}
        speed={1200}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onTransitionEnd={(swiper) => {
          setActiveIndex(-1); // Reset active index
          setTimeout(() => setActiveIndex(swiper.realIndex), 10); // Set active index after a slight delay
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="slide">
            <div className="homeBanner-imgs">
              <img src={slide.image} alt="Banner" />
            </div>

            <div className={`homeBanner-desc ${index === activeIndex ? "animate" : ""}`}>
              <p>Wedding Agency</p>
              <h1 className={index === activeIndex ? "animate" : ""}>{slide.title}</h1>
              <h2 className={index === activeIndex ? "animate" : ""}>
                {slide.desc.split(". ").map((line, i) => (
                  <span key={i} className="desc-line">{line}.</span>
                ))}
              </h2>
              <div className={`homeBanner-btns ${index === activeIndex ? "animate" : ""}`}>
                <button>Book Kimono</button>
                <button>Explore Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev">Prev</div>
        <div className="swiper-button-next">Next</div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default HomeBanner;