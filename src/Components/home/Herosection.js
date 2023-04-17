import { Box, Typography } from "@mui/material"
import Headersearch from "../navbar/Header/Headersearch"

const Herosection = () => {
  return (
    <Box className=" w-full bg-blue-900 px-24 text-gray-50 flex flex-col gap-2 mb-10">
        <Typography variant="h2">Find your next stay</Typography>
        <Typography variant="h4">Search low prices on hotels, homes and much more...</Typography>
        <Headersearch/>
    </Box>
  )
}

export default Herosection




export const Searchproperty =()=>{
    
}