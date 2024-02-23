"use client";
import clsx from "clsx";
import Link from "next/link";
import NavMobile from "./NavMobile";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavigationItem } from "../../constant/NavigationItem";
import { usePathname } from "next/navigation";
import ButtonConect from "../element/ButtonConect";
import H1Hover from "../element/H1Hover";
import Logo from "./Logo";
import { IoWalletOutline } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const [scroll, setScrolled] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 10);
    });
  }, []);



  return (
    <motion.div
      className={clsx(
        // scroll ? "backdrop-blur-sm border-b-[1px] border-neutral-800" : "",
        `w-full transition-all duration-300 mx-auto bg-[#0f0e0e]  max-w-[1500px]   py-5 px-5 2xl:rounded-3xl  lg:px-10 fixed top-0 z-[99]`
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex w-full z-[999] items-start justify-start">
          <Link
            href="/"
            className="group relative w-auto flex justify-start items-center gap-2"
          >
            <Logo  />

          </Link>
        </div>
        <div className="lg:flex hidden bg-neutral-800 py-3 rounded-2xl relative justify-center gap-10 items-center w-auto px-10">
          {NavigationItem.map((item, index) => (
            <H1Hover
              key={index}
              href={item.src}
              title={item.title}
              item={item.src}
              pathname={pathname}
            />
          ))}
        </div>

        <div className="lg:hidden flex  items-center">
          <NavMobile open={open} handleOpen={handleOpen} close={close} />
        </div>

        <div className="lg:flex hidden  w-full items-end justify-end">
          <Link href="/" className=" flex justify-end">
            <ButtonConect
              title="Connect"
              className="hover:!bg-[#EEEEEE] transition-colors duration-300 overflow-hidden !bg-transparent outline outline-1 outline-[#EEEEEE] !text-[#EEEEEE] w-auto !py-2"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
