import Image from "next/image";
import { Inter } from "next/font/google";

import Layout from "@/layout";
import Herosection from "@/Components/home/Herosection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Herosection/>
    </Layout>
  );
}
