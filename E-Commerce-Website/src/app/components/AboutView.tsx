/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faDollarSign,
  faShoppingBag,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";

function AboutViews() {
  return (
    <div className="max-w-[1100px] mx-auto flex justify-center items-center mt-10 mb-1">
      {/* container */}
      <div className="sm:w-full md:w-full border-b-2 border-neutral-100 pb-10">
        {/* container boxes */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 md:gap-10 lg:gap-5">
          {/* box1 */}
          <div className="shadow-lg border-solid border-2 rounded-md hover:bg-red-500 h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
            <span className="bg-black rounded-full text-white p-3">
              <FontAwesomeIcon icon={faStore} size="2x" />
            </span>
            <span className="text-xl font-bold">10.5k</span>
            <p className="sm:text-[8px] md:text-sm text-center">
              Sellers active on our site
            </p>
          </div>

          {/* box2 */}
          <div className="border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
            <span className="bg-black rounded-full text-white p-3">
              <FontAwesomeIcon icon={faDollarSign} size="2x" />
            </span>
            <span className="text-xl font-bold">33k</span>
            <p className="sm:text-[8px] md:text-sm text-center">
              Monthly Product Sales
            </p>
          </div>

          {/* box3 */}
          <div className="border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
            <span className="bg-black rounded-full text-white p-3">
              <FontAwesomeIcon icon={faShoppingBag} size="2x" />
            </span>
            <span className="text-xl font-bold">45.5k</span>
            <p className="sm:text-[8px] md:text-sm text-center">
              Customers active on our site
            </p>
          </div>

          {/* box4 */}
          <div className="border-solid border-2 shadow-2xl rounded-md hover:bg-red-500 h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
            <span className="bg-black rounded-full text-white p-3">
              <FontAwesomeIcon icon={faMoneyBill1Wave} size="2x" />
            </span>
            <span className="text-xl font-bold">25k</span>
            <p className="sm:text-[8px] md:text-sm text-center">
              Annual Gross Sales
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutViews;
