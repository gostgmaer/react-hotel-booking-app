import {
  AccountCircle,
  ArrowDropUp,
  ArrowUpward,
  BedOutlined,
  CalendarTodayOutlined,
  CalendarViewMonth,
  DateRange,
  Person,
  Search,
} from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import "../styles.scss";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import React, { Fragment, useState } from "react";
import { countries, top100Films } from "../../../assets/Mock/Data";
import { DateRangePicker } from "react-date-range";

const Headersearch = () => {
  const [value, setValue] = React.useState([null, null]);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ]);
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
            type="text"
            placeholder="Where are you going?"
            className="headerSearchBar"
          />
        </div>
        <div className="headerSearchItem">
          <CalendarTodayOutlined></CalendarTodayOutlined>{" "}
          <span className="headerSearchtext">date to date</span>
        </div>
        <div className="headerSearchItem">
          <Person></Person>{" "}
          <span className="headerSearchtext">2 adult 2 children 1 room</span>
        </div>
        <div className="headerSearchItem">
          <Button
            sx={{ bgcolor: "#003B95" }}
            variant="contained"
            className="headerSearchtext">
            Search
          </Button>
        </div>
      </Box>
      <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
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
