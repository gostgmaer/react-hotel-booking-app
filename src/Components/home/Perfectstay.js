import { Box, Stack, Typography } from "@mui/material";

import Slider from "../Elements/Slider";
import { response } from "@/assets/Mock/property";
import { SwiperSlide } from "swiper/react";
import SimplePropertycard from "../Elements/Simplecard";
import "swiper/css";
import "swiper/css/navigation";
const Perfectstay = () => {
  return (
    <Box width={"100%"} className="text-black my-5">
      <Stack className="flex flex-col gap-1 mb-2">
        <Typography className=" text-2xl">
          Looking for the perfect stay?
        </Typography>
        <Typography>
          Travellers with similar searches booked these properties
        </Typography>
      </Stack>
      <Slider
        slide={6}
        children={response.getslove.acidCards.map((item) => {
          <SwiperSlide key={item.districtName}>
            <SimplePropertycard data={item} />
          </SwiperSlide>;
        })}
      ></Slider>
    </Box>
  );
};

export default Perfectstay;
