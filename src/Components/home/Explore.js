import { response } from "@/assets/Mock/property";
import {
  Box,
  Button,
  ButtonGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  colors,
} from "@mui/material";
import { useEffect, useState } from "react";
import Slider from "../Elements/Slider";

const Explore = () => {
  const [value, setValue] = useState(null);
  console.log(response);
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <Box>
      <Stack className="flex flex-col gap-1 mb-2">
        <Typography className=" text-2xl">Explore India</Typography>
        <Typography>These popular destinations have a lot to offer</Typography>
      </Stack>

      <Box className="py-5">
        <Slider></Slider>
      </Box>
    </Box>
  );
};

export default Explore;
