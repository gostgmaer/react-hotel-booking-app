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
import SimplePropertycard from "../Elements/Simplecard";

const Destination = () => {
  const [value, setValue] = useState(null);
  console.log(response);

  const handleClick = (params) => {};

  return (
    <Box>
      <Stack className="flex flex-col gap-1 my-3">
        <h3 className=" text-xl font-semibold">
          Popular destinations by month
        </h3>
        <p className="text-sm opacity-80">
          Travellers from Virginia are loving these places
        </p>
      </Stack>
      <Stack direction={"row"} className="headerlist gap-1 my-2 items-center">
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleClick}
        >
          {response.bymonth.filters.map((item) => (
            <FormControlLabel
              value={item.month}
              key={item.month}
              sx={{
                "&.MuiFormControlLabel-root:has(span.Mui-checked)": {
                  backgroundColor: colors.blue[50],
                  borderRadius: "9999px",
                  "--tw-text-opacity": 1,
                  color: "rgb(29 78 216 / var(--tw-text-opacity))",
                },
              }}
              control={<Radio size="small" className="!hidden" />}
              label={item.text}
              className="bg-transparent hover:bg-gray-200 mx-2 hover:rounded-full ml-0  py-2 px-4 text-xs "
            />
          ))}
        </RadioGroup>
      </Stack>
      <Box className="py-3">
        <Slider
          slide={6}
          Card={SimplePropertycard}
          data={response.bymonth.destinations}
        ></Slider>
      </Box>
    </Box>
  );
};

export default Destination;
