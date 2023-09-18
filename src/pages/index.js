
import Layout from "@/layout";
import Herosection from "@/Components/home/Herosection";
import Head from "next/head";
import Perfectstay from "@/Components/home/Perfectstay";
import { Box } from "@mui/material";
import Destination from "@/Components/home/Destination";
import Explore from "@/Components/home/Explore";
import Propertytype from "@/Components/home/Propertytype";
import Quickplaner from "@/Components/home/QuickPlaner";
import Uniqueplaces from "@/Components/home/Uniqueplace";


export default function Home() {
  return (
    <>
      <Head>
        <title>Booking dot com </title>
      </Head>
      <Layout>
        <Herosection />
        <Box className=" w-full px-20 -z-0 text-gray-950 flex flex-col gap-2 py-8  relative">
          <Perfectstay />
          <Destination></Destination>
          <Explore />
          <Quickplaner />
          <Propertytype />
          <Uniqueplaces />
        </Box>
      </Layout>
    </>
  );
}
