import { Inter } from "next/font/google";
import Hero from "@/modules/Hero/Hero";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={` ${inter.className} flex justify-center items-center`}>
      <Head>
        <title>BitEstate</title>
      </Head>
      <Hero />
    </div>
  );
}
