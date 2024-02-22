import Head from "next/head";
import React from "react";
import StakingPage from "@/modules/Staking/StakingPage";

export default function Staking() {
  return (
    <div className="w-full flex justify-center items-center">
      <Head>
        <title>Stake - BitEstate</title>
      </Head>
      <StakingPage />
    </div>
  );
}


