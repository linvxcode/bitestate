import H1 from "@/common/component/element/H1";
import React from "react";
import Card from "./components/Card";
import { RxQuestionMarkCircled } from "react-icons/rx";

export default function StakingPage() {
  return (
    <div className="h-auto  max-w-[1500px] items-center flex flex-col justify-center px-5 lg:px-10 mt-32  w-full  overflow-hidden">
      <div className="w-full py-10 lg:px-10">
        <H1
          title="Staking"
          textColor="white"
          className="text-3xl font-semibold"
        />
      </div>
      <div className="w-full overflow-hidden flex justify-center items-center lg:px-20">
        <div className="w-full max-lg:overflow-scroll flex justify-beetwen items-center">
          <div className="basis-[72%] max-lg:mr-[130px]">
            <h1>Token</h1>
          </div>
          <div className="flex w-full gap-20 lg:gap-10">
            <h1 className="flex items-center gap-1">
              Liquidity
              <span>
                <RxQuestionMarkCircled
                  size={15}
                  className="bg-neutral-700 rounded-full"
                />
              </span>
            </h1>
            <h1 className="flex items-center gap-1">
              APR
              <span>
                <RxQuestionMarkCircled
                  size={15}
                  className="bg-neutral-700 rounded-full"
                />
              </span>
            </h1>
            <h1>Reward</h1>
            <h1>Earned</h1>
          </div>
        </div>
      </div>
      <div className="w-full xl:px-20 py-5 overflow-hidden">
        <Card />
      </div>
      <div
        className={`absolute  z-[-9] glowbg w-[200px] md:w-[300px] md:h-[300px] left-0 h-[200px] top-[250px]`}
      ></div>
    </div>
  );
}
