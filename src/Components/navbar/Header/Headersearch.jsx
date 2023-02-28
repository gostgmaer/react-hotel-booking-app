import { BedOutlined } from "@mui/icons-material";
import { Autocomplete, Box, TextField } from "@mui/material";

import React from "react";
import { countries, top100Films } from "../../../assets/Mock/Data";

const Headersearch = () => {
    const [value, setValue] = React.useState(null);
  return (
    <Box
      display={"flex"}
      width="100%"
      justifyContent="start"
      gap={1}
      pt={2}
      pb={5}
      pl={10}
      pr={10}
      className="Headersearch">
       <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
 
    </Box>
  );
};

export default Headersearch;
