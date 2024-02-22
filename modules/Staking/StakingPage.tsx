import H1 from "@/common/component/element/H1";
import React from "react";
import Card from "./components/Card";
import { RxQuestionMarkCircled } from "react-icons/rx";

export default function StakingPage() {
  return (
    <div className="h-auto max-w-[1500px] items-center flex flex-col mb-[1000px] justify-center px-5 lg:px-10 mt-32  w-full  overflow-hidden">
      <div className="w-full py-10 px-10">
        <H1
          title="Staking"
          textColor="white"
          className="text-3xl font-semibold"
        />
      </div>
      <div className="w-full flex justify-center items-center px-20">
        <div className="w-full flex justify-beetwen items-center">
          <div className="basis-[72%]">
            <h1>Token</h1>
          </div>
          <div className="flex w-full gap-10">
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
      <div className="w-full lg:px-20 py-5">
        <Card />
      </div>
    </div>
  );
}
