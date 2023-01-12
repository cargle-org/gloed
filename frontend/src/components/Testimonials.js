import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import "../css/App.css";
import React from 'react';
import SwiperCore, { A11y, Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import PersonaImg from "../images/testimonial-card-img.svg";

SwiperCore.use(
     [
          Pagination,
          A11y,
          Autoplay,
          Navigation
     ]
);
const Testimonials = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation, A11y,Autoplay]}
       spaceBetween={100}
        slidesPerView={1}
        breakpoints={
          {
            650: {
              spaceBetween: 20,
              slidesPerView: 2
            },
            860: {
              spaceBetween: 100,
              slidesPerView: 2
            },
          }
        }
        pagination={{ clickable: true }}
        navigation
        initialSlide={1}
        autoplay
        loop
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="testimonial-card item-b">
                                <p className="testimonial-card-text">
                                   “The platform has a slick experience, that was so easy to use. I feel so less stressed as i know we are doing everything by the book.”
                                </p>
                                <div className="testimonail-persona">
                                    <img src={PersonaImg} alt="" className="" />
                                    <div className="testimonial-persona-text">
                                        <h6 className="testimonial-persona-name">Kirko Bangs</h6>
                                        <span className="testimonial-persona-name-credentials">Founder at Bangs INC</span>
                                    </div>
                                </div>
         </SwiperSlide>
      <SwiperSlide className="testimonial-card item-b">
                                <p className="testimonial-card-text">
                                   “The platform has a slick experience, that was so easy to use. I feel so less stressed as i know we are doing everything by the book.”
                                </p>
                                <div className="testimonail-persona">
                                    <img src={PersonaImg} alt="" className="" />
                                    <div className="testimonial-persona-text">
                                        <h6 className="testimonial-persona-name">Kirko Bangs</h6>
                                        <span className="testimonial-persona-name-credentials">Founder at Bangs INC</span>
                                    </div>
                                </div>
         </SwiperSlide>
      <SwiperSlide className="testimonial-card item-b">
                                <p className="testimonial-card-text">
                                   “The platform has a slick experience, that was so easy to use. I feel so less stressed as i know we are doing everything by the book.”
                                </p>
                                <div className="testimonail-persona">
                                    <img src={PersonaImg} alt="" className="" />
                                    <div className="testimonial-persona-text">
                                        <h6 className="testimonial-persona-name">Kirko Bangs</h6>
                                        <span className="testimonial-persona-name-credentials">Founder at Bangs INC</span>
                                    </div>
                                </div>
         </SwiperSlide>
      <SwiperSlide className="testimonial-card item-b">
                                <p className="testimonial-card-text">
                                   “The platform has a slick experience, that was so easy to use. I feel so less stressed as i know we are doing everything by the book.”
                                </p>
                                <div className="testimonail-persona">
                                    <img src={PersonaImg} alt="" className="" />
                                    <div className="testimonial-persona-text">
                                        <h6 className="testimonial-persona-name">Kirko Bangs</h6>
                                        <span className="testimonial-persona-name-credentials">Founder at Bangs INC</span>
                                    </div>
                                </div>
         </SwiperSlide>
      .
    </Swiper>
  );
};

export default Testimonials