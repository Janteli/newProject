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
      <div className="mt-3 mb-8">
        <div className="flex flex-row justify-center text-[40px]  ">
          <h1 className="font-semibold px-auto py-14 text-center leading-tight space-x-1">
            Run your crypto business with
            <br /> <span className="text-blue-400">Januar</span> Account
          </h1>
        </div>
        <div className="flex flex-row justify-center text-center text-gray-400 font-semibold mt-2">
          <p>
            Enjoy seamless payments and conduct operational
            <br /> transactions with an IBAN account fit for purpose.
          </p>
        </div>
      </div>
      {/* Grid */}
      <div className="bg-gray-100 mt-20">
        <div className="grid grid-cols-12 gap-1 rounded-md">
          {/* Left Column */}
          <div className="col-span-4 bg-gray-200  h-auto w-full grid grid-rows-2 gap-1 overflow- rounded-lg p-4  shadow-md ">
            <div className="row-span-1 p-0 rounded-md">
              <div className="flex flex-col items-center justify-center bg-white">
                <img
                  src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/64830cf49a55d147f46730e7_stine.webp"
                  alt="Profile"
                  className=" rounded-md mb-4 object-cover w-full h-auto"
                />

                <h2 className="text-lg font-bold text-gray-800 pb-4">
                  Stine Pi Halmind
                  <hr className="w-60 h-0.5 bg-black" />
                </h2>

                <div className="flex items-center mt-4 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-sm text-gray-500 ">
                    Verified broker at Januar
                  </p>
                </div>
              </div>
            </div>

            {/* left bottom */}
            <div className="bg-white row-span-1 rounded-md">
              <div className="flex flex-col px-2 ">
                <div className="flex w-full h-12 p-2 justify-start ">
                  <FaArrowLeft className="rounded-full bg-gray-400 p-2 w-8 h-8  " />
                </div>
                <h1 className="mt-2 font-semibold text-lg px-2 mb-2">Send</h1>
                <div className="flex border rounded-md justify-between items-center p-2 mb-1">
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
                <div className="flex border rounded-md justify-between items-center p-2 mb-3">
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
                      <p className="text-[10px]">
                        1,0555 DKK 
                      </p>
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </div>

                <div className="flex border rounded-md justify-between items-center p-2 ">
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
                      <p className="text-[10px]">
                        1,0555 DKK 
                      </p>
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
                      <p className="text-[10px]">
                        1,0555 DKK 
                      </p>
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </div>
                <div className="flex w-full rounded-md mt-6 py-3 mb-8">
                  <button className="bg-black  px-32 py-2 text-[10px] text-white">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-8 h-screen  w-auto grid-rows-2 gap-2 px-4">
            <div className="grid grid-cols-8 row-span-1 h-auto w-auto  gap-2">
                {/* right first top */}
              <div className="col-span-3  h-36">
              
              </div>
              <div className="col-span-3  h-full py-3 rounded-md">
                <img src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6482ef6a2083cf1e58946b03_Operations.svg" alt="grid-right" className="h- w-full rounded-md"/>
              </div>
              <div className="col-span-2 h-36">
                <div className="flex flex-col py-3 rounded-md">
                    <div className="mb-2">
                        <img src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6482f1f521f5a5bb1d5dde5e_dots-in-grid.webp" alt="hill" className="h-[60%]" />
                    </div>
                    <div className="bg-[url('https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6486f5e09ff9c75880dd4dc8_grain.png')] bg-cover bg-center h-20 w-full relative rounded-md" >

                    </div>
                </div>

              </div>
            </div>
            <div className="row-span-1 bg-yellow-300 h-36 w-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageTwo;
