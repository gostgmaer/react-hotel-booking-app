import React, { useEffect } from "react";
import { useGlobalAppContext } from "../../Context/useContext";

const Hoteldetails = () => {
  const {setHeaderPage } = useGlobalAppContext();

  useEffect(() => {
    setHeaderPage(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
};

export default Hoteldetails;
