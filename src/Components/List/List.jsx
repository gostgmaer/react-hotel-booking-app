import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { hotelList } from "../../assets/Mock/bookingAll";
import Hotelsfeatures from "../Elements/Hotelsfeatures";
import { useGlobalAppContext } from "../../Context/useContext";
import HotelSearchSidebar from "./hotelSearchSidebar";
import './hotellist.scss'
const List = () => {
  const { setHeaderPage } = useGlobalAppContext();

  useEffect(() => {
    setHeaderPage(null);
    // console.log(hotelList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      display={"flex"}
      justifyContent="space-around"
      alignItems={"flex-start"}
      bgcolor='f2f2f2'
      padding='0 50px'
      gap={1}
      className="hotelList">
      <Box  bgcolor={"#FEBB02"} className="leftSide" flex={1}>
        <HotelSearchSidebar />
      </Box>
      <Box className="rightSide"  >
        {hotelList.result.map((hotel) => (
          <Hotelsfeatures key={hotel.id}></Hotelsfeatures>
        ))}
      </Box>
    </Box>
  );
};

export default List;
