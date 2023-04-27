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
import SimplePropertycard, { UniquePlaceCard } from "../Elements/Simplecard";
import CardwithDeatils from "../Elements/CardwithDetails";

const Uniqueplaces = () => {
  const [value, setValue] = useState(null);
  // console.log(response);

  return (
    <Box>
      <Stack className="flex flex-col gap-1 my-2">
        <Typography className="text-xl font-semibold">
        Stay at our top unique properties
        </Typography>
        <Typography className="text-sm opacity-80">
        From castles and villas to boats and igloos, we have got it all
        </Typography>
      </Stack>
    
      <Box className="py-3">
        <Slider
          slide={4}
          Card={CardwithDeatils}
          data={response.topUnique.acidCards}
        ></Slider>
      </Box>
    </Box>
  );
};

export default Uniqueplaces;
