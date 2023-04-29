import { Box, Stack, Typography } from "@mui/material";

import Slider from "../Elements/Slider";
import { response } from "@/assets/Mock/property";
import { SwiperSlide } from "swiper/react";
import SimplePropertycard from "../Elements/Simplecard";
import Propertycard from "../Elements/Propertycard";

const Perfectstay = () => {
  return (
    <Box width={"100%"} className="text-black m-0">
      <Stack className="flex flex-col gap-1 my-2">
        <h3 className=" text-xl font-semibold">
          Looking for the perfect stay?
        </h3>
        <p className="text-sm opacity-80">
          Travellers with similar searches booked these properties
        </p>
      </Stack>
      <Box className="py-3"></Box>
      <Slider
        slide={4}
        Card={Propertycard}
        data={response.perfectStay.acidCards}
      ></Slider>
    </Box>
  );
};

export default Perfectstay;
