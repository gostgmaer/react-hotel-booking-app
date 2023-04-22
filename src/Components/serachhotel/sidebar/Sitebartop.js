import {
  BedOutlined,
  CalendarTodayOutlined,
  LocationCity,
  Minimize,
  Person,
  Add,
  Remove,
  CalendarViewDay,
  LocationCityOutlined,
  Search,
  DateRangeSharp,
  ArrowDownward,
  KeyboardArrowDown,
  QuestionAnswer,
  HelpOutline,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  OutlinedInput,
  Stack,
  TextField,
  Tooltip,
  Typography,
  colors,
} from "@mui/material";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import React, { Fragment, useEffect, useState } from "react";
import { countries, top100Films } from "../../../assets/Mock/Data";
import { DateRangePicker, DateRange } from "react-date-range";
import { format } from "date-fns";
import { useRouter } from "next/router";

export const SidebarTopElement = (second) => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({ adult: 1, children: 0, room: 1 });
  const [location, setLocation] = useState(null);
  const navigation = useRouter();
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    console.log(date);
  }, [date]);

  const handleDateChange = (item) => {
    setDate([item.selection]);
  };
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = () => {
    const obj = {
      location: location,
      date: date,
      option: options,
    };
    console.log(obj);
    navigation.push("/search/searchelements");
  };
  return (
    <Box
      border="3px solid #febb02"
      className="Headersearch flex flex-col items-start p-4 bg-yellow-400 rounded-sm w-full gap-2 justify-between backdrop-grayscale-0 text-cyan-950"
    >
      <Typography variant="h3" className=" font-semibold text-2xl">
        Search
      </Typography>
      <Stack className="w-full">
        <Typography>Destination/property name:</Typography>
        <FormControl
          sx={{
            width: "100%",

            color: "#000",
          }}
          variant="outlined"
          className=""
          // className=" border border-black border-solid"
        >
          <OutlinedInput
            id="outlined-adornment-search"
            size="small"
            className="w-full text-black  bg-white"
            placeholder="Where are you going?..."
            color="primary"
            sx={{
              p: 0,
              m: 0,
              border: "none",

              overflow: "hidden",
            }}
            startAdornment={<Search className="m-1" />}
          />
        </FormControl>
      </Stack>
      <Stack className=" w-full relative">
        <Typography>Check-in date</Typography>
        <FormControl
          fullWidth
          sx={{
            width: "100%",

            color: "#000",
          }}
          variant="outlined"
          onClick={() => setOpenDate(!openDate)}
          // className=" border border-black border-solid"
        >
          <OutlinedInput
            id="outlined-adornment-search"
            size="small"
            className="w-full text-black  bg-white opacity-100"
            placeholder="DD-MM-YYYY"
            color="primary"
            value={format(date[0].startDate, "eee d MMM")}
            disabled
            sx={{
              p: 0,
              m: 0,
              border: "none",

              overflow: "hidden",
            }}
            startAdornment={<DateRangeSharp className="m-1" />}
            endAdornment={<KeyboardArrowDown className="m-1" />}
          />
        </FormControl>
      </Stack>
      <Stack className=" w-full relative">
        <Typography>Check-out date</Typography>
        <FormControl
          fullWidth
          sx={{
            width: "100%",

            color: "#000",
          }}
          variant="outlined"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <OutlinedInput
            id="outlined-adornment-search"
            size="small"
            className="w-full text-black  bg-white opacity-100 "
            placeholder="DD-MM-YYYY"
            color="primary"
            value={format(date[0].endDate, "eee d MMM")}
            disabled
            sx={{
              p: 0,
              m: 0,
              border: "none",

              overflow: "hidden",
            }}
            startAdornment={<DateRangeSharp className="m-1" />}
            endAdornment={<KeyboardArrowDown className="m-1" />}
          />
        </FormControl>
      </Stack>
      <Typography>1-night stay</Typography>
      <Stack className=" w-full relative">
        <FormControl
          fullWidth
          sx={{
            width: "100%",

            color: "#000",
          }}
          variant="outlined"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <OutlinedInput
            id="outlined-adornment-search"
            size="small"
            className="w-full text-black  bg-white opacity-100"
            placeholder="DD-MM-YYYY"
            color="primary"
            value={`adult ${options.adult} . children ${options.children} . room ${options.room}`}
            disabled
            sx={{
              p: 0,
              m: 0,
              border: "none",

              overflow: "hidden",
            }}
            endAdornment={<KeyboardArrowDown className="m-1" />}
          />
        </FormControl>
      </Stack>

      <Stack direction={"row"} position={"relative"} flex={1}>
        {openOptions && (
          <div className="flex p-8 flex-col gap-2 rounded absolute top-8 right-0 left-0 w-full bg-white border text-cyan-950">
            <div className="optionItem flex justify-between items-center ">
              <span className="label">Adult</span>
              <div className="counter border p-1">
                <IconButton
                  className="minus "
                  disabled={options.adult <= 1}
                  onClick={() => handleOption("adult", "d")}
                >
                  <Remove />
                </IconButton>
                <span className="value">{options.adult}</span>
                <IconButton
                  className="plus"
                  onClick={() => handleOption("adult", "i")}
                >
                  <Add />
                </IconButton>
              </div>
            </div>
            <div className="optionItem optionItem flex justify-between items-center p-2">
              <span className="label">Children</span>
              <div className="counter">
                <IconButton
                  className="minus"
                  disabled={options.children <= 0}
                  onClick={() => handleOption("children", "d")}
                >
                  <Remove />
                </IconButton>
                <span className="value">{options.children}</span>
                <IconButton
                  className="plus"
                  onClick={() => handleOption("children", "i")}
                >
                  <Add />
                </IconButton>
              </div>
            </div>
            <div className="optionItem optionItem flex justify-between items-center p-2">
              <span className="label">Room</span>
              <div className="counter">
                <IconButton
                  className="minus"
                  disabled={options.room <= 1}
                  onClick={() => handleOption("room", "d")}
                >
                  <Remove />
                </IconButton>
                <span className="value">{options.room}</span>
                <IconButton
                  className="plus"
                  onClick={() => handleOption("room", "i")}
                >
                  <Add />
                </IconButton>
              </div>
            </div>
            <div className="optionItem optionItem flex justify-center items-center p-2">
              <Button
                className="done w-full"
                variant="outlined"
                color="primary"
                sx={{ bgcolor: "transparent" }}
                onClick={() => setOpenOptions(!openOptions)}
              >
                Done
              </Button>
            </div>
          </div>
        )}
      </Stack>
      <FormControl className="flex-row w-full justify-between">
        <FormControlLabel
          sx={{
            "&> .MuiFormControlLabel-label": {
              fontSize: "12px",
            },
          }}
          className="!text-xs "
          control={<Checkbox />}
          label="Entire houses & apartments"
        />
        <Tooltip title="Add" arrow>
          <IconButton>
            <HelpOutline />
          </IconButton>
        </Tooltip>
      </FormControl>
      <FormControl className="flex-row w-full justify-between">
        <FormControlLabel
          sx={{
            "&> .MuiFormControlLabel-label": {
              fontSize: "12px",
            },
          }}
          control={<Checkbox className=""  />}
          label="I'm travelling for work"
        />
        <Tooltip title="Add" arrow>
          <IconButton>
            <HelpOutline />
          </IconButton>
        </Tooltip>
      </FormControl>

      <Stack direction={"row"} className=" w-full">
        <Button className=" w-full text-white bg-blue-900" variant="contained">
          Search
        </Button>
      </Stack>
    </Box>
  );
};
