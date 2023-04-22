import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";
import { response } from "@/assets/Mock/property";
import SimplePropertycard from "./Simplecard";
import { hotelList } from "../../../public/assets/Mock/bookingAll";

const Slider = ({ Card, slide, data }) => {

  return (
    <>
      <Swiper
        slidesPerView={slide ? slide : 6}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: slide ? slide : 6,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className=" flex"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Card data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
