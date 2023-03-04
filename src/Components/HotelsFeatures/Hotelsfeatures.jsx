import React from "react";
import "./styles.scss";
import { Box, Button, IconButton, Typography } from "@mui/material";

const Hotelsfeatures = () => {
  return (
    <Box className="HotelsfeaturesItem">
    <Box className="left"></Box>
      <Box className="right">
        <Box>
          <h4>title</h4>{" "}
          <Box>
           <div> <h6>Good</h6>
            <span>2012 reviews</span></div>
            <Button>8.6</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hotelsfeatures;
