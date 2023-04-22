import { Box, TextField, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { SearchHotels } from "../navbar/Header/Headersearch";

const Herosection = () => {
  const [dateValue, setDateValue] = useState([null, null]);

  return (
    <Box className=" w-full bg-blue-900 px-20 text-gray-50 flex flex-col py-8 gap-10 mb-10 relative">
      <Box>
        {" "}
        <Typography variant="h2">Find your next stay</Typography>
        <Typography variant="h4">
          Search low prices on hotels, homes and much more...
        </Typography>
      </Box>

      <Box position={"relative"}>
        <SearchHotels />
      </Box>
    </Box>
  );
};

export default Herosection;

export const Searchproperty = () => {};
