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
import SimplePropertycard, { QuickPlanCard } from "../Elements/Simplecard";

const Quickplaner = () => {
  const [value, setValue] = useState(null);
  console.log(response);

  const handleClick = (e) => {
    console.log(e.target.value);
  };

  return (
    <Box>
      <Stack className="flex flex-col gap-1 my-2">
        <Typography className=" text-xl font-semibold">
          Quick and easy trip planner
        </Typography>
        <Typography className="text-sm opacity-80">
          Pick a vibe and explore the top destinations in India
        </Typography>
      </Stack>
      <Stack direction={"row"} className="headerlist gap-1 my-2 items-center">
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleClick}
        >
          {response.typeof.types.map((item) => (
            <FormControlLabel
              value={item.id}
              sx={{
                "&.MuiFormControlLabel-root:has(span.Mui-checked)": {
                  backgroundColor: colors.blue[50],
                  "border-radius": "9999px",
                  "--tw-text-opacity": 1,
                  color: "rgb(29 78 216 / var(--tw-text-opacity))",
                },
              }}
              control={<Radio size="small" className="hidden" />}
              label={ item.title}
              className="bg-transparent hover:bg-gray-200 mx-2 hover:rounded-full ml-0  py-2 px-4 text-xs "
            />
          ))}
        </RadioGroup>
      </Stack>
      <Box className="py-3">
        <Slider
          slide={6}
          Card={QuickPlanCard}
          data={response.typeof.destinations}
        ></Slider>
      </Box>
    </Box>
  );
};

export default Quickplaner;

{
  /* <Button
            className=" text-black capitalize font-normal text-xs active:border py-2 active:border-cyan-950 rounded-full hover:bg-gray-300 active:bg-blue-300"
            key={item.id}
            variant="outlined"
          >
            {item.title}
          </Button> */
}
