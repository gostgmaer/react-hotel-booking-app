import { Box, Stack, Typography } from "@mui/material";

import Slider from "../Elements/Slider";

const Perfectstay = () => {
  return (
    <Box width={'100%'} className="text-black my-5">
      <Stack className="flex flex-col gap-1 mb-2">
        <Typography className=" text-2xl">
          Looking for the perfect stay?
        </Typography>
        <Typography>
          Travellers with similar searches booked these properties
        </Typography>
      </Stack>
      <Slider></Slider>
    </Box>
  );
};

export default Perfectstay;
