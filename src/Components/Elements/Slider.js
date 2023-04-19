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
import Propertycard from "./Propertycard";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
      
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className=" flex"
      >
        {response.byProperty.items.map((item,index) => (
          <SwiperSlide key={index} > <Propertycard data={item}></Propertycard></SwiperSlide>
         
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
