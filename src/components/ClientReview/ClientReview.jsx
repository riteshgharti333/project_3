import "./ClientReview.scss";

import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import { client_reviews } from "../../assets/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination , Navigation } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import bg2 from "../../assets/images/bg2.jpg";
import user from "../../assets/images/11.jpg";

import "swiper/css";
import "swiper/css/pagination";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const ClientReview = () => {
  return (
    <div className="clientReview">
      <div className="clientReview-img">
        <img src={bg2} alt="Client Background" />

        <div className="clientReview-card">
          <Swiper
            modules={[Autoplay, Pagination , Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1200}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            navigation={{
              prevEl: ".client-prev",
              nextEl: ".client-next",
            }}
          >
            {client_reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="clientReview-card-desc">
                  <div className="clientReview-card-top">
                    <div className="clientReview-card-stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="star" />
                      ))}
                    </div>

                    <div className="clientReview-card-quotes">
                      <RiDoubleQuotesR className="quotes" />
                    </div>
                  </div>

                  <p className="reviews">" {review.review_title} "</p>

                  <hr className="line" />

                  <div className="review-name">
                    <img src={user} alt={review.review_name} />
                    <div className="review-name-desc">
                      <p>{review.review_name}</p>
                      <p>{review.review_location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="client-prev ">
            <BsArrowLeft className="client-icon" />
          </div>
          <div className="client-next">
            <BsArrowRight className="client-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
