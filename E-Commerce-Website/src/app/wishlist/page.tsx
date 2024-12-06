/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const WishlistPage = () => {
  return (
    <div className="bg-white p-6 max-w-[1100px] mx-auto">
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Wishlist (4)</h2>
          <button className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800">
            Move All To Bag
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* box1 */}
          <div>
            <div className="group shadow-md bg-neutral-100 sm:w-full md:w-full lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
              {/* Image */}
              <Image
                src={"/gaming.png"}
                width={150}
                height={100}
                alt="game-images"
              />
              <span className="bg-red-500 px-2 rounded-md text-white  absolute top-0 left-0">
                -40%
              </span>
              <span className="absolute top-1 right-1 text-red rounded-full">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-xl hover:text-red-500"
                />
              </span>

              {/* Add to Cart */}
              <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm ">
                Add to Cart
              </button>
            </div>
            <h1 className="font-bold font-sans pt-2 ">HAVIT HV-G92 Gamepad</h1>
            <span className="text-red-500 font-bold">$120</span>{" "}
            <span className="text-gray-400 font-bold line-through ml-2">
              $160
            </span>
            <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
              <span className="text-gray-400">(88)</span>
            </div>
          </div>

          {/* box2 */}
          <div>
            <div className="group bg-neutral-100 shadow-md sm:w-full md:w-full lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
              {/* Image */}
              <Image
                src={"/keyboard.png"}
                width={150}
                height={100}
                alt="game-images"
              />
              <span className="bg-red-500 px-2 rounded-md text-white  absolute top-0 left-0">
                -25%
              </span>
              <span className="absolute top-1 right-1 text-red rounded-full">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-xl  hover:text-red-500"
                />
              </span>

              {/* Add to Cart */}
              <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm">
                Add to Cart
              </button>
            </div>
            <h1 className="font-bold font-sans pt-2 ">AK-900 Wired Keyboard</h1>
            <span className="text-red-500 font-bold">$920</span>{" "}
            <span className="text-gray-400 font-bold line-through ml-2">
              $1160
            </span>
            <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
              <span className="text-gray-400">(90)</span>
            </div>
          </div>

          {/* box 3 */}
          <div>
            <div className=" group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-full lg:w-[220px]  h-[180px] flex justify-center items-center">
              <Image
                src={"/lcd.png"}
                width={150}
                height={100}
                alt="game-images"
              ></Image>
              <span className="bg-red-500 px-2 rounded-md text-white  absolute top-0 left-0">
                -32%
              </span>
              <span className="absolute top-1 right-1 text-red rounded-full">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-xl hover:text-red-500 "
                />
              </span>

              {/* Add to Cart */}
              <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm">
                Add to Cart
              </button>
            </div>
            <h1 className="font-bold font-sans pt-2">IPS LCD Gaming Monitor</h1>
            <span className="text-red-500 font-bold">$1500</span>{" "}
            <span className="text-gray-400 font-bold line-through ml-2">
              $2240
            </span>
            <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
              <span className="text-gray-400">(95)</span>
            </div>
          </div>

          {/* box4 */}
          <div>
            <div className="group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-full lg:w-[220px] h-[180px] flex justify-center items-center">
              <Image
                src={"/chair.png"}
                width={150}
                height={100}
                alt="game-images"
              ></Image>
              <span className="bg-red-500 px-2  rounded-md text-white  absolute top-0 left-0">
                -40%
              </span>
              <span className="absolute top-1 right-1 text-red rounded-full">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-xl hover:text-red-500  "
                />
              </span>

              {/* Add to Cart */}
              <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm">
                Add to Cart
              </button>
            </div>
            <h1 className="font-bold font-sans pt-2">
              S-Series Comfort Chair{" "}
            </h1>
            <span className="text-red-500 font-bold">$320</span>{" "}
            <span className="text-gray-400 font-bold line-through ml-2">
              $630
            </span>
            <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 ">
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
              <span className="text-gray-400">(99)</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            <span className="text-red-600 flex justify-center items-center gap-2">
              <Image src="/wishlist/red.png" height={30} width={15} alt="red" />
              Just For You
            </span>
          </h2>
          <Link href="/see-all">
            <button className="px-4 py-2 text-white bg-black rounded hover:bg-gray-800">
              See All
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* box5 */}
          <div>
            <div className="group shadow-md bg-neutral-100 sm:w-full md:w-full lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
              {/* Image */}
              <Image
                src={"/gaming.png"}
                width={150}
                height={100}
                alt="game-images"
              />
              <span className="bg-red-500 px-2 rounded-md text-white  absolute top-0 left-0">
                -40%
              </span>
              <span className="absolute top-1 right-1 text-red rounded-full">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-xl hover:text-red-500"
                />
              </span>

              {/* Add to Cart */}
              <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm ">
                Add to Cart
              </button>
            </div>
            <h1 className="font-bold font-sans pt-2 ">HAVIT HV-G92 Gamepad</h1>
            <span className="text-red-500 font-bold">$120</span>{" "}
            <span className="text-gray-400 font-bold line-through ml-2">
              $160
            </span>
            <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
              <span className="text-gray-400">(88)</span>
            </div>
          </div>

          {/* box6 */}
          <div>
            <div className="group bg-neutral-100 shadow-md sm:w-full md:w-full lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
              {/* Image */}
              <Image
                src={"/keyboard.png"}
                width={150}
                height={100}
                alt="game-images"
              />
              <span className="bg-red-500 px-2 rounded-md text-white  absolute top-0 left-0">
                -25%
              </span>
              <span className="absolute top-1 right-1 text-red rounded-full">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-xl  hover:text-red-500"
                />
              </span>

              {/* Add to Cart */}
              <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm">
                Add to Cart
              </button>
            </div>
            <h1 className="font-bold font-sans pt-2 ">AK-900 Wired Keyboard</h1>
            <span className="text-red-500 font-bold">$920</span>{" "}
            <span className="text-gray-400 font-bold line-through ml-2">
              $1160
            </span>
            <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
              <span className="text-gray-400">(90)</span>
            </div>
          </div>

          {/* box 7 */}
          <div>
            <div className=" group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-full lg:w-[220px]  h-[180px] flex justify-center items-center">
              <Image
                src={"/lcd.png"}
                width={150}
                height={100}
                alt="game-images"
              ></Image>
              <span className="bg-red-500 px-2 rounded-md text-white  absolute top-0 left-0">
                -32%
              </span>
              <span className="absolute top-1 right-1 text-red rounded-full">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-xl hover:text-red-500 "
                />
              </span>

              {/* Add to Cart */}
              <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm">
                Add to Cart
              </button>
            </div>
            <h1 className="font-bold font-sans pt-2">IPS LCD Gaming Monitor</h1>
            <span className="text-red-500 font-bold">$1500</span>{" "}
            <span className="text-gray-400 font-bold line-through ml-2">
              $2240
            </span>
            <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
              <span className="text-gray-400">(95)</span>
            </div>
          </div>

          {/* box8 */}
          <div>
            <div className="group relative shadow-md bg-neutral-100 cursor-pointer sm:w-full md:w-full lg:w-[220px] h-[180px] flex justify-center items-center">
              <Image
                src={"/chair.png"}
                width={150}
                height={100}
                alt="game-images"
              ></Image>
              <span className="bg-red-500 px-2  rounded-md text-white  absolute top-0 left-0">
                -40%
              </span>
              <span className="absolute top-1 right-1 text-red rounded-full">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-xl hover:text-red-500  "
                />
              </span>

              {/* Add to Cart */}
              <button className=" w-full absolute bottom-0  bg-black text-white px-4 py-2 rounded-sm">
                Add to Cart
              </button>
            </div>
            <h1 className="font-bold font-sans pt-2">
              S-Series Comfort Chair{" "}
            </h1>
            <span className="text-red-500 font-bold">$320</span>{" "}
            <span className="text-gray-400 font-bold line-through ml-2">
              $630
            </span>
            <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 ">
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={solidStar} />
              <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
              <span className="text-gray-400">(99)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
