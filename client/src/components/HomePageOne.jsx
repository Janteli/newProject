import React from "react";

const HomePageOne = () => {
  return (
    <>
      <div className="bg-gray-100 ">
        <div className="mt-3 mb-0">
          <div className="flex flex-row justify-center text-[40px]  ">
            <h1 className="font-semibold px-auto py-14 text-center leading-tight space-x-1">
              The <span>financial</span> infrastructure partner
              <br /> for crypto{" "}
              <span className="text-blue-400">businesses</span>
            </h1>
          </div>
          <div className="flex flex-row justify-center text-center text-gray-600 font-semibold mt-2">
            <p>
              We provide easy, compliant and secure access to financial
              <br /> services through our account and payment solutions.
            </p>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-center items-center">
          <div className="mt-2 pr-5">
            <div className="flex space-x-2">
              <button className="px-3 py-1.5 font-bold bg-black text-white rounded-md hover:bg-gray-800 text-sm">
                Get started today
              </button>
              <button className="px-3 py-1.5 border border-black rounded-md hover:bg-gray-100 text-sm">
                Book a demo
              </button>
            </div>
          </div>
        </div>
       <div className="flex mx-auto">
       <div className="h-auto  mt-20 mx-auto px-36">
      <img src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/64f9c80614d73468d96c09c5_product-dashboard-p-1080.webp" alt="data" className="w-98"/>
      </div>
       </div>
      </div>

    </>
  );
};

export default HomePageOne;
