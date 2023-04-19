import Image from "next/image";
import { Inter } from "next/font/google";

import Layout from "@/layout";
import Herosection from "@/Components/home/Herosection";
import Head from "next/head";
import Perfectstay from "@/Components/home/Perfectstay";
import { Box } from "@mui/material";
import Destination from "@/Components/home/Destination";
import Explore from "@/Components/home/Explore";
import Propertytype from "@/Components/home/Propertytype";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Booking dot com </title>
      </Head>
      <Layout>
        <Herosection />
        <Box className=" w-full px-24 text-gray-950 flex flex-col py-8 gap-10  relative">
          <Perfectstay />
          <Destination></Destination>
          <Explore />
          <Propertytype/>
        </Box>
      </Layout>
    </>
  );
}
