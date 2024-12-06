import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="flex flex-col-reverse sm:flex-row  max-w-[1100px] sm:h-[384px] mx-auto sm:justify-between gap-2 max-lg:px-4">
      {/* side bar  */}
      <ul className="lg:w-[20%] sm:w-[30%] pr-2 poppins-regular-400 text-[16px] justify-between flex flex-col sm:border-r-[0.5px] h-[344px] pt- w-full pt-8 pl-5 lg:pl-0">
        <li className="flex justify-between items-center cursor-pointer hover:text-blue-500 ">
          Womans Fashion <ChevronRight />
        </li>
        <li className="flex justify-between items-center cursor-pointer hover:text-blue-500 ">
          Electronics <ChevronRight />
        </li>
        <li className="cursor-pointer hover:text-blue-500">Home & Lifestyle</li>
        <li className="cursor-pointer hover:text-blue-500">Medicine</li>
        <li className="cursor-pointer hover:text-blue-500">Baby & Toys</li>
        <li className="cursor-pointer hover:text-blue-500">Groceries & Pets</li>
        <li className="cursor-pointer hover:text-blue-500">Health & Beauty</li>
      </ul>

      {/* IMage Div */}
      <div className="md:w-[75%] sm:w-[75%] flex flex-col sm:flex-row gap-y-5 items-center sm:h-[344px] max-sm:bg-black pt-8  w-full bg-black sm:bg-transparent">
        {/* right side */}
        <div className="sm:w-full bg-black sm:flex sm:justify-between md:pt-10 sm:px-10 sm:pt-10 sm:h-full xs:item-center">
          {/* left side */}
          <div className="text-white sm:w-[140px] md:w-[200px] pt-4 ml-5 xs:flex xs:flex-col xs:justify-center xs:items-center xs:gap-y-2 text-center md:text-start">
            <div className="flex gap-x-2 items-center justify-center md:justify-start">
              <span>
                <FontAwesomeIcon
                  icon={faApple}
                  className="text-white sm:text-2xl md:text-5xl"
                />
              </span>
              <span className="sm:text-[10px] md:text-lg max-sm:text-center">
                iPhone 14 Series
              </span>
            </div>
            <h1 className="sm:text-md md:text-4xl font-bold my-5 max-sm:text-center">
              Up to 10% off Voucher
            </h1>
            <Link
              href={"#products"}
              className=" underline underline-offset-4 hover:font-bold"
            >
              Shop Now &gt;
            </Link>
          </div>

          {/* right side */}
          <div>
            <Image
              src={"/iphone.png"}
              width={350}
              height={200}
              className="max-sm:mt-3 mt-6"
              alt="hero iamges"
            ></Image>

            <Image
              className="relative lg:block hidden right-28 bottom-3"
              src={"/dots.png"}
              width={110}
              height={14}
              alt="hero iamges"
            ></Image>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
