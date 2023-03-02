import {
  BedOutlined,
  CalendarTodayOutlined,
  Minimize,
  Person,
} from "@mui/icons-material";
import { Box, Button, IconButton, TextField } from "@mui/material";
import "../styles.scss";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import React, { Fragment, useState } from "react";
import { countries, top100Films } from "../../../assets/Mock/Data";
import { DateRangePicker, DateRange } from "react-date-range";
import { format } from "date-fns";

const Headersearch = () => {
  const [value, setValue] = React.useState([null, null]);
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({ adult: 1, children: 0, room: 1 });
  const [location, setLocation] = useState(null);
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
    const obj ={
      location:location,date:date,option:options
    }
    console.log(obj);
   }
  return (
    <Fragment>
      <Box
        display={"flex"}
        width="100%"
        maxWidth={"1120px"}
        justifyContent="space-between"
        pb={2}
        ml={10}
        mr={10}
        pt={2}
        borderRadius={"5px"}
        position={"absolute"}
        bottom={2}
        height={"30px"}
        bgcolor={"white"}
        border="3px solid #febb02"
        alignItems={"center"}
        className="Headersearch">
        <div className="headerSearchItem">
          <BedOutlined></BedOutlined>{" "}
          <input
          onChange={(e)=>setLocation(e.target['value'])}
         
            placeholder="Where are you going?"
            className="headerSearchBar"
          />
        </div>
        <div className="headerSearchItem">
          <CalendarTodayOutlined></CalendarTodayOutlined>{" "}
          <span
            onClick={() => setOpenDate(!openDate)}
            className="headerSearchtext">{`${format(
            date[0].startDate,
            "eee d MMM, yyyy"
          )} --- ${format(date[0].endDate, "eee d MMM, yyyy")}`}</span>
          {openDate && (
            <DateRange
              onRangeFocusChange={() => console.log(date)}
              editableDateInputs={true}
              // @ts-ignore

              onChange={(item) => handleDateChange(item)}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />
          )}
        </div>
        <div className="headerSearchItem">
          <Person></Person>{" "}
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className="headerSearchtext">{`adult ${options.adult} . children ${options.children} . room ${options.room}`}</span>
          {openOptions && (
            <div className="option">
              <div className="optionItem">
                <span className="label">Adult</span>
                <div className="counter">
                  <button
                    className="minus"
                    disabled={options.adult <= 1}
                    onClick={() => handleOption("adult", "d")}>
                    -
                  </button>
                  <span className="value">{options.adult}</span>
                  <button
                    className="plus"
                    onClick={() => handleOption("adult", "i")}>
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="label">Children</span>
                <div className="counter">
                  <button className="minus"  disabled={options.children <= 0}
                    onClick={() => handleOption("children", "d")}>
                    -
                  </button>
                  <span className="value">{options.children}</span>
                  <button className="plus"  onClick={() => handleOption("children", "i")}>
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="label">Room</span>
                <div className="counter">
                  <button className="minus" disabled={options.room <= 1}
                    onClick={() => handleOption("room", "d")}>
                    -
                  </button>
                  <span className="value">{options.room}</span>
                  <button className="plus"  onClick={() => handleOption("room", "i")}>
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem done-btn">
                <Button
                  className="done"
                  variant='outlined'
                  color='primary'
                  sx={{bgcolor:'transparent'}}
                  
                  onClick={() => setOpenOptions(!openOptions)}>
                  Done
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="headerSearchItem">
          <Button
            sx={{ bgcolor: "#003B95" }}
            variant="contained"
            onClick={handleSearch}
            className="headerSearchtext">
            Search
          </Button>
        </div>
      </Box>

      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider> */}
    </Fragment>
  );
};

export default Headersearch;
