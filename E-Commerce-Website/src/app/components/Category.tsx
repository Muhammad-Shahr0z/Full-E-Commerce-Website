import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faDesktop,
  faStopwatch,
  faCamera,
  faHeadphones,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

function Category() {
  return (
    <div className="w-full max-w-[1100px] mx-auto px-4 xl:px-0 flex justify-center items-center mt-10 mb-1">
      <div className="w-full border-b-2 border-neutral-100 pb-10">
        <div className="mb-8">
          <h3 className="text-red-500 font-bold border-l-4 border-red-400 pl-3">
            Categories
          </h3>
          <h1 className="text-gray-800 font-bold text-2xl md:text-3xl mt-4">
            Browse By Category
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="group shadow-lg border-2 rounded-md hover:bg-red-500 flex flex-col items-center justify-center h-[150px] cursor-pointer">
            <FontAwesomeIcon
              icon={faMobileAlt}
              size="2x"
              className="text-gray-600 group-hover:text-white"
            />
            <p className="text-gray-700 group-hover:text-white mt-2">Phones</p>
          </div>
          <div className="group shadow-lg border-2 rounded-md hover:bg-red-500 flex flex-col items-center justify-center h-[150px] cursor-pointer">
            <FontAwesomeIcon
              icon={faDesktop}
              size="2x"
              className="text-gray-600 group-hover:text-white"
            />
            <p className="text-gray-700 group-hover:text-white mt-2">
              Computers
            </p>
          </div>
          <div className="group shadow-lg border-2 rounded-md hover:bg-red-500 flex flex-col items-center justify-center h-[150px] cursor-pointer">
            <FontAwesomeIcon
              icon={faStopwatch}
              size="2x"
              className="text-gray-600 group-hover:text-white"
            />
            <p className="text-gray-700 group-hover:text-white mt-2">
              SmartWatch
            </p>
          </div>
          <div className="group shadow-lg border-2 rounded-md hover:bg-red-500 flex flex-col items-center justify-center h-[150px] cursor-pointer">
            <FontAwesomeIcon
              icon={faCamera}
              size="2x"
              className="text-gray-600 group-hover:text-white"
            />
            <p className="text-gray-700 group-hover:text-white mt-2">Camera</p>
          </div>
          <div className="group shadow-lg border-2 rounded-md hover:bg-red-500 flex flex-col items-center justify-center h-[150px] cursor-pointer">
            <FontAwesomeIcon
              icon={faHeadphones}
              size="2x"
              className="text-gray-600 group-hover:text-white"
            />
            <p className="text-gray-700 group-hover:text-white mt-2">
              Headphones
            </p>
          </div>
          <div className="group shadow-lg border-2 rounded-md hover:bg-red-500 flex flex-col items-center justify-center h-[150px] cursor-pointer">
            <FontAwesomeIcon
              icon={faGamepad}
              size="2x"
              className="text-gray-600 group-hover:text-white"
            />
            <p className="text-gray-700 group-hover:text-white mt-2">Gaming</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
