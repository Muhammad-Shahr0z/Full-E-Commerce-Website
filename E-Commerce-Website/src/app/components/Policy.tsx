/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faHeadphonesAlt,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function Policy() {
  return (
    <div className="w-full sm:h-auto lg:h-[300px] flex justify-center items-center py-8">
      <div className="sm:w-full lg:w-[70%] flex flex-wrap justify-center gap-6">
        {/* Box 1 */}
        <div className="w-[90%] sm:w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3 bg-gray-100 rounded-lg p-4">
          <div className="w-[50px] h-[50px] rounded-full bg-gray-400 flex justify-center items-center">
            <span>
              <FontAwesomeIcon icon={faTruckFast} className="text-2xl" />
            </span>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-center text-sm lg:text-md">
              FREE AND FAST DELIVERY
            </h1>
            <p className="text-xs lg:text-sm">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
        {/* Box 2 */}
        <div className="w-[90%] sm:w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3 bg-gray-100 rounded-lg p-4">
          <div className="w-[50px] h-[50px] rounded-full bg-gray-400 flex justify-center items-center">
            <span>
              <FontAwesomeIcon icon={faHeadphonesAlt} className="text-2xl" />
            </span>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-center text-sm lg:text-md">
              24/7 CUSTOMER SERVICE
            </h1>
            <p className="text-xs lg:text-sm">Friendly 24/7 customer support</p>
          </div>
        </div>
        {/* Box 3 */}
        <div className="w-[90%] sm:w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3 bg-gray-100 rounded-lg p-4">
          <div className="w-[50px] h-[50px] rounded-full bg-gray-400 flex justify-center items-center">
            <span>
              <FontAwesomeIcon icon={faCheckSquare} className="text-2xl" />
            </span>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-center text-sm lg:text-md">
              MONEY BACK GUARANTEE
            </h1>
            <p className="text-xs lg:text-sm">We return money within 30 days</p>
          </div>
        </div>
        {/* Boxes complete */}
      </div>
    </div>
  );
}
