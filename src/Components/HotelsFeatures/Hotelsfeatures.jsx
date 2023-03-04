import React from "react";
import "./styles.scss";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { tokens } from "../../theme";

const Hotelsfeatures = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      className="HotelsfeaturesItem"
      bgcolor={colors.grey[100]}
      color={colors.grey[900]}>
      <Box className="left">
        <img
          style={{ height: "200px" }}
          src="/assets/images/n208861113.jpg"
          alt=""
        />
      </Box>
      <Box className="right">
        <Box className="top">
          <Box className="titleBlock">
            <div className="title">
              {" "}
              <h4>ITC Royal Bengal, a Luxury Collection Hotel, Kolkata</h4>{" "}
              <h5>*****</h5>
            </div>
            <Box className="review">
              <div className="status">
                <h6>Good</h6>
                <span>2012 reviews</span>
              </div>
              <Button
                variant="contained"
                sx={{
                  fontSize: "18px",
                  p: "5px",
                  minWidth: "40px",
                  backgroundColor: colors.primary[500],
                }}>
                8.6
              </Button>
            </Box>
          </Box>
          <Box className="addressBlock">
            <div className="location">
              {" "}
              <span>kolkata</span> <span>show on map</span>{" "}
              <span>1.3 km from center</span>
            </div>
            <Box className="icon">
              <Menu></Menu> <span>Travel Sustainable property</span>
            </Box>
            <Box className="airport">
              <span>free airport Taxi</span>
            </Box>
          </Box>
        </Box>
        <Box className="buttom">
          <div className="bottomLeft">
            <div className="bottomleftbed">
              <span>Towers Exclusive, Guest room, 1 Queen</span>
              <span>1 double bed</span>
            </div>
            <div className="bottomleftfeature">
              <span>Breakfast included</span>
              <span>
                <span>FREE cancellation </span> •{" "}
                <span>No prepayment needed</span>
              </span>
              <span className="items">
                You can cancel later, so lock in this great price today.
              </span>
              <span>Only 5 rooms left at this price on our site</span>
            </div>
          </div>
          <div className="bottomRight">
            <span>
              <span>2 night</span> <span>2 adult</span>
            </span>
            <span className="price">$ 12,350</span>
            <span className="tax">+₹ 1,524 taxes and charges</span>
            <Button variant="contained">See avaliabality</Button>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Hotelsfeatures;
