import Hotelsfeatures from "@/Components/HotelsFeatures/Hotelsfeatures";
import HotelSearchSidebar from "@/Components/List/hotelSearchSidebar";
import Layout from "@/layout";
import { Box } from "@mui/material";
import { hotelList } from "../../../../public/assets/Mock/bookingAll";

const index = () => {
  return (
    <Layout>
      <Box className="hotelList  w-full px-24 text-gray-950  py-8 gap-10  relative flex items-start">
        <Box flex={1}>
          <HotelSearchSidebar />
        </Box>
        <Box  flex={2}>
          {hotelList.result.map((hotel) => (
            <Hotelsfeatures key={hotel.id}></Hotelsfeatures>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default index;
