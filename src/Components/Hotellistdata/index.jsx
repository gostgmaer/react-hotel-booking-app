import { Box, Typography } from "@mui/material";
import React from "react";
import PropertyData from "./PropertyList";
import "./style.scss";
const Hotellistdata = ({title,isprice,data}) => {
  return (
    <Box mt={'5px'} width={'100%'}>
    <Typography
      variant="h3"
      sx={{ textAlign: "start" }}
      className="listTitile">
      {title}
    </Typography>
    <PropertyData isprice={isprice} data={data}></PropertyData>
  </Box>
  );
};

export default Hotellistdata;
