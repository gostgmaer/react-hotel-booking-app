import {
  BedOutlined,
  CalendarTodayOutlined,
  LocationCity,
  Minimize,
  Person,
  Add,
  Remove,
  CalendarViewDay,
} from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import React, { Fragment, useEffect, useState } from "react";
import { countries, top100Films } from "../../../assets/Mock/Data";
import { DateRangePicker, DateRange } from "react-date-range";
import { format } from "date-fns";
import { useRouter } from "next/router";

export const SearchHotels = (second) => {
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
  // useEffect(() => {
  //   console.log(date);
  // }, [date]);

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
    // console.log(obj);
    navigation.push("/search/searchelements");
  };
  return (
    <Box
      border="3px solid #febb02"
      className="Headersearch absolute flex items-center bg-white rounded-sm w-full gap-2 justify-between backdrop-grayscale-0 text-cyan-950"
    >
      <Stack direction={"row"} flex={1.5}>
        <FormControl sx={{ width: "100%", p: 0.5 }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-search"
            size="small"
            className="w-full"
            placeholder="Where are you going?..."
            color="primary"
            sx={{
              p: 0,
              m: 0,
              border: "none",
              height: "44px",
              overflow: "hidden",
            }}
            startAdornment={
              <IconButton
                sx={{
                  height: "100%",
                }}
              >
                <BedOutlined />
              </IconButton>
            }
          />
        </FormControl>
      </Stack>
      <Stack direction={"row"} flex={1} position={"relative"}>
        <Stack direction={"row"} gap={1}>
          <CalendarTodayOutlined></CalendarTodayOutlined>
          <span
            onClick={() => setOpenDate(!openDate)}
            className="headerSearchtext"
          >{`${format(date[0].startDate, "eee d MMM")}  ---  ${format(
            date[0].endDate,
            "eee d MMM"
          )}`}</span>
        </Stack>
        {openDate && (
          <DateRange
            className="absolute  top-8 right-0 left-0"
            onRangeFocusChange={() => console.log(date)}
            editableDateInputs={true}
            // @ts-ignore

            onChange={(item) => handleDateChange(item)}
            moveRangeOnFirstSelection={false}
            ranges={date}
          />
        )}
      </Stack>
      <Stack direction={"row"} position={"relative"} flex={1}>
        <Stack direction={"row"} gap={1}>
          <Person></Person>
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className="headerSearchtext"
          >{`adult ${options.adult} . children ${options.children} . room ${options.room}`}</span>
        </Stack>

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
      <Stack direction={"row"}>
        <Button onClick={handleSearch} size="large" variant="outlined">
          Search
        </Button>
      </Stack>
    </Box>
  );
};
