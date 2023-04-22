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
import { searchQueries } from "@/assets/Mock/searchproperty";

const Sidebar = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  console.log(searchQueries.search.filters[2].options);
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
  return (
    <Box>
      <SidebarTopElement />
      <Box>
        <Typography>Filter by:</Typography>
        <Stack>
          <Typography>Your budget (per night)</Typography>
          <Switch {...label} defaultChecked />
          <LinearProgress variant="determinate" value={50} />
        </Stack>
        <Stack>
          <Typography>Popular filters</Typography>
          <FormControl sx={{}} component="fieldset" variant="standard">
            {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
            <FormGroup>
              {searchQueries.search.filters[0].options.map((item) => (
                <FormControlLabel
                  key={item.urlId}
                  control={<Checkbox  />}
                  label={item.value.translationTag.translation}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Stack>
      </Box>
    </Box>
  );
};

export default Sidebar;
