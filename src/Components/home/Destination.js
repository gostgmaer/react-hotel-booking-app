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

const Destination = () => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <Box>
      <Stack className="flex flex-col gap-1 mb-2">
        <Typography className=" text-2xl">
          Popular destinations by month
        </Typography>
        <Typography>
          Travellers from Virginia are loving these places
        </Typography>
      </Stack>
      <Stack direction={"row"} className="headerlist gap-1 items-center">
        {response.bymonth.filters.map((item) => (
          <Button
            className=" text-black capitalize font-normal text-xs active:border py-2 active:border-cyan-950 rounded-full hover:bg-gray-300 active:bg-blue-300"
            key={item.month}
            variant="outlined"
          >
            {item.text}
          </Button>
        ))}
      </Stack>
      <Box className="py-5">
        <Slider></Slider>
      </Box>
    </Box>
  );
};

export default Destination;
