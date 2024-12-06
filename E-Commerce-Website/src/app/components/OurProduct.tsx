/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

function OurProduct() {
  return (
    <main>
      <div
        id="products"
        className="max-w-[1100px] mx-auto flex justify-center items-center mt-10 mb-1 px-4 xl:px-0"
      >
        {/* container */}
        <div className="w-full max-w-7xl">
          {/* container boxes */}
          <div className="flex flex-col">
            <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">
              Our Products
            </h3>
            <div className="flex">
              <h1 className="text-gray-800 font-bold text-lg sm:text-2xl md:text-3xl pt-4">
                Explore Our Products
              </h1>
            </div>
          </div>
          {/* Responsive Grid for Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
            {/* Product 1 */}
            <div className="pt-4">
              <div className="group shadow-md bg-neutral-100 w-full h-[180px] flex justify-center items-center cursor-pointer relative">
                <Image
                  src="/dog.png"
                  width={100}
                  height={100}
                  alt="game-images"
                />
                <span className="absolute top-1 right-1 text-red rounded-full">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-xl hover:text-red-500"
                  />
                </span>
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>
              <h1 className="font-bold font-sans pt-2">Breed Dry Dog Food</h1>
              <span className="text-red-500 font-bold">$100</span>
              <div className="flex items-center space-x-1">
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={regularStar}
                  className="text-gray-400 text-md"
                />
                <span className="text-gray-400">(88)</span>
              </div>
            </div>

            {/* Product 2 */}
            <div className="pt-4">
              <div className="group shadow-md bg-neutral-100 w-full h-[180px] flex justify-center items-center cursor-pointer relative">
                <Image
                  src="/camera.png"
                  width={150}
                  height={100}
                  alt="game-images"
                />
                <span className="absolute top-1 right-1 text-red rounded-full">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-xl hover:text-red-500"
                  />
                </span>
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>
              <h1 className="font-bold font-sans pt-2">
                CANON EOS DSLR Camera
              </h1>
              <span className="text-red-500 font-bold">$360</span>
              <div className="flex items-center space-x-1">
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={regularStar}
                  className="text-gray-400 text-md"
                />
                <span className="text-gray-400">(95)</span>
              </div>
            </div>

            {/* Product 3 */}
            <div className="pt-4">
              <div className="group shadow-md bg-neutral-100 w-full h-[180px] flex justify-center items-center cursor-pointer relative">
                <Image
                  src="/leptop.png"
                  width={150}
                  height={100}
                  alt="game-images"
                />
                <span className="absolute top-1 right-1 text-red rounded-full">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-xl hover:text-red-500"
                  />
                </span>
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>
              <h1 className="font-bold font-sans pt-2">
                ASUS FHD Gaming Laptop
              </h1>
              <span className="text-red-500 font-bold">$700</span>
              <div className="flex items-center space-x-1">
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={regularStar}
                  className="text-gray-400 text-md"
                />
                <span className="text-gray-400">(325)</span>
              </div>
            </div>

            {/* Product 4 */}
            <div className="pt-4">
              <div className="group shadow-md bg-neutral-100 w-full h-[180px] flex justify-center items-center cursor-pointer relative">
                <Image
                  src="/creame.png"
                  width={150}
                  height={100}
                  alt="game-images"
                />
                <span className="absolute top-1 right-1 text-red rounded-full">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-xl hover:text-red-500"
                  />
                </span>
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>
              <h1 className="font-bold font-sans pt-2">Curology Product Set</h1>
              <span className="text-red-500 font-bold">$1500</span>
              <div className="flex items-center space-x-1">
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={regularStar}
                  className="text-gray-400 text-md"
                />
                <span className="text-gray-400">(3145)</span>
              </div>
            </div>

            {/* Product 5 */}
            <div className="pt-4">
              <div className="group shadow-md bg-neutral-100 w-full h-[180px] flex justify-center items-center cursor-pointer relative">
                <Image
                  src="/gaming.png"
                  width={150}
                  height={100}
                  alt="game-images"
                />
                <span className="absolute top-1 right-1 text-red rounded-full">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-xl hover:text-red-500"
                  />
                </span>
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>
              <h1 className="font-bold font-sans pt-2">HAVIT HV-G92 Gamepad</h1>
              <span className="text-red-500 font-bold">$120</span>
              <div className="flex items-center space-x-1">
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={regularStar}
                  className="text-gray-400 text-md"
                />
                <span className="text-gray-400">(3145)</span>
              </div>
            </div>

            {/* Product 6 */}
            <div className="pt-4">
              <div className="group shadow-md bg-neutral-100 w-full h-[180px] flex justify-center items-center cursor-pointer relative">
                <Image
                  src="/swatch.avif"
                  width={150}
                  height={100}
                  alt="game-images"
                />
                <span className="absolute top-1 right-1 text-red rounded-full">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-xl hover:text-red-500"
                  />
                </span>
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>
              <h1 className="font-bold font-sans pt-2">Samsung Galaxy Watch</h1>
              <span className="text-red-500 font-bold">$220</span>
              <div className="flex items-center space-x-1">
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={regularStar}
                  className="text-gray-400 text-md"
                />
                <span className="text-gray-400">(3145)</span>
              </div>
            </div>

            {/* Product 7 */}
            <div className="pt-4">
              <div className="group shadow-md bg-neutral-100 w-full h-[180px] flex justify-center items-center cursor-pointer relative">
                <Image
                  src="/iphone15.png"
                  width={150}
                  height={100}
                  alt="game-images"
                />
                <span className="absolute top-1 right-1 text-red rounded-full">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-xl hover:text-red-500"
                  />
                </span>
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>
              <h1 className="font-bold font-sans pt-2">Iphone 15 Pro</h1>
              <span className="text-red-500 font-bold">$1500</span>
              <div className="flex items-center space-x-1">
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={regularStar}
                  className="text-gray-400 text-md"
                />
                <span className="text-gray-400">(3145)</span>
              </div>
            </div>

            {/* Product 8 */}
            <div className="pt-4">
              <div className="group shadow-md bg-neutral-100 w-full h-[180px] flex justify-center items-center cursor-pointer relative">
                <Image
                  src="/lcd.png"
                  width={150}
                  height={100}
                  alt="game-images"
                />
                <span className="absolute top-1 right-1 text-red rounded-full">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-xl hover:text-red-500"
                  />
                </span>
                <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </button>
              </div>
              <h1 className="font-bold font-sans pt-2">
                IPS LCD Gaming Monitor
              </h1>
              <span className="text-red-500 font-bold">$500</span>
              <div className="flex items-center space-x-1">
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={solidStar}
                  className="text-yellow-400 text-md"
                />
                <FontAwesomeIcon
                  icon={regularStar}
                  className="text-gray-400 text-md"
                />
                <span className="text-gray-400">(3145)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default OurProduct;
