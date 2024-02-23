"use client";
import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa6";
import { CiBitcoin } from "react-icons/ci";
import { RiDownloadLine } from "react-icons/ri";
import { motion } from "framer-motion";
import clsx from "clsx";
import ButtonIcon from "@/common/component/element/ButtonIcon";
import { GoPlus } from "react-icons/go";
import { GrFormSubtract } from "react-icons/gr";
import Modal from "./Modal";
import { StakingItem } from "@/common/constant/StakingItem";
import Image from "@/common/component/element/Image";

export default function Card() {
  const [open, setOpen] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setOpen(open === index ? null : index)
  }

  const handleOpenModal = (index: number) => {
    setOpenModal(true);
    setSelectedItem(index);
  }

  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center">
      {StakingItem?.map((item, index) => (
        <motion.div
          key={index}
          className="w-full overflow-hidden relative top-0 bg-neutral-800 px-5 py-5 rounded-3xl flex-col flex justify-between items-center "
          animate={{
            height: open === index ? 300 : 90,
          }}
        >
          <motion.div className="absolute inset-0 glowbg z-0 rounded-3xl"
          animate={{
            height: open === index ? 400 : 0
          }}

          ></motion.div>
          <div className="w-full flex gap-10 relative">
            <div
              className={`flex items-center gap-10 w-[37.5%] hover:cursor-pointer`}
              onClick={() => handleOpen(index)}
            >
              <div className="flex items-center">
                <Image 
                className="w-full h-auto"
                src={item.iconCrypto1}
                alt="Coin Bit Estate"
                width={40}
                height={40}
                />
                <FaEthereum size={40} />
              </div>
              <div className="flex items-center">
                <h1 className="text-xl font-semibold">
                  {item.titleCrypto1} - {item.titleCrypto2}
                </h1>
              </div>
            </div>
            <div className={`flex gap-14 items-center`}>
              <h1>{item.liqudity}</h1>
              <h1>{item.apr}</h1>
              <h1>{item.reward}</h1>
              <h1 className="text-lg font-medium text-[#01a2e9]">
                {item.earned}
              </h1>
            </div>
            <div className={`flex gap-1 items-center`}>
              <div className="w-full flex items-center ">
                <button className="w-full flex items-center gap-1 px-5 py-2 rounded-3xl bg-[#01a2e9]">
                  <RiDownloadLine size={15} />
                  <h1>Claim</h1>
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center relative  ">
              <div className="w-full bg-neutral-700 flex justify-center items-center px-5 py-2 rounded-2xl">
                <h1>...</h1>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              open === index ? "block" : "hidden",
              `w-full flex flex-col gap-5 items-start relative`
            )}
          >
            <div className="w-full grid grid-cols-3 items-center">
              <div className="w-full">
                <h1>Your Deposit</h1>
              </div>
              <div className="w-full">
                <h1>Share</h1>
              </div>

              <div className="w-full">
                <h1>Earning</h1>
              </div>
            </div>
            <div className="w-full grid grid-cols-3 ">
              <div className="w-full">
                <h1 className="text-4xl font-semibold">
                  {item.deposit}{" "}
                  <span className="!text-xl !text-neutral-400">
                    {item.shortDeposit}
                  </span>
                </h1>
              </div>

              <div className="w-full">
                <h1 className="text-4xl font-semibold">
                  {item.share}
                  <span className="!text-xl !text-neutral-400">%</span>
                </h1>
              </div>

              <div className="w-full">
                <h1 className="text-4xl font-semibold text-[#01a2e9]">
                  {item.earning}{" "}
                  <span className="!text-xl !text-neutral-400">
                    {item.shortEarning}
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className={clsx(open === index ? "block" : "hidden", `w-full relative`)}>
            <div className="w-full flex gap-5">
              <ButtonIcon
                onClick={() => handleOpenModal(index)}
                icon={<GoPlus size={20} />}
                title="Add Liquidity"
              />
              <ButtonIcon icon={<GrFormSubtract size={20} />} />
            </div>
          </div>
        </motion.div>
      ))}

      <div className="">
        <Modal 
        openModal={openModal} 
        setOpenModal={setOpenModal} 
        selectedItem={selectedItem !== null ? StakingItem[selectedItem] : null}
        />
      </div>
    </div>
  );
}
