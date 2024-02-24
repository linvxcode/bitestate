"use client";
import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa6";
import { RiDownloadLine } from "react-icons/ri";
import { motion } from "framer-motion";
import clsx from "clsx";
import ButtonIcon from "@/common/component/element/ButtonIcon";
import { GoPlus } from "react-icons/go";
import { GrFormSubtract } from "react-icons/gr";
import Modal from "./Modal";
import { StakingItem } from "@/common/constant/StakingItem";
import { HiEllipsisVertical } from "react-icons/hi2";
import Image from "@/common/component/element/Image";
import ComponentTransition from "@/common/component/element/ComponentTransition";

export default function Card() {
  const [open, setOpen] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const handleOpenModal = (index: number) => {
    setOpenModal(true);
    setSelectedItem(index);
  };

  return (
    <ComponentTransition className="w-full flex flex-col   gap-5 justify-start  items-start">
      {StakingItem?.map((item, index) => (
        <motion.div
          key={index}
          className={clsx(
            open === index ? "lg:h-[300px] h-[550px]" : "lg:h-[90px] h-[300px]",
            "w-full transition-all duration-300  relative top-0 bg-gradient-to-b from-[#1F1F1F] to-neutral-800 px-5 py-5 rounded-3xl flex-col flex justify-between items-center "
          )}
        >
          <motion.div
            className={clsx(`absolute inset-0 glowcard z-0 rounded-3xl`)}
          ></motion.div>
          <div className="w-full lg:flex-row flex-col flex justify-between gap-10 relative">
            <div
              className={`flex items-center justify-between gap-3 lg:gap-10 hover:cursor-pointer`}
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

              {/* Button More Dekstop */}
              <div className="flex lg:hidden justify-start items-center relative  ">
                <button className="w-auto bg-neutral-700 flex justify-center items-center px-3 py-3 rounded-2xl">
                  <HiEllipsisVertical size={30} />
                </button>
              </div>

            </div>
            <div className={`flex  gap-14 items-center`}>
              <div className="">
                <h1>APR</h1>
                <h1>{item.apr}</h1>
              </div>
              <div>
                <h1>Reward</h1>
                <h1>{item.reward}</h1>
              </div>
              <div>
                <h1>Earned</h1>
                <h1 className="text-lg font-medium text-[#01a2e9]">
                  {item.earned}
                </h1>
              </div>
            </div>
            <div className={`hidden lg:flex gap-1 items-center `}>
              <div className="w-full flex items-center ">
                <button className="w-full flex items-center gap-1 px-5 py-2 rounded-3xl bg-[#01a2e9]">
                  <RiDownloadLine size={15} />
                  <h1>Claim</h1>
                </button>
              </div>
            </div>

            {/* Button More Mobile */}
            <div className="lg:flex hidden justify-start items-center relative  ">
              <button
                
                className="w-auto bg-neutral-700 flex justify-center items-center px-3 py-3 rounded-2xl"
              >
                <HiEllipsisVertical size={20} />
              </button>
            </div>

          </div>
          <div
            className={clsx(
              open === index ? "block" : "hidden",
              `w-full flex flex-col gap-5 items-start relative`
            )}
          >
            <div className="w-full gap-5 grid sm:grid-cols-2  md:grid-cols-3 items-center">
              <div className="w-full flex flex-col">
                <h1>Your Deposit</h1>
                <h1 className="text-4xl font-semibold">
                  {item.deposit}{" "}
                  <span className="!text-xl !text-neutral-400">
                    {item.shortDeposit}
                  </span>
                </h1>
              </div>
              <div className="w-full flex flex-col">
                <h1>Share</h1>
                <h1 className="text-4xl font-semibold">
                  {item.share}
                  <span className="!text-xl !text-neutral-400">%</span>
                </h1>
              </div>

              <div className="w-full flex flex-col">
                <h1>Earning</h1>
                <h1 className="text-4xl font-semibold text-[#01a2e9]">
                  {item.earning}{" "}
                  <span className="!text-xl !text-neutral-400">
                    {item.shortEarning}
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              open === index ? "block" : "hidden",
              `w-full relative`
            )}
          >
            <div className="w-full flex gap-5">
              <ButtonIcon
                onClick={() => handleOpenModal(index)}
                icon={<GoPlus size={20} />}
                title="Stake"
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
          selectedItem={
            selectedItem !== null ? StakingItem[selectedItem] : null
          }
        />
      </div>
    </ComponentTransition>
  );
}
