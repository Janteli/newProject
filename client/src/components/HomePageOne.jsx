import React from "react";

const HomePageOne = () => {
  return (
    <>
      <div className="bg-gray-100 ">
        <div className="md:mt-3 mb-0">
          <div className="flex flex-row justify-center   md:pt-14 pt-8">
            <h1 className="md:text-3xl text-lg text-black md:px-auto md:py-5 text-center leading-normal space-x-1">
              Your{" "}
              <span className="bg-gradient-to-r from-[#C2E485] to-[#D7F825] px-2 rounded-md">
                Trusted Partner{" "}
              </span>
              in{" "} <br/>
              <span className=" bg-gradient-to-r from-[#79a387] to-[#2aeb40] px-2 rounded-md ">
                Money Transmitter License Consulting
              </span>
              , <br />
              <span className="text-blue-400 bg-blue-100 px-2 rounded-md">
                Crypto
              </span>{" "}
              and{" "}
              <span className="text-indigo-700 bg-indigo-100 px-2 rounded-md">
                Blockchain Business Compliance
              </span>
            </h1>
          </div>
          <div className="flex flex-row justify-center  text-center  font-semibold mt-6">
            <p className="font-normal text-sm text-gray-400 tracking-tighter mb-4">
              At Code One LLC, we specialize in guiding businesses through the
              intricate regulatory landscape of Money Transmitter Licensing
              (MTL) <br /> and the rapidly evolving compliance requirements for
              cryptocurrency and blockchain-based <br /> businesses in the
              United States.
              {/* <br /> services through our account and payment solutions. */}
            </p>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-center items-center mt-2">
          <div className="mt-2 pr-5">
            <div className="flex space-x-2">
              <button className="px-3 py-1.5  bg-black text-white rounded-md hover:bg-gray-800 text-sm font-semibold">
                <p className="font-normal">Get started today</p>
              </button>
              <button className="px-3 py-1.5 border border-black rounded-md hover:bg-gray-100 text-sm font-semibold">
                <p className="font-normal">Book a demo</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex mx-auto relative">
          <div className="md:h-auto w-full  md:mt-20 mt-10 mx-auto md:px-36 px-6">
            <img
              src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/64f9c80614d73468d96c09c5_product-dashboard-p-1080.webp"
              alt="data"
              className="md:w-98 w-full"
            />
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageOne;
