import { Box } from "@mui/material";
import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { propertyType } from "../../assets/Mock/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "./style.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
const PropertyList = () => {
  return (
    <Fragment>
      {/* <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className="PropertyList">
        {propertyType.map((item) => (
          <Box className="propertyItem">
            <img style={{}} src={item.image} alt="" />
            <Typography variant="h4">{item.title}</Typography>
            <Typography variant="body2">{item.description}</Typography>
          </Box>
        ))}
      </Box> */}

      <Box marginTop={"10px"} mb={"5px"} className="PropertyList">
        <Swiper
          slidesPerView={5}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {propertyType.map((item) => (
            <SwiperSlide key={item.id}>
              <Box className="propertyItem">
                <Image height={200} width={220} src={item.image} alt="image alt" />
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </Box>
            </SwiperSlide>
          ))}
          {/* <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div> */}
        </Swiper>
      </Box>
    </Fragment>
  );
};

export default PropertyList;
