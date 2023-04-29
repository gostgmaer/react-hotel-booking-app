import { Box, TextField, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { SearchHotels } from "../navbar/Header/Headersearch";

const Herosection = () => {
  const [dateValue, setDateValue] = useState([null, null]);

  return (
    <Box className=" w-full bg-blue-900 px-20 text-gray-50 flex flex-col py-8 gap-10 mb-10 relative">
      <Box>
        {" "}
        <h2 className="text-2xl">Find your next stay</h2>
        <h4 className="text-xl">
          Search low prices on hotels, homes and much more...
        </h4>
      </Box>

      <Box position={"relative"}>
        <SearchHotels />
      </Box>
    </Box>
  );
};

export default Herosection;

export const Searchproperty = () => {};
