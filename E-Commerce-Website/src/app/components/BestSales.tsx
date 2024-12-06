import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import {
  faStar as regularStar,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Link from "next/link";

function BestSales() {
  return (
    <main>
      <div className="w-full flex justify-center items-center mt-10 mb-1">
        <div className="w-[90%] max-w-[1100px]">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-red-500 font-bold border-l-4 border-red-400 pl-3">
              This Month
            </h3>
            <div className="flex justify-between items-center mt-2">
              <h1 className="text-gray-800 font-bold text-lg md:text-3xl">
                Best Selling Products
              </h1>
              <Link
                href="#products"
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-md"
              >
                View All
              </Link>
            </div>
          </div>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Product Card 1 */}
            <ProductCard
              imgSrc="/shirt.png"
              name="The North Coat"
              price="$260"
              oldPrice="$360"
              rating={3}
              reviews={88}
            />
            {/* Product Card 2 */}
            <ProductCard
              imgSrc="/prs.png"
              name="Gucci Duffle Bag"
              price="$960"
              oldPrice="$1160"
              rating={1}
              reviews={90}
            />
            {/* Product Card 3 */}
            <ProductCard
              imgSrc="/speaker.png"
              name="RGB Liquid CPU Cooler"
              price="$160"
              oldPrice="$170"
              rating={3}
              reviews={95}
            />
            {/* Product Card 4 */}
            <ProductCard
              imgSrc="/table.png"
              name="Small Bookshelf"
              price="$320"
              oldPrice=""
              rating={4}
              reviews={99}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function ProductCard({ imgSrc, name, price, oldPrice, rating, reviews }: {imgSrc:string, name:string, price:string, oldPrice:string, rating:number, reviews:number}) {
  const stars = Array(5)
    .fill(null)
    .map((_, i) => (
      <FontAwesomeIcon
        key={i}
        icon={i < rating ? solidStar : regularStar}
        className="text-yellow-400"
      />
    ));

  return (
    <div>
      <div className="group relative bg-neutral-100 shadow-md rounded-lg overflow-hidden cursor-pointer h-[220px] flex justify-center items-center">
        {/* image */}
        <Image src={imgSrc} width={150} height={100} alt={name} />
        {/* favorite icon */}
        <span className="absolute top-2 right-2">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-xl text-gray-400 hover:text-red-500"
          />
        </span>
        {/* Add to Cart button */}
        <button className="absolute bottom-0 w-full bg-black text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add to Cart
        </button>
      </div>
      {/* Details */}
      <div className="mt-3">
        <h1 className="font-bold">{name}</h1>
        <div className="flex items-center space-x-2">
          <span className="text-red-500 font-bold">{price}</span>
          {oldPrice && (
            <span className="text-gray-400 line-through">{oldPrice}</span>
          )}
        </div>
        <div className="flex items-center space-x-1 mt-2 text-sm">
          {stars}
          <span className="text-gray-400">({reviews})</span>
        </div>
      </div>
    </div>
  );
}

export default BestSales;
