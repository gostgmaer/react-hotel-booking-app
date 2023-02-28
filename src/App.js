import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { Fragment } from "react";
import Topbar from "./Global/TopBar";

import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();
 
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <Topbar></Topbar>
         
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
