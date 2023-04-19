import React from "react";

import {
  Box,
  Button,
  IconButton,
  Typography,
  colors,
  useTheme,
} from "@mui/material";
import {
  ArrowForward,
  ArrowRight,
  EnergySavingsLeaf,
  EnergySavingsLeafOutlined,
  Menu,
} from "@mui/icons-material";

const Hotelsfeatures = () => {
  const theme = useTheme();

  return (
    <Box
      className="HotelsfeaturesItem"
      bgcolor={"#fff"}
      color={colors.grey[900]}
    >
      <Box className="left">
        <img
          style={{ height: "200px" }}
          src="/assets/images/n208861113.jpg"
          alt=""
        />
      </Box>
      <Box className="right">
        <div className="leftBlock"></div>
        <div className="rightBlock"></div>
        <Box className="top">
          <Box className="titleBlock">
            <div className="title">
              {" "}
              <Typography
                fontSize={"18px"}
                variant="h3"
                color="#3971C2"
                fontWeight={700}
              >
                ITC Royal Bengal, a Luxury Collection Hotel, Kolkata
              </Typography>{" "}
              <h5>*****</h5>
            </div>
            <Box className="review">
              <div className="status">
                <h5>Good</h5>
                <span>2012 reviews</span>
              </div>
              <Button
                variant="contained"
                sx={{
                  fontSize: "18px",
                  p: "5px",
                  minWidth: "40px",
                  backgroundColor: colors.blue[500],
                }}
              >
                8.6
              </Button>
            </Box>
          </Box>
          <Box className="addressBlock">
            <Box
              fontSize={"16px"}
              textTransform="capitalize"
              color="#3971C2"
              className="location"
            >
              {" "}
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                kolkata
              </span>{" "}
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                show on map
              </span>{" "}
              <span style={{ color: "black" }}>1.3 km from center</span>
            </Box>
            <Box className="icon">
              <EnergySavingsLeafOutlined></EnergySavingsLeafOutlined>{" "}
              <span>Travel Sustainable property</span>
            </Box>
            <Box className="airport">
              <span
                style={{
                  backgroundColor: "green",
                  color: "#fff",
                  padding: "5px",
                }}
              >
                free airport Taxi
              </span>
            </Box>
          </Box>
        </Box>
        <Box className="buttom">
          <div className="bottomLeft">
            <div style={{ padding: "5px" }} className="bottomleftbed">
              <span style={{ fontWeight: "bold" }}>
                Towers Exclusive, Guest room, 1 Queen
              </span>
              <span>1 double bed</span>
            </div>
            <div className="bottomleftfeature">
              <span style={{ color: "green", fontWeight: "bold" }}>
                Breakfast included
              </span>
              <span style={{ color: "green", fontWeight: "bold" }}>
                <span>FREE cancellation </span> •{" "}
                <span>No prepayment needed</span>
              </span>
              <span style={{ color: "green" }} className="items">
                You can cancel later, so lock in this great price today.
              </span>
              <span style={{ color: "crimson", fontWeight: "bold" }}>
                Only 5 rooms left at this price on our site
              </span>
            </div>
          </div>
          <Box className="bottomRight">
            <span>
              <span>2 night</span> <span>2 adult</span>
            </span>
            <span
              className="price"
              style={{ fontSize: "2rem", fontWeight: "bold" }}
            >
              $ 12,350
            </span>
            <span className="tax">+₹ 1,524 taxes and charges</span>
            <Button variant="contained" endIcon={<ArrowRight />}>
              See avaliabality
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hotelsfeatures;
