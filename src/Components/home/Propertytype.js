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
import { SimpleBigcard } from "../Elements/Simplecard";

const Propertytype = () => {
  const [value, setValue] = useState(null);
 
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <Box>
      <Stack className="flex flex-col gap-1 my-2">
        <Typography className=" text-xl font-semibold ">Browse by property type</Typography>
      </Stack>

      <Box className="py-3">
      <Slider
        slide={4}
        Card={SimpleBigcard}
        data={response.byProperty.items}
      ></Slider>
      </Box>
    </Box>
  );
};

export default Propertytype;
