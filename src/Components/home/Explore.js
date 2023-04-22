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
import { ExploreCard } from "../Elements/Simplecard";

const Explore = () => {
  const [value, setValue] = useState(null);

  return (
    <Box>
      <Stack className="flex flex-col gap-1 my-2">
        <Typography className=" text-xl font-semibold">Explore India</Typography>
        <Typography className="text-sm opacity-80">These popular destinations have a lot to offer</Typography>
      </Stack>

      <Box className="py-3">
      <Slider
        slide={6}
        Card={ExploreCard}
        data={response.exploreIndia.items}
      ></Slider>
      </Box>
    </Box>
  );
};

export default Explore;
