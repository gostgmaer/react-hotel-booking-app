import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import { ShowMap } from "../../sidebar/elements";
import { searchQueries } from "@/assets/Mock/searchproperty";

const Contenttop = () => {
  const [sort, setSort] = useState("popularity");
  return (
    <Box className=" flex justify-between items-start">
      <Box className="w-68 flex flex-col gap-2">
        <Typography className=" text-2xl font-semibold">
          Kolkata: {483} properties
        </Typography>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size="small"
            placeholder="Selct a sort"
            className=" w-68 rounded-full text-blue-600"
            startAdornment={<Typography width={90}>Sort by:</Typography>}
          >
            {searchQueries.search.sorters.map((item) => (
              <MenuItem
                defaultValue={sort}
                value={item.option.captionTranslationTag.translation}
              >
                {item.option.captionTranslationTag.translation}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box>
        <div className=" h-20 w-64  inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=100&hl=en&q=%C4%kolkata+(My%20Business%20Name)&ie=UTF8&t=&z=14&kolkata=B&output=embed"
          ></iframe>
        </div>
      </Box>
    </Box>
  );
};

export default Contenttop;
