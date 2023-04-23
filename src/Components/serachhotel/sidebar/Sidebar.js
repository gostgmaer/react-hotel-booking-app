import { Box, Typography } from "@mui/material";
import { SidebarTopElement } from "./Sitebartop";
import { filterData } from "@/assets/Mock/filter";
import {
  Accessibility,
  BedPrefered,
  Brands,
  CancellationPolicy,
  DistanceFromcity,
  Facilities,
  Funthings,
  Landmarks,
  Meals,
  Neighbourhood,
  PopularFilter,
  PrivateBathroom,
  PropertyType,
  Propertyrating,
  ReviewScore,
  RoomAccessibility,
  RoomFacilities,
  Setprice,
  ShowMap,
  Sustainability,
} from "./elements";

const Sidebar = () => {
  return (
    <Box className=" flex flex-col gap-2">
      <SidebarTopElement />
      <Box>
        <Typography className="border p-2">Filter by:</Typography>
        <Setprice />
        <PopularFilter data={filterData.filters[1]} />
        <Sustainability data={filterData.filters[2]} />
        <Propertyrating data={filterData.filters[3]} />
        <DistanceFromcity data={filterData.filters[4]} />
        <Funthings data={filterData.filters[5]}></Funthings>
        <CancellationPolicy data={filterData.filters[7]}></CancellationPolicy>
        <Meals data={filterData.filters[8]} />
        <PrivateBathroom data={filterData.filters[8]} />
        <PropertyType data={filterData.filters[9]} />
        <Landmarks data={filterData.filters[11]} />
        <BedPrefered data={filterData.filters[12]} />
        <ReviewScore data={filterData.filters[13]} />
        <Facilities data={filterData.filters[14]} />
        <RoomFacilities data={filterData.filters[15]} />
        <Neighbourhood data={filterData.filters[16]} />
        <Brands data={filterData.filters[17]} />
        <Accessibility data={filterData.filters[18]} />
        <RoomAccessibility data={filterData.filters[19]} />
        <ShowMap data={undefined} />
      </Box>
    </Box>
  );
};

export default Sidebar;
