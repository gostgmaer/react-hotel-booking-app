
import Covidworn from "@/Components/hoteldetails/top/Covidworn"
import Layout from "@/layout"
import { Box } from "@mui/material"

const Index = () => {
  return (
    <Layout>
      <Box className=" w-full px-20 -z-0 text-gray-950 flex flex-col gap-2 py-8  relative">
        <Covidworn/>
      </Box>
      <Box className=" w-full px-20 -z-0 text-gray-950 flex  gap-2 py-8  relative">
        <Box flex={1}></Box>
        <Box flex={2.5}></Box>
      </Box>
    </Layout>
  )
}

export default Index