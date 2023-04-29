import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext(null);

const AppProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [appLoader, setAppLoader] = useState(false);
  const [headerPage, setHeaderPage] = useState(null);

  const updateLoader = () => {
    setLoader(!loader);
  };

  return (
    <AppContext.Provider
      value={{
        loader,
        updateLoader,
        headerPage,
        setHeaderPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
