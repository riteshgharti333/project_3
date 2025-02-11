import "./PhotoAlbums.scss";

import m1 from "../../assets/images/5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const photoAlbumsData = [
  {
    id: 1,
    title: "Jeniffer in Green",
    description: "By Jonathon Willson",
    image: m1,
  },
  {
    id: 2,
    title: "California Dreaming",
    description: "By Mary Doe",
    image: m1,
  },
  {
    id: 3,
    title: "Mountain Adventures",
    description: "By Emily Carter",
    image: m1,
  },
  {
    id: 4,
    title: "Autumn in Paris",
    description: "By Michael Smith",
    image: m1,
  },
  {
    id: 5,
    title: "Winter Wonderland",
    description: "By Sarah Brown",
    image: m1,
  },
  { id: 6, title: "Desert Dunes", description: "By Oliver James", image: m1 },
];

const PhotoAlbums = () => {
  const swiperRef = useRef(null);
  const [isSwiperReady, setIsSwiperReady] = useState(false);

  const animateSlides = () => {
    gsap.fromTo(
      ".photoAlbums-card-content-desc",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      ".photoAlbums-card-content-img",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.2,
      }
    );
  };

  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
    setIsSwiperReady(true);
  };

  // Handle Slide Change (avoid redundant animations)
  const handleSlideChange = () => {
    animateSlides(); // Run animation when slide changes
  };

  // Trigger animation only after the page is rendered
  useEffect(() => {
    if (isSwiperReady) {
      // Only run animation after Swiper is initialized
      requestAnimationFrame(animateSlides); // Ensures animation runs after render
    }
  }, [isSwiperReady]);

  return (
    <div className="photoAlbums">
      <h1>
        Photo <span className="line-break">Albums</span>
      </h1>
      <p className="photoAlbums-desc">
        Collection of photos All of Your Best Works
      </p>

      <div className="photoAlbums-cards">
        <Swiper
          onInit={handleSwiperInit}
          slidesPerView={2}
          navigation={true}
          spaceBetween={20}
          loop={true}
          speed={800}
          modules={[Navigation]}
          className="photoAlbums-slider"
          onSlideChange={handleSlideChange}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
        >
          {photoAlbumsData.map((album) => (
            <SwiperSlide key={album.id} className="photoAlbums-card">
              <div className="photoAlbums-card-content">
                <img src={album.image} alt={album.title} />
                <div className="photoAlbums-card-content-desc">
                  <h3>{album.title}</h3>
                  <p>{album.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoAlbums;
