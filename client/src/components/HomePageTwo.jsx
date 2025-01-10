import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { PiHandshakeThin } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { BsSuitcaseLgFill } from "react-icons/bs";

const HomePageTwo = () => {
  return (
    // Content
    <div className="bg-white ">
      <div className="md:mt-3 md:mb-8">
        <div className="flex flex-row justify-center text-4xl  ">
          <h1 className="font-normal px-auto py-4 text-center leading-tight space-x-1">
            Run your crypto business with
            <br />{" "}
            <span className="text-blue-600 bg-blue-100 px-2  rounded-md">
              Januar
            </span>{" "}
            Account
          </h1>
        </div>
        <div className="flex flex-row justify-center text-center   mt-2">
          <p className=" text-sm text-gray-300">
            Enjoy seamless payments and conduct operational
            <br /> transactions with an IBAN account fit for purpose.
          </p>
        </div>
      </div>
      {/* Grid */}
      <div className="bg-gray-100 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 rounded-md ">
          {/* Left Column */}
          <div className=" col-span-3 bg-gray-200  h-auto w-full hidden md:grid grid-rows-10 gap-1 overflow- rounded-lg px-4 pt-1  shadow-md   justify-center ">
            <div className="row-span-4  rounded-md  bg- mb-2 flex flex-col  ">
              <img
                src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/64830cf49a55d147f46730e7_stine.webp"
                alt="Profile"
                className=" rounded-md   w-full h-auto"
              />
              <div className="flex flex-col items-center w-full justify-start bg-white">
                <h2 className="text-lg  font-normal text-gray-800 pb- pt-4 mb-3">
                  Stine Pi Halmind
                </h2>
                <hr className="w-60 h-0.5 bg-black" />

                <div className="flex items-center mt-4 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-sm text-gray-500 ">
                    Verified broker at Januar
                  </p>
                </div>
              </div>
            </div>

            {/* left bottom */}
            <div className="hidden md:block bg-white md:row-span-5 rounded-md px-6 w-full ">
              <div className="flex flex-col  pt-4 ">
                <div className="flex w-full justify-start  ">
                  <FaArrowLeft className="rounded-full bg-gray-400  w-4 h-4   " />
                </div>
                <h1 className="mt-2 font-semibold text-lg px-2 mb-2">Send</h1>
                <div className="flex border rounded-sm justify-between items-center p-2 mb-1">
                  <div>
                    <h1 className="font-bold">35,0000</h1>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 "></div>
                    <div>
                      <h2 className="font-semibold ">EUR</h2>
                    </div>
                  </div>
                </div>
                <div className="flex border rounded-sm justify-between items-center p-2 mb-3">
                  <div>
                    <p className="text-[10px]">From</p>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <div>
                      <PiHandshakeThin className="h-6 w-6 rounded-full bg-black text-white p-1" />
                    </div>
                    <div>
                      <p className="text-[10px]">Client</p>
                      <p className="text-[8px] text-gray-400">Danish Crone</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <p className="text-[10px]">1,0555 DKK</p>
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </div>

                <div className="flex border rounded-sm justify-between items-center p-2 ">
                  <div>
                    <p className="text-[10px]">To</p>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <div>
                      <IoPerson className="h-6 w-6 rounded-full bg-black text-white p-1" />
                    </div>
                    <div>
                      <p className="text-[10px]">Starks Industries</p>
                      <p className="text-[8px] text-gray-400">
                        DK93 B50 1101123
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <p className="text-[10px]">1,0555 DKK</p>
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </div>

                <div className="flex border rounded-md justify-between items-center p-2">
                  <div>
                    <p className="text-[10px]">Date</p>
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <div>
                      <BsSuitcaseLgFill className="h-6 w-6 rounded-full bg-black text-white p-1" />
                    </div>
                    <div>
                      <p className="text-[10px]">Today</p>
                      <p className="text-[8px] text-gray-400">3 October 2024</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <p className="text-[10px]">1,0555 DKK</p>
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </div>

                <button className="bg-black  py-2 text-[10px] text-white mt-6">
                  <p>Continue</p>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className=" md:col-span-9 h-screen  w-auto md:grid-rows-12 gap-2 px-4">
            <div className="grid grid-cols-1 md:grid-cols-8  row-span-5 h-auto w-auto  gap-2">
              {/* right first top */}
              <div className="col-span-1 md:col-span-3 bg-red-800  h-auto"></div>
              <div className="col-span-3  h-full py-3 rounded-md">
                <img
                  src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6482ef6a2083cf1e58946b03_Operations.svg"
                  alt="grid-right"
                  className="h-full object-cover w-full rounded-md"
                />
              </div>
              <div className="col-span-2 h-auto">
                <div className="flex justify-between md:flex-col md:py-3 rounded-md">
                  <div className="mb-2">
                    <img
                      src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6482f1f521f5a5bb1d5dde5e_dots-in-grid.webp"
                      alt="hill"
                      className="md:h-[60%] h-[80%] object-cover"
                    />
                  </div>
                  <div className="w-full relative rounded-md ">
                    <img
                      src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6486f5e09ff9c75880dd4dc8_grain.png"
                      className="w-full h-[100px] md:h-[85px] object-cover rounded-md"
                    />
                    <div className="rounded-full  bg-[#CAFC50] h-10 w-10 flex justify-center items-center absolute top-5 left-20 hover:scale-125 transform transition duration-300 ease-in-out">
                      <img
                        src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6482f12f2de566c5d947cb96_add.svg"
                        className="h-6 w-6 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right -bottom */}
            <div className="row-span-5 h-screen w-full ">
              <img
                src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/64916af7cd0e65617559ea56_accounts.png"
                className=" object-fill w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageTwo;
