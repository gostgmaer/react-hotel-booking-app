import {
  Box,
  Stack,
  Switch,
  LinearProgress,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { SidebarTopElement } from "./Sitebartop";
import React from "react";
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
  ShowMap,
  Sustainability,
} from "./elements";

const Sidebar = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  // console.log(filterData);
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
  console.log(filterData.filters);
  return (
    <Box className=" flex flex-col gap-2">
      <SidebarTopElement />
      <Box>
        <Typography className="border p-2">Filter by:</Typography>
        <Stack>
          <Typography>Your budget (per night)</Typography>
          <Switch {...label} defaultChecked />
          <LinearProgress variant="determinate" value={50} />
        </Stack>
        <PopularFilter  data={filterData.filters[1]} />
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
        <ShowMap data={undefined}/>
      </Box>
    </Box>
  );
};

export default Sidebar;
