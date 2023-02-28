import {
  CurrencyExchange,
  DarkModeOutlined,
  Flag,
  LightModeOutlined,
  NotificationImportant,
  Notifications,
  Person,
  Person2Outlined,
  QuestionAnswer,
  QuestionMark,
  Search,
  Settings,
  SettingsApplications,
} from "@mui/icons-material";

import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ColorModeContext, tokens } from "../theme";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutEvent = () => {
    setAnchorEl(null);

    navigate("/");
  };

  return (
    <Box
      className="Topbar"
      display={"flex"}
      width="100%"
      justifyContent="space-between"
      pt={1.5}
      bgcolor="#003B95"
      pb={1.5}
      pl={10}
      pr={10}>
      <Box display={"flex"} borderRadius={3}>
        <Typography variant="h3">
          {" "}
          <NavLink
            style={{ color: colors.grey[100], textDecoration: "none" }}
            to={"/"}>
            gostbooking{" "}
          </NavLink>{" "}
        </Typography>
      </Box>

      <Box display={"flex"}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {" "}
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <CurrencyExchange />
        </IconButton>
        <IconButton>
          <Flag />
        </IconButton>
        <IconButton>
          <QuestionMark />
        </IconButton>

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            sx={{ color: colors.grey[100], textTransform: "capitalize" }}>
            List Your Property
          </Button>
          <Button variant="contained" disableElevation>
            Register
          </Button>
          <Button variant="contained"  disableElevation>
            <NavLink
              style={{ color: colors.grey[100], textDecoration: "none" }}
              to={"/login"}>
              {" "}
              Sign in
            </NavLink>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Topbar;
