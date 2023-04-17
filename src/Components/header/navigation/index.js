import { Box, Button, colors } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import {
  MdOutlineAirportShuttle,
  MdOutlineBed,
  MdOutlineCarRental,
  MdOutlineFlight,
  MdOutlineTour,
} from "react-icons/md";

const Navigation = () => {

const route = useRouter()
console.log(route);
const activeClass ={
    color:'red'
}

  return (
    <Box
      className="headerlist flex gap-1 items-center"
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
      }}
    >
      <Button variant="outlined" style={route.pathname==='/'?{border:'1px solid #f1f1f1'}:{}} className={route.pathname==='/'?'border  border-stone-100 ':''} startIcon={<MdOutlineBed />}>
        Stys
      </Button>
      <Button variant="outlined" startIcon={<MdOutlineFlight />}>
        Flights
      </Button>
      <Button variant="outlined" startIcon={<MdOutlineTour />}>
        Flight + Hotel
      </Button>
      <Button variant="outlined" startIcon={<MdOutlineCarRental />}>
        Car Rentals
      </Button>
      <Button variant="outlined" startIcon={<MdOutlineAirportShuttle />}>
        Airpost Taxi
      </Button>
    </Box>
  );
};

export default Navigation;
