import React, { useEffect } from "react";
import Hotelsfeatures from "../../Components/HotelsFeatures/Hotelsfeatures";
import { useGlobalAppContext } from "../../Context/useContext";

const List = () => {
  const { headerPage, setHeaderPage } = useGlobalAppContext();

  useEffect(() => {
    setHeaderPage(null);
  }, []);

  
  return <div className="List">
    <Hotelsfeatures></Hotelsfeatures>
  </div>;
};

export default List;
