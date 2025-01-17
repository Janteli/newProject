import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { PiHandshakeThin } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { BsSuitcaseLgFill } from "react-icons/bs";
import Stack from "../../public/img3.webp"
const HomePageTwo = () => {
  return (
    // Content
    <div className="bg-white ">
      <div className="md:mt-3 md:mb-8">
        <div className="flex flex-row justify-center">
          <h1
            className="font-normal bg-custom-gradient md:text-3xl  py-4 text-center leading-tight space-x-1 whitespace-nowrap"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span>Trusted Partner in</span>
            <br />
            <span className="text-blue-600 rounded-md">
              Money Transmitter License and <br />
            </span>

            <span> Blockchain Business Strategy. </span>
          </h1>
        </div>

        <div className="flex flex-row justify-center text-center mt-2">
          <p className=" text-sm text-gray-500">
            Enjoy seamless payments and conduct operational
            <br /> transactions with an IBAN account fit for purpose.
          </p>
        </div>
      </div>

      <div className="w-full h-96 border rounded-md relative mt-4 z-10">
        <img
          src={Stack}
          alt="stack"
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute bottom-0 left-0 w-full h-48  bg-gradient-to-t from-yellow-300/80 via-yellow-400/60 to-transparent blur-3xl z-20"></div>
      </div>
    </div>
  );
};

export default HomePageTwo;
