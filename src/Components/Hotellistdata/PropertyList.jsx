import { Image } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { Fragment } from "react";
import { Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "./style.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PropertyData = ({ data,isprice }) => {
    console.log(data);
  return (
    <Box marginTop={'10px'} mb={'5px'} className="PropertyData">
      <Swiper
        slidesPerView={4}
        style={{paddingBottom:'10px'}}
        scrollbar={{ draggable: true }}
        className="mySwiper">
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Box className="propertyItem">
              <img style={{ width: "275px" }} src={item.main_photo_url} alt="" />
              <Box fontSize={"1rem !important"} display={"block"}>
                <Typography variant="h5">{item.hotel_name}</Typography>
                <Typography variant="body2">{item?.address?.substring(0,40)}</Typography>
              </Box>
             { isprice&&<Box
                fontSize={"1rem !important"}
                display={"flex"}
                alignItems="center"
                justifyContent={"flex-start"}
                gap={"10px"}>
                <Typography variant="caption">Starting from</Typography>
                <Typography fontWeight={"bold"} variant="caption">
                  {item.price_breakdown.currency} {item.price_breakdown.all_inclusive_price}
                </Typography>
              </Box>}
              <Box
                fontSize={"1rem !important"}
                display={"flex"}
                alignItems="center"
                justifyContent={"flex-start"}
                gap={"10px"}>
                <Typography variant="caption" bgcolor={""}>
                 {item.review_score}
                </Typography>
                <Typography variant="caption">{item.review_score_word}</Typography>
                <Typography variant="caption">. {item.review_nr} reviews</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PropertyData;
