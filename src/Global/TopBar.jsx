import {
    DarkModeOutlined,
    LightModeOutlined,
    NotificationImportant,
    Notifications,
    Person,
    Person2Outlined,
    Search,
    Settings,
    SettingsApplications,
  } from "@mui/icons-material";
  
  import {
    Box,
    Button,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    useTheme,
  } from "@mui/material";
  import React, { useContext } from "react";
  import { useNavigate } from "react-router-dom";
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
    
       navigate('/')
    };
    
    return (
      <Box
        className="Topbar"
        display={"flex"}
        justifyContent="space-between"
        p={2}>
        {/* search Bar */}
        <Box display={"flex"} borderRadius={3} bgcolor={colors.primary[400]}>
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder={"Search"}></InputBase>
          <IconButton type="button" sx={{ p: 1 }}>
            <Search></Search>
          </IconButton>
        </Box>
        {/* ICONS */}
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
            <Notifications />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
  
          <Box>
            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}>
              <Person />
            </IconButton>
            {/* <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}>
              Dashboard
            </Button> */}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}>
              <MenuItem onClick={handleClose}>
              
              </MenuItem>
              <MenuItem onClick={logoutEvent}>Logout</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Topbar;
  