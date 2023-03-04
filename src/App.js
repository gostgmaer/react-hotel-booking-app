import { ToysTwoTone } from "@mui/icons-material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";
import HeaderContent from "./Components/navbar/HeaderContent";
import Navbar from "./Components/navbar/Navbar";
import Topbar from "./Global/TopBar";
import AppRoutes from "./routes/AppRoutes";

import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <HeaderContent></HeaderContent>
          <AppRoutes></AppRoutes>
          <Footer></Footer>
        </div>
        <ToastContainer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
