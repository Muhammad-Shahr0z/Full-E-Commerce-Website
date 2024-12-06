"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import Image from "next/image";
import Discount from "./Discount";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logs } from "lucide-react";

function Header() {
  return (
    <>
      <Discount />

      <header className="max-w-[1100px] md:h-[48px] mx-auto flex justify-between items-center max-sm:px-4 px-2 mt-2 md:mt-10 border-b-[0.5px] md:pb-5 pb-2">
        {/* Div 1 IMages LOgo */}
        <div>
          <Image
            src="/Logo.png"
            alt="logo"
            height={24}
            width={118}
            className="lg:mr-44"
          />
        </div>

        {/* Div 2 Navigation Bar */}
        <div className="lg:w-[675px] h-[24px] flex xl:gap-[119px] md:gap-12">
          <nav className="hidden md:flex text-[16px] poppins-regular-400 list-none lg:gap-[48px] md:gap-5 text-[#000000]">
            <Link href="/">
              <li className="border-b-[1px] border-transparent hover:border-black cursor-pointer">
                Home
              </li>
            </Link>
            <Link href="/contact">
              <li className="border-b-[1px] border-transparent hover:border-black cursor-pointer">
                Contact
              </li>
            </Link>
            <Link href="/about">
              <li className="border-b-[1px] border-transparent hover:border-black cursor-pointer">
                About
              </li>
            </Link>
            <Link href="/signup">
              <li className="border-b-[1px] border-transparent hover:border-black cursor-pointer">
                Sign Up
              </li>
            </Link>
          </nav>
        </div>

        {/* Div 03 Images And Icon */}

        <div>
          <div className="flex justify-end items-center gap-x-4 lg:w-[347px] h-[38px] px-2">
            <div className="flex sm:bg-gray-200 rounded-sm">
              {/* INPUT*/}
              <div className="flex items-center">
                <input
                  className="hidden sm:flex lg:w-full p-1 rounded-md bg-gray-200 outline-none placeholder:text-[12px] px-4 py-1"
                  type="search"
                  placeholder="What are you looking for?"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-xl mx-2 hidden sm:block"
                />
              </div>

              {/* Mobile Screen */}
              <FontAwesomeIcon
                icon={faSearch}
                className="text-xl mx-2 sm:hidden"
              />
            </div>

            {/* Icons */}
            <FontAwesomeIcon
              icon={faHeart}
              className="text-2xl cursor-pointer hover:text-red-600"
            ></FontAwesomeIcon>
            <Link
              href="/CartDetails"
              className="flex justify-center items-center"
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-gray-700 mr-1 text-2xl  cursor-pointer hover:text-blue-800"
              />
              <p className="text-red-600 font-semibold text-[1rem] caret-transparent mb-5 bg-gray-200 rounded-full h-6 w-6 text-center">
                {1}
              </p>
            </Link>
          </div>
        </div>

        <div className="md:hidden flex justify-center items-center">
          <Sheet>
            <SheetTrigger>
              <Logs className="h-8 w-8" />
            </SheetTrigger>
            <SheetContent className="flex justify-center items-start pt-4 px-6">
              <SheetHeader>
                <nav className="flex flex-col text-[18px] sm:text-[24px] font-poppins-regular-400 list-none gap-6 text-[#000000]">
                  
                  {/* Logo */}
                  <div className="flex justify-center mb-6">
                    <Image src="/Logo.png" alt="logo" height={30} width={118} />
                  </div>
           
                  <Link href="/">
                    <li className="border-b-[1px] border-transparent hover:border-black cursor-pointer py-2 px-4 transition-all ease-in-out duration-300">
                      Home
                    </li>
                  </Link>
                  <Link href="/contact">
                    <li className="border-b-[1px] border-transparent hover:border-black cursor-pointer py-2 px-4 transition-all ease-in-out duration-300">
                      Contact
                    </li>
                  </Link>
                  <Link href="/about">
                    <li className="border-b-[1px] border-transparent hover:border-black cursor-pointer py-2 px-4 transition-all ease-in-out duration-300">
                      About
                    </li>
                  </Link>
                  <Link href="/signup">
                    <li className="border-b-[1px] border-transparent hover:border-black cursor-pointer py-2 px-4 transition-all ease-in-out duration-300">
                      Sign Up
                    </li>
                  </Link>
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}

export default Header;
