import { ButtonSpot } from "@/common/component/element/ButtonSpot"; 
import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import React from "react";
import Money from "./components/Money";

export default function Hero() {
  return (
    <div className="h-auto max-w-[1500px] flex flex-col justify-center px-5 lg:px-10 mt-40  w-full  overflow-hidden">
      <div className="grid grid-cols-2 w-full ">
        <div className="w-full flex justify-start gap-10 items-start flex-col">
          <H1
            title="Welcome To"
            textColor="white"
            className="text-5xl font-semibold"
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
              className="text-2xl font-semibold"
            />
            <H1
              title="Real Estate Future!"
              textColor="blue"
              className="text-2xl font-semibold "
            />
          </div>
          <div className="">
            <ButtonSpot title="Get Started" className="bg-white !px-10 !py-5" />
          </div>
        </div>

        <div className="w-full relative">
          <div className="absolute w-full left-[200px] top-[-90px]">
            <Money />
          </div>
        </div>
      </div>
      <div
        className={`absolute  z-[-9] glowbg w-[200px] md:w-[300px] md:h-[300px] h-[200px] top-[250px]`}
      ></div>
    </div>
  );
}
