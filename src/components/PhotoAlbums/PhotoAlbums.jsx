import "./PhotoAlbums.scss";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { photoAlbumsData } from "../../assets/data";
import { useEffect, useState } from "react";

const PhotoAlbums = () => {

  const [activeIndex, setActiveIndex] = useState(0);
   const [initialized, setInitialized] = useState(false);
  
    // Set the animation trigger after component mounts
    useEffect(() => {
      setInitialized(true);
    }, []);
  

  return (
    <div className="photoAlbums">
      <h1>Photo Albums</h1>
      <p className="photoAlbums-desc">
        Collection of photos All of Our Best Works
      </p>

      <div className="photoAlbums-cards">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          navigation={true}
          spaceBetween={20}
          loop={true}
          speed={2000}
          modules={[Navigation]}
          className="photoAlbums-slider album-swiper"
          initialSlide={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
        >
          {photoAlbumsData.map((album , index) => (
            <SwiperSlide key={album.id} className="photoAlbums-card">
              <div className="photoAlbums-card-content">
                <img src={album.image} alt={album.title} />

                <div
                  className={`homeBanner-desc ${
                    initialized && index === activeIndex ? "animate" : ""
                  }`}
                >
                  <div className="photoAlbums-card-content-desc">
                    <h3>{album.title}</h3>
                    <p>{album.description}</p>
                  </div>
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
