import { Box, TablePagination } from "@mui/material";
import Contenttop from "./elements/Contenttop";
import { hotelList } from "../../../../public/assets/Mock/bookingAll";
import Hotelsfeatures from "@/Components/Elements/Hotelsfeatures";
import { searchQueries } from "@/assets/Mock/searchproperty";
import { useState } from "react";

// console.log((searchQueries.search.results.length/32).toFixed(0));
const Rightcontent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(32);
  return (
    <Box>
      <Contenttop />
      <Box className=" flex flex-col gap-4 mt-5">
        {searchQueries.search.results
          .slice(page * rowsPerPage, (page + 1) * 32)
          .map((hotel, index) => (
            <Hotelsfeatures data={hotel} key={index}></Hotelsfeatures>
          ))}
        <ListPagination
          setPage={setPage}
          page={page}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </Box>
    </Box>
  );
};

export default Rightcontent;

export function ListPagination(props) {
  console.log(props);
  const handleChangePage = (event, newPage) => {
    props.setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    props.setRowsPerPage(parseInt(event.target.value, 32));
    props.setPage(0);
  };

  return (
    <TablePagination
      rowsPerPageOptions={[32, 64, 128]}
      component="div"
      count={searchQueries.search.results.length}
      className="w-full"
      page={props.page}
      onPageChange={handleChangePage}
      rowsPerPage={props.rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
