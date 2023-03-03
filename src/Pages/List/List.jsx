import React, { useEffect } from "react";
import { useGlobalAppContext } from "../../Context/useContext";

const List = () => {
  const { headerPage, setHeaderPage } = useGlobalAppContext();

  useEffect(() => {
    setHeaderPage(null);
  }, []);

  
  return <div>List</div>;
};

export default List;
