import { Box, TablePagination } from "@mui/material";
import Contenttop from "./elements/Contenttop";
import { hotelList } from "../../../../public/assets/Mock/bookingAll";
import Hotelsfeatures from "@/Components/Elements/Hotelsfeatures";
import { searchQueries } from "@/assets/Mock/searchproperty";
import { useState } from "react";

const Rightcontent = () => {
  return (
    <Box>
      <Contenttop />
      <Box className=" flex flex-col gap-4 mt-5">
        {searchQueries.search.results.slice(0, 32).map((hotel,index) => (
          <Hotelsfeatures data={hotel} key={index}></Hotelsfeatures>
        ))}
        <ListPagination />
      </Box>
    </Box>
  );
};

export default Rightcontent;

export function ListPagination() {
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={searchQueries.search.results.length}
      className="w-full"
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
