import { Box, Typography } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { hotelList } from "../../assets/Mock/bookingAll";
import { propertyType } from "../../assets/Mock/Data";
import Featured from "../../Components/Featured/Featured";
import Hotellistdata from "../../Components/Hotellistdata";
import Emailform from "../../Components/mainlist/Emailform";
import PropertyList from "../../Components/Propertylist";
import { useGlobalAppContext } from "../../Context/useContext";
import "./home.scss";
const Homepage = () => {
  const { headerPage, setHeaderPage } = useGlobalAppContext();

  useEffect(() => {
    setHeaderPage("home");
  }, []);

  return (
 <Fragment>
     <Box ml={10} mr={10} mt={"50px"} className="Homepage">
      <Featured></Featured>
      <Box width={"100%"} mt={1}>
        <Typography
          variant="h2"
          sx={{ textAlign: "start" }}
          className="listTitile">
          Browse by property type
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: "start" }}
          className="listbody">
          These popular destinations have a lot to offer
        </Typography>

        <PropertyList></PropertyList>
      </Box>

      <Hotellistdata
        isprice={true}
        title={"Homes guests love"}
        data={hotelList.result}></Hotellistdata>
      <Hotellistdata
        isprice={false}
        title={"Stay at our top unique properties"}
        data={hotelList.result.slice(6, 12)}></Hotellistdata>
      
    </Box>
      <Emailform></Emailform>
 </Fragment>
  );
};

export default Homepage;
