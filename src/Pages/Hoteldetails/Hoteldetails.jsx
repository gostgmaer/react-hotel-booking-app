import React, { useEffect } from "react";
import { useGlobalAppContext } from "../../Context/useContext";

const Hoteldetails = () => {
  const { headerPage, setHeaderPage } = useGlobalAppContext();

  useEffect(() => {
    setHeaderPage(null);
  }, []);
  return <div></div>;
};

export default Hoteldetails;
