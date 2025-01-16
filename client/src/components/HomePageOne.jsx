import React from "react";

const HomePageOne = () => {
  return (
    <>
      <div className="bg-gray-100 ">
        <div className="md:mt-3 mb-0">
          <div className="flex flex-row justify-center   md:pt-14 pt-8">
            <h1
              className="bg-custom-gradient bg-200% md:text-3xl text-lg text-black md:px-auto md:py-5 text-center leading-10 space-x-1"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <span className="  px-2 rounded-md ">
                Money Transmitter License Consulting,
              </span>
              <br />
              <span className="text  px-2 rounded-md">
                MSB, Crypto
              </span>{" "}
              and{" "}
              <span className="text-indigo-700 px-2 rounded-md">
                Fintechs
              </span>
            </h1>
          </div>
          <div className="flex flex-row justify-center  text-center  font-semibold mt-6">
            <p className="font-normal text-sm text-gray-500 tracking-tighter mb-4">
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
          <div className="mt-2 pr-0">
            <div className="flex items-center justify-center">
              {/* <button className="px-3 py-1.5  bg-black text-white rounded-md hover:bg-gray-800 text-sm font-semibold">
                <p className="font-normal">Get started today</p>
              </button> */}
              <button className="px-3 py-1.5 border border-black rounded-md hover:bg-gray-100 text-sm font-semibold">
                <p className="font-normal">Book a meeting</p>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="flex mx-auto relative">
          <div className="md:h-auto w-full  md:mt-20 mt-10 mx-auto md:px-36 px-6">
            <img
              src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/64f9c80614d73468d96c09c5_product-dashboard-p-1080.webp"
              alt="data"
              className="md:w-98 w-full"
            />
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none"></div>
          </div>
        </div> */}
        <div className="bg-[url('https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6638da64d5cb186f294a9288_6481b8ee8b4dcf6bfed04a03_januar-world%20(1)-poster-00001.jpg')] w-full min-h-[550px] mt-12 rounded-md shadow-md relative border px-2 ">
          <video
            src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6638da64d5cb186f294a9288_6481b8ee8b4dcf6bfed04a03_januar-world%20(1)-transcode.mp4"
            className="absolute inset-0 w-[calc(100%-20px)] h-full object-cover mx-2"
            autoPlay
            loop
            muted
          />

          {/* <div className="absolute left-2 bottom-2 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl font-normal mb-4">24/7</h1>
          <p className="text-xs text-left max-w-xl font-light">
            Always open <br /> Even on <br /> weekends
          </p>
        </div> */}

          {/* <div className="absolute left-36 bottom-2 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl font-normal mb-4">Instant</h1>
          <p className="text-xs text-left max-w-xl font-light">
            Real-time <br /> fiat <br /> settlement
          </p>
        </div> */}

          <div className="absolute left-12 bottom-6 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-2xl font-normal mb-4">150+</h1>
            <p className="text-xs text-left max-w-xl font-light">
              Countries <br /> supported
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageOne;
