import {
  BedOutlined,
  CalendarTodayOutlined,
  Add,
  Remove,
  PersonOutline,
} from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  OutlinedInput,
  Stack,
} from "@mui/material";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import React, { Fragment, useEffect, useState } from "react";
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
          >{`${format(date[0].startDate, "eee d MMM")}  --  ${format(
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
          <PersonOutline></PersonOutline>
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className="headerSearchtext capitalize"
          >{`adult ${options.adult} . children ${options.children} . room ${options.room}`}</span>
        </Stack>

        {openOptions && (
          <div className="flex p-4 flex-col gap-2 rounded absolute top-8 right-0 left-0 w-full bg-white border text-cyan-950">
            <div className="optionItem flex justify-between items-center ">
              <span className="label">Adult</span>
              <div className="counter border border-gray-400 p-0 flex items-center gap-1">
                <IconButton
                  className="minus p-1 rounded-none "
                  disabled={options.adult <= 1}
                  onClick={() => handleOption("adult", "d")}
                >
                  <Remove />
                </IconButton>
                <span className="value p-1">{options.adult}</span>
                <IconButton
                  className="plus p-1 rounded-none"
                  onClick={() => handleOption("adult", "i")}
                >
                  <Add />
                </IconButton>
              </div>
            </div>
            <div className="optionItem optionItem flex justify-between items-center">
              <span className="label">Children</span>
              <div className="counter border border-gray-400 p-0 flex items-center gap-1">
                <IconButton
                  className="minus p-1 rounded-none "
                  disabled={options.children <= 0}
                  onClick={() => handleOption("children", "d")}
                >
                  <Remove />
                </IconButton>
                <span className="value p-1">{options.children}</span>
                <IconButton
                  className="plus p-1 rounded-none "
                  onClick={() => handleOption("children", "i")}
                >
                  <Add />
                </IconButton>
              </div>
            </div>
            <div className="optionItem optionItem flex justify-between items-center">
              <span className="label">Room</span>
              <div className="counter border border-gray-400 p-0 flex items-center gap-1">
                <IconButton
                  className="minus p-1 rounded-none "
                  disabled={options.room <= 1}
                  onClick={() => handleOption("room", "d")}
                >
                  <Remove />
                </IconButton>
                <span className="value p-1">{options.room}</span>
                <IconButton
                  className="plus p-1 rounded-none "
                  onClick={() => handleOption("room", "i")}
                >
                  <Add />
                </IconButton>
              </div>
            </div>
            <div className="optionItem optionItem flex justify-center items-center">
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
