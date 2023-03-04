import { Directions, Menu, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";

import "./style.scss";

const Emailform = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
   <Box bgcolor={colors.grey[100]}  display="flex"
   justifyContent={"center"}
   alignItems={'center'}
   height='200px'
   
   color={colors.grey[900]} width='100%'>
     <Box
      mt={"5px"}
      display="flex"
      alignItems={"center"}
      flexDirection={"column"}
      gap="15px"
      
      
      className="Emailform">
      <Typography variant="h2" fontSize={24}>
        Save time, save money!
      </Typography>
      <Typography variant="h4" fontSize={14}>
        Sign up and we'll send the best deals to you
      </Typography>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
        }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Your email address"
          inputProps={{ "aria-label": "Your email address" }}
        />
        <Button
          type="button"
          sx={{ p: "10px", bgcolor: colors.blueAccent[100], color: colors.grey[900] }}
          aria-label="search">
          Subscribe
        </Button>
      </Paper>
    </Box>
   </Box>
  );
};

export default Emailform;
