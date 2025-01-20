import React from "react";
import { Link } from "react-router-dom";

const HomePageOne = () => {
  return (
    <>
      <div className="bg-gray-100 md:mx-5">
        <div className="md:mt-3 mb-0">
          {/* Heading Section */}
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:pt-14 pt-8 px-4">
            <h1
              className="bg-custom-gradient bg-200% md:text-3xl text-2xl text-black px-4 md:py-5 text-center md:leading-10 space-x-1 whitespace-normal"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Money Transmitter License Consulting,
              <br />
              MSB, Crypto and Fintechs
            </h1>
          </div>

          {/* Paragraph Section */}
          <div className="flex flex-col md:flex-row items-center justify-center text-center font-semibold mt-6">
            <p className="font-normal text-sm text-gray-500 tracking-tighter mb-4 max-w-3xl md:px-8">
              At Code One LLC, we specialize in guiding businesses through the
              intricate regulatory landscape of Money Transmitter Licensing
              (MTL)
              <br />
              and the rapidly evolving compliance requirements for
              cryptocurrency and blockchain-based businesses in the United
              States.
            </p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-center items-center mt-4">
          <div className="mt-2">
            <Link to="book-a-demo">
              <button className="px-3 py-1.5 border border-black rounded-md hover:bg-gray-100 text-sm font-semibold">
                <p className="font-normal">Book a meeting</p>
              </button>
            </Link>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative bg-[url('https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6638da64d5cb186f294a9288_6481b8ee8b4dcf6bfed04a03_januar-world%20(1)-poster-00001.jpg')] w-full min-h-[550px] mt-12 rounded-md shadow-md border px-2">
          <video
            src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6638da64d5cb186f294a9288_6481b8ee8b4dcf6bfed04a03_januar-world%20(1)-transcode.mp4"
            className="absolute inset-0 w-[calc(100%-20px)] h-full object-cover mx-2 rounded-md"
            autoPlay
            loop
            muted
          />

          {/* Information Section */}
          <div className="absolute left-6 bottom-6 flex flex-col items-start text-white px-4">
            <h1 className="text-2xl font-normal mb-2">150+</h1>
            <p className="text-xs font-light leading-tight">
              Countries <br /> supported
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageOne;
