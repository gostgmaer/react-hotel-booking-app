import {
  Autocomplete,
  AutocompleteListbox,
  ListItemDecorator,
  ListItemContent,
  Typography,
  AutocompleteOption,
  autocompleteClasses,
} from "@mui/joy";
import { MdHelp } from "react-icons/md";
import { Box, Button, IconButton, MenuItem, Select } from "@mui/material";

import Link from "next/link";
import React from "react";

const Topbar = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box className=" text-white py-2 px-2 flex justify-between items-center">
      <Box>
        <Typography className="text-white">Logo</Typography>
      </Box>
      <Box className=" text-gray-50 flex gap-2 items-center">
        <Box className="flex items-center gap-1">
          <Button className=" text-white hover:opacity-80">INR</Button>
          <Button className=" text-white hover:opacity-80">IN</Button>
          <IconButton className=" text-white hover:opacity-80">
            <MdHelp />
          </IconButton>
          <Button
            className=" text-white capitalize hover:opacity-80"
            variant="text"
          >
            List your property
          </Button>
        </Box>
        <Box className=" flex gap-2 items-center">
          <Link
            className=" px-2 py-1 rounded font-semibold bg-gray-50 hover:bg-slate-200 hover:text-blue-900 text-blue-900"
            href={"/"}
          >
            Register
          </Link>
          <Link
            className=" px-2 py-1 rounded font-semibold bg-gray-50 hover:bg-slate-200 hover:text-blue-900 text-blue-900"
            href={"/"}
          >
            Sign in
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
