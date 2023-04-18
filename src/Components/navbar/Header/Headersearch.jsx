import {
  BedOutlined,
  CalendarTodayOutlined,
  LocationCity,
  Minimize,
  Person,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
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

const Headersearch = () => {
  const [value, setValue] = React.useState([null, null]);

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
    navigation.push("/hotels");
  };
  return (
    <Fragment>
      <Box
        border="3px solid #febb02"
        className="Headersearch flex items-center bg-white rounded-sm w-full"
      >
        <div className="headerSearchItem flex-3/4 text-cyan-950">
          <BedOutlined></BedOutlined>{" "}
          <input
            onChange={(e) => setLocation(e.target["value"])}
            placeholder="Where are you going?"
            className="headerSearchBar"
          />
        </div>

        <Box
          className="headerSearchItem text-blue-950 flex-1 relative"
          sx={{ "&>.newclass:": { width: "100%" } }}
        >
          <CalendarTodayOutlined></CalendarTodayOutlined>
          <span
            onClick={() => setOpenDate(!openDate)}
            className="headerSearchtext"
          >{`${format(date[0].startDate, "eee d MMM")}  ---  ${format(
            date[0].endDate,
            "eee d MMM"
          )}`}</span>
          {openDate && (
            <DateRange
              className="absolute  top-10 right-0 left-0"
              onRangeFocusChange={() => console.log(date)}
              editableDateInputs={true}
              // @ts-ignore

              onChange={(item) => handleDateChange(item)}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />
          )}
        </Box>
        <div className="headerSearchItem flex-1 relative">
          <Person></Person>{" "}
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className="headerSearchtext"
          >{`adult ${options.adult} . children ${options.children} . room ${options.room}`}</span>
          {openOptions && (
            <div className="option absolute top-10 right-0 left-0 w-24 bg-white border text-cyan-950">
              <div className="optionItem">
                <span className="label">Adult</span>
                <div className="counter">
                  <button
                    className="minus"
                    disabled={options.adult <= 1}
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="value">{options.adult}</span>
                  <button
                    className="plus"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="label">Children</span>
                <div className="counter">
                  <button
                    className="minus"
                    disabled={options.children <= 0}
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="value">{options.children}</span>
                  <button
                    className="plus"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="label">Room</span>
                <div className="counter">
                  <button
                    className="minus"
                    disabled={options.room <= 1}
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="value">{options.room}</span>
                  <button
                    className="plus"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem done-btn">
                <Button
                  className="done"
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
        </div>
        <div className="headerSearchItem flex-1">
          <Button
            sx={{ bgcolor: "#003B95" }}
            variant="contained"
            onClick={handleSearch}
            className="headerSearchtext"
          >
            Search
          </Button>
        </div>
      </Box>
    </Fragment>
  );
};

export default Headersearch;
