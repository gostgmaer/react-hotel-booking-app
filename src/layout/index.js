import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/header";
import { Box } from "@mui/material";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Box className="main" component={"main"}>
      <Header />
      <Box className=" text-white flex justify-between items-center">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
