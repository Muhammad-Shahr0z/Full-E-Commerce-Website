import Image from "next/image";

function Signup() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-0 py-10">
      {/* Main container, flex column on smaller screens and flex row on larger screens */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-10 sm:space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left: Image Section */}
        <div className="w-full lg:w-[50%] flex justify-center items-center">
          <Image
            src={"/signup/mobile.png"}
            width={600}
            height={600}
            alt="Mobile"
            className="object-contain max-w-full max-h-full mb-5 sm:mb-0"
          />
        </div>

        {/* Right: Form Section */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-center">
          <div className="w-full max-w-[400px]">
            <h1 className="text-2xl sm:text-lg lg:text-3xl font-semibold text-center">
              Create an account
            </h1>
            <p className="text-sm text-center pt-2">Enter your details below</p>

            <form className="mt-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full py-2 px-3 mt-4 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full py-2 px-3 mt-4 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full py-2 px-3 mt-4 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />

              <input
                className="w-full py-2 px-4 mt-5 bg-red-500 hover:bg-red-600 text-white rounded-md cursor-pointer"
                type="button"
                value="Create Account"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;