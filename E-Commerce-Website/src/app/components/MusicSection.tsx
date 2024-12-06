import Image from "next/image";

function MusicSection() {
  return (
    <div className="max-w-[1100px] mx-auto flex justify-center items-center mt-10 mb-1 px-4 xl:px-0">
      {/* Box */}
      <div className="w-full bg-gray-950 flex flex-col md:flex-row items-center sm:justify-center md:justify-between sm:items-center md:items-center sm:p-4 md:p-8 rounded-md">
        {/* Left Box */}
        <div className="w-full md:w-[50%] text-center md:text-left">
          <h3 className="text-green-500 font-bold text-sm md:text-lg">
            Categories
          </h3>
          <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-4 leading-tight">
            Enhance Your Music Experience
          </h1>
          {/* Timer */}
          <div className="flex justify-center md:justify-start pt-5 pb-4 gap-2 md:gap-4">
            <div className="bg-gray-50 w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full flex flex-col justify-center items-center">
              <span className="font-bold text-md md:text-lg">23</span>
              <span className="text-xs md:text-sm">Hours</span>
            </div>
            <div className="bg-gray-50 w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full flex flex-col justify-center items-center">
              <span className="font-bold text-md md:text-lg">05</span>
              <span className="text-xs md:text-sm">Days</span>
            </div>
            <div className="bg-gray-50 w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full flex flex-col justify-center items-center">
              <span className="font-bold text-md md:text-lg">59</span>
              <span className="text-xs md:text-sm">Minutes</span>
            </div>
            <div className="bg-gray-50 w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full flex flex-col justify-center items-center">
              <span className="font-bold text-md md:text-lg">35</span>
              <span className="text-xs md:text-sm">Seconds</span>
            </div>
          </div>
          <button className="hidden md:inline-block bg-green-500 hover:bg-green-600 px-6 py-2 text-sm text-white font-bold rounded-sm">
            Buy Now!
          </button>
        </div>
        {/* Right Box */}
        <div className="w-full md:w-[50%] mt-6 md:mt-0 flex flex-col items-center">
          <Image
            src="/music-speaker.png"
            width={500}
            height={500}
            alt="music speaker"
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto object-contain"
          />
          <button className="mt-3 bg-green-500 hover:bg-green-600 px-5 py-2 text-sm text-white font-bold rounded-sm md:hidden my-4">
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default MusicSection;
