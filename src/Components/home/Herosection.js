import { Box, TextField, Typography } from "@mui/material";

import CommonlyUsedComponents from "./SelectDate";
import { DateRangePicker } from "@mui/lab";
import { Fragment, useState } from "react";
import { SearchHotels } from "../navbar/Header/Headersearch";

const Herosection = () => {
  const [dateValue, setDateValue] = useState([null, null]);
  console.log(dateValue);
  return (
    <Box className=" w-full bg-blue-900 px-24 text-gray-50 flex flex-col gap-2 mb-10 relative">
      <Typography variant="h2">Find your next stay</Typography>
      <Typography variant="h4">
        Search low prices on hotels, homes and much more...
      </Typography>

      <Box>
      
        <SearchHotels />
      </Box>
    </Box>
  );
};

export default Herosection;

export const Searchproperty = () => {};
