import Hotelsfeatures from "@/Components/HotelsFeatures/Hotelsfeatures"
import HotelSearchSidebar from "@/Components/List/hotelSearchSidebar"
import Layout from "@/layout"
import { Box } from "@mui/material"
import { hotelList } from "../../../../public/assets/Mock/bookingAll"

const index = () => {
  return (
   <Layout>
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
   </Layout>
  )
}

export default index