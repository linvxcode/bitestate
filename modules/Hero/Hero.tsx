import { ButtonSpot } from "@/common/component/element/ButtonSpot"; 
import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import React from "react";
import Money from "./components/Money";
import Finance from "./components/Finance";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-auto max-w-[1500px] flex flex-col justify-center pb-40 px-5 lg:px-10 mt-40  w-full  ">
      <div className="grid lg:grid-cols-2 w-full ">
        <div className="w-full flex justify-start gap-5 lg:gap-10 items-start flex-col">
          <H1
            title="Welcome To"
            textColor="white"
            className="lg:text-5xl text-3xl font-semibold"
          />
          <div className="w-[80%]">
            <Image
              className="w-full h-auto"
              src="/logoNavbar.png"
              alt="Logo Image"
              width={400}
              height={400}
              priority
            />
          </div>
          <div className="w-full flex flex-col">
            <H1
              title="Your Gateway to a Revolutionary"
              textColor="white"
              className="lg:text-2xl text-xl font-semibold"
            />
            <H1
              title="Real Estate Future!"
              textColor="blue"
              className="lg:text-2xl text-xl font-semibold "
            />
          </div>
          <div className="relative">
            <Link href='/staking' className="w-full">
            <ButtonSpot title="Get Started" className="bg-white !px-10 !py-5" />
            </Link>
          </div>
        </div>

        <div className="w-full relative flex justify-center items-start">
          <div className="w-full relative top-[50px] lg:top-[-90px]">
          <Image
              className="w-full h-auto object-cover"
              src="/1.png"
              alt="Logo Image"
              width={700}
              height={700}
              priority
            />
          </div>
          <div className="absolute z-[-9] w-full left-[-35%] lg:left-[-250px] top-[-30px] lg:top-[-90px]">
            <Money />
          </div>
          <div className="absolute w-[40%] left-[70%] top-[300px] lg:top-[250px]">
          <Image
              className="w-full h-auto"
              src="/Cursor.png"
              alt="Logo Image"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
      <div
        className={`absolute  z-[-9] glowbg w-[200px] md:w-[300px] md:h-[300px] h-[200px] top-[250px]`}
      ></div>
    </div>
  );
}
