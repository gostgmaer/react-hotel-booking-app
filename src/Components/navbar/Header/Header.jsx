import {
  AirportShuttle,
  Bed,
  BedOutlined,
  CarRental,
  Flight,
  FlightClassRounded,
  FlightOutlined,
  TourOutlined,
} from "@mui/icons-material";
import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../../theme";
import Headersearch from "./Headersearch";


const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box pb={1}  bgcolor="#003B95" className="Header">
      <Box
        display={"flex"}
        width="100%"
        justifyContent="start"
        gap={1}
        pt={2}
        bgcolor="#003B95"
        pb={5}
        pl={10}
        pr={10}
        className="headerlist"
        sx={{
          "& .MuiButton-outlined": {
            borderColor: "transparent",
            color: colors.grey[100],

            textTransform: "capitalize",
            fontSize: 18,
            borderRadius: 5,
          },
          "& .MuiButton-outlined:hover": {
            bgcolor: "#194e9f",
          },
          "& .MuiButton-outlined:active": {
            border: `1px solid ${colors.grey[100]}`,
            bgcolor: "#194e9f",
          },
        }}>
        <Box className="headerListItems">
          <Button variant="outlined" startIcon={<BedOutlined />}>
            Stys
          </Button>
        </Box>
        <Box className="headerListItems">
          <Button variant="outlined" startIcon={<FlightOutlined />}>
            Flights
          </Button>
        </Box>
        <Box className="headerListItems">
          <Button variant="outlined" startIcon={<TourOutlined />}>
            Flight + Hotel
          </Button>
        </Box>
        <Box className="headerListItems">
          <Button variant="outlined" startIcon={<CarRental />}>
            Car Rentals
          </Button>
        </Box>
        <Box className="headerListItems">
          <Button variant="outlined" startIcon={<AirportShuttle />}>
            Airpost Taxi
          </Button>
        </Box>
      </Box>
      <Box
        width="100%"
        display={'flex'}
        flexDirection='column'
        justifyContent="start"
        gap={2}
        pt={2}
        bgcolor="#003B95"
        pb={5}
        pl={10}
        pr={10}
        className="headerlist">
        <Typography variant="h3">Find your next stay</Typography>
        <Typography variant="body1">
          Search low prices on hotels, homes and much more...
        </Typography>
       <Box>
       <Button sx={{  bgcolor: "#194e9f",}} variant="contained">Sign in/ Register</Button>
       </Box>
      </Box>
      <Headersearch></Headersearch>
    </Box>
  );
};

export default Header;
