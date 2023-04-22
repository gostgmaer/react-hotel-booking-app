import Hotelsfeatures from "@/Components/HotelsFeatures/Hotelsfeatures";
import HotelSearchSidebar from "@/Components/List/hotelSearchSidebar";
import Layout from "@/layout";
import { Box } from "@mui/material";
import { hotelList } from "../../../../public/assets/Mock/bookingAll";
import { searchQueries } from "@/assets/Mock/searchproperty";
import { SidebarTopElement } from "@/Components/serachhotel/sidebar/Sitebartop";
import Sidebar from "@/Components/serachhotel/sidebar/Sidebar";



const index = () => {
   console.log(searchQueries.search.filters);
  return (
    <Layout>
      <Box className="hotelList  w-full px-20 text-gray-950  py-8 gap-10  relative flex items-start">
        <Box flex={1}>
          <Sidebar />
        </Box>
        <Box  flex={2.5}>
          {hotelList.result.map((hotel) => (
            <Hotelsfeatures key={hotel.id}></Hotelsfeatures>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default index;
