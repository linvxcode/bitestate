"use client";
import Image from "@/common/component/element/Image";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  selectedItem: any;
}

export default function Modal({
  openModal,
  setOpenModal,
  selectedItem,
}: ModalProps) {
  const [choice, setChoice] = useState<boolean>(false);

  return (
    <AnimatePresence>
      {openModal && (
        <motion.div 
        initial={{
          translateY: 50,
          scale: 0.70,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          scale: 1,
          opacity: 1
        }}
        exit={{
          translateY: 50,
          scale: 0.70,
          opacity: 0
        }}
        className="w-[80%] md:w-[60%] xl:w-[50%] left-[10%] 2xl:w-[25%] mx-auto rounded-3xl flex  inset-44  h-[400px]  bg-neutral-900 fixed z-[999]">
          <div className="w-full justify-center items-center py-2 ">
            <button
              className=" w-auto flex items-end justify-end relative left-[80%] 2xl:left-[90%]"
              onClick={() => setOpenModal(!openModal)}
            >
              <GrFormClose size={50} />
            </button>
            <div className="w-auto flex justify-center items-center py-2">
              <div className="w-auto px-1 py-1 bg-[#3f3f3f88] rounded-2xl flex gap-2 overflow-hidden">
                <button
                  onClick={() => setChoice(!choice)}
                  className={clsx(
                    choice === false && "bg-[#01a2e9]",
                    `text-white px-3 py-2 rounded-[12px] transition-all duration-300`
                  )}
                >
                  <h1>Stake</h1>
                </button>
                <button
                  onClick={() => setChoice(!choice)}
                  className={clsx(
                    choice === true && "bg-[#01a2e9]",
                    `text-white px-3 py-2 rounded-[12px] transition-all duration-300`
                  )}
                >
                  <h1>Withdraw</h1>
                </button>
              </div>
            </div>

            <div className="w-full flex justify-center items-center px-10 py-5">
              <div className="flex flex-row flex-wrap w-full justify-between items-center">
                <div className="flex items-center gap-1">
                  {selectedItem?.iconCrypto1 && (
                    <Image
                      className="w-full h-auto"
                      src={selectedItem?.iconCrypto1}
                      alt="Coin Bit Estate"
                      width={20}
                      height={20}
                    />
                  )}
                  <h1 className="text-lg font-semibold">
                    {selectedItem?.titleCrypto1}
                  </h1>
                </div>
                <div>Balance: $ {selectedItem?.balance}</div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center px-10">
              <input
                type="number"
                className="w-full bg-transparent border-[1px] py-2 rounded-2xl px-2"
                placeholder="0.0"
              />
            </div>
            <div className="w-full flex justify-end items-end px-10 gap-3 mt-2">
              <div className="px-2 border-[1px] border-[#01a2e9] rounded-full">
                <h1>20%</h1>
              </div>
              <div className="px-2 border-[1px] border-[#01a2e9] rounded-full">
                <h1>50%</h1>
              </div>
              <div className="px-2 border-[1px] border-[#01a2e9] rounded-full">
                <h1>90%</h1>
              </div>
            </div>

            <div className="w-full flex justify-center items-center px-10 py-10">
              {/* Stake & Withdraw Button Logic */}

              {choice === false ? (
                <motion.button
                  className="px-5 py-2 bg-[#01a2e9] rounded-2xl w-full"
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <h1 className="text-black font-semibold">Stake</h1>
                </motion.button>
              ) : (
                <motion.button
                  className="px-5 py-2 bg-[#01a2e9] rounded-2xl w-full"
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <h1 className="text-black font-semibold">Withdraw</h1>
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
