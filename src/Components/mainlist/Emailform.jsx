import { Directions, Menu, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography,
  colors,
  useTheme,
} from "@mui/material";
import React from "react";

const Emailform = () => {
  const theme = useTheme();

  return (
    <Box
      height="200px"
      className="flex flex-col items-center bg-blue-900 text-slate-100 justify-center gap-10"
    >
      <Box>
        <Typography variant="h2" fontSize={24}>
          Save time, save money!
        </Typography>
        <Typography variant="h4" fontSize={14}>
          Sign up and we ll send the best deals to you
        </Typography>
      </Box>
      <Box width={"40%"}>
        <FormControl className=" flex gap-2 items-center flex-row">
          <TextField
            sx={{ ml: 1, flex: 1 }}
            placeholder="Your email address"
            className=" bg-white rounded hover:outline"
            size="small"
            inputProps={{ "aria-label": "Your email address" }}
          />
          <Button
            type="button"
           className=" bg-blue-200 hover:bg-slate-400"
            aria-label="search"
          >
            Subscribe
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Emailform;
