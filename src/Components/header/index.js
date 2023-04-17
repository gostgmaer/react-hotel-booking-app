import React from "react";
import Topbar from "./topbar";
import { Box } from "@mui/material";
import Navigation from "./navigation";

const Header = () => {
  return (
    <Box className=" bg-blue-900 px-24 text-gray-50 flex flex-col py-2 gap-2">
      <Topbar />
      <Navigation />
    </Box>
  );
};

export default Header;
