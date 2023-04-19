import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/header";
import Emailform from "@/Components/mainlist/Emailform";
import { Box } from "@mui/material";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Box className="main" component={"main"}>
      <Header />
      <Box className=" text-white flex-col flex  justify-center items-center">
        {children}
      </Box>
      <Emailform/>
      <Footer />
    </Box>
  );
};

export default Layout;
