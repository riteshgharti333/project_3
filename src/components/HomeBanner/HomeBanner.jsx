import "./HomeBanner.scss";

import { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner_img1 from "../../assets/images/7.jpg";
import banner_img2 from "../../assets/images/8.jpg";
import banner_img3 from "../../assets/images/9.jpg";


const slides = [
  {
    id: 1,
    image: banner_img1,
    title: "Make Portfolio With Kimono Studio",
    desc: "We are dedicated to immortalizing the enchanting moments of your special day. With a blend of classic elegance and modern flair.",
  },
  {
    id: 2,
    image: banner_img2,
    title: "Your Dream Wedding Agency",
    desc: "I have been building blogs and websites since 2002. In that time I have launched several of my own blogs, and helped hundreds of others do the same.",
  },
  {
    id: 3,
    image: banner_img3,
    title: "Creating Beautiful Memories",
    desc: "I know that starting a blog can seem overwhelming and intimidating. This free guide is all about blogging for beginners, and will teach you how to become a blogger.",
  },
];

const HomeBanner = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate title (h1) from right
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: "100%" }, // Start from right
      { opacity: 1, x: 0, duration: 1, ease: "power1.out" }
    );

    // Animate description (h2) lines with stagger effect
    const descLines = descRef.current.querySelectorAll(".desc-line");
    gsap.fromTo(
      descLines,
      { opacity: 0, x: "100%" }, // Start from right
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.3, // Delay between each line
        ease: "power3.out",
        delay: 0.2,
      }
    );

    // Animate buttons (optional)
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power3.out", delay: 0.4 }
    );
  }, []);

  return (
    <div className="homeBanner">
      <Swiper
        modules={[EffectFade, Pagination, Navigation]}
        effect="fade"
        loop={true}
        speed={1200}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="swiper-container"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="slide">
            <div className="homeBanner-imgs">
              <img src={slide.image} alt="Banner" />
            </div>

            <div className="homeBanner-desc">
              <p>Wedding Agency</p>
              <h1 ref={titleRef}>{slide.title}</h1>
              <h2 ref={descRef}>
                {slide.desc.split(". ").map((line, index) => (
                  <span key={index} className="desc-line">
                    {line}.
                  </span>
                ))}
              </h2>
              <div className="homeBanner-btns" ref={buttonRef}>
                <button>Book Kimono</button>
                <button>Explore Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Navigation buttons with text */}
        <div className="swiper-button-prev">Prev</div>
        <div className="swiper-button-next">Next</div>
        {/* Pagination */}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default HomeBanner;