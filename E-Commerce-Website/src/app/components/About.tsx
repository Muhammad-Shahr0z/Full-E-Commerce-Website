import Image from "next/image";

function About() {
  return (
    <div className="max-w-[1100px] mx-auto flex justify-center items-start px-4">
      <div className="w-full my-11 flex flex-col sm:flex-col md:flex-row justify-center items-center gap-y-6 md:gap-x-5">
        {/* Left */}
        <div className="w-full sm:w-full md:w-1/2 sm:p-8 md:py-20 md:px-10">
          <h1 className="sm:text-xl md:text-3xl font-bold">Our Story</h1>
          <p className="pt-6 leading-7">
            Launched in 2015, Exclusive is South Asia&apos;s premier online
            shopping marketplace with an active presence in Bangladesh. Supported
            by a wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="mt-5 leading-7">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast rate. Exclusive offers a diverse assortment in categories
            ranging from consumer electronics to fashion.
          </p>
        </div>
        {/* Right */}
        <div className="w-full sm:w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={"/about/aboutImage.png"}
            width={400}
            height={500}
            alt="Mobile"
            className="w-full md:w-[400px] lg:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
