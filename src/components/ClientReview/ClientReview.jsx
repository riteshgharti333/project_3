import { client_reviews } from "../../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./ClientReview.scss";

const ClientReview = () => {
  return (
    <div className="clientReview">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        speed={800} 
        effect="fade"
      >
        {client_reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="clientReview-slide">
              <p>{review.review_title}</p>
              <div className="clientReview-name">
                <img src={review.img} alt={review.review_name} />
                <span>{review.review_name}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientReview;