import React from "react";

const HomePageThree = () => {
  return (
    <div className="mt-32">
      <div className="">
        <h1 className="text-center text-[30px] font-bold">
          Easy.
          <span className="text-blue-600 bg-blue-200 px-2 rounded-md">
            Safe.
          </span>{" "}
          <span>Compliant.</span>
        </h1>
      </div>
      <div className="mt-10">
        <p className="text-gray-500 text-center">
          Committed to best practices in compliance with an <br /> obtained EU
          regulatory license to prove it.
        </p>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="col-span-1 ">
          <div className="px-2 rounded-md bg-gray-300 py-1 mr-[78%] mb-8">
            <p className="text-sm font-semibold">Complaince stack</p>
          </div>
          <h1 className="text-[22px] font-semibold">
            Our comprehensive <br />
            compliance stack
          </h1>
        </div>

        <div className="bg-gray-500 col-span-1">HELLO</div>
      </div>
    </div>
  );
};

export default HomePageThree;
