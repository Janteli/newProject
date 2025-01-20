import React from "react";

const ServiceOne = () => {
  return (
    <section className=" flex flex-row gap-20">
      <div className="md:w-2/3 w-full flex md:gap-48 gap-2 md:pl-1">
        <div className="md:pl-2 md:pr-11 py-14">
          <h1 className="text-xs font-normal text-gray-700">
            1.MTL Application Management
          </h1>
        </div>
        <div className="px-2 py-4">
          <ul class="list-disc list-inside text-gray-600 space-y-2  font-normal">
            <li class="text-xs font-normal">
              Comprehensive preparation and submission of Money Transmitter
              License applications for all 50 states.
            </li>
            <li class="text-xs font-normal">
              Assistance with meeting state-specific financial requirements,
              such as net worth thresholds and surety bonds.
            </li>
            <li class="text-xs font-normal">
              Guidance on creating robust compliance policies, including AML,
              KYC, and Permissible Investments.
            </li>
          </ul>
        </div>
      </div>
      <div
        className='md:w-1/3 hidden bg-[#8d77f9] bg-[url("https://cdn.prod.website-files.com/646f3c0d1e3793b…9003b88c5c472935ad39_statement-purple-pattern.png
")] md:flex justify-center items-center'
      >
        <div>
        <h1>Am I doing good?</h1>
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
