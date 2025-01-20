import React from "react";

const ServiceTwo = () => {
  return (
    <section className="flex flex-row gap-20">
      <div className="md:w-2/3 w-full flex md:gap-36 gap-0 pl-1">
        <div className="px-2 py-14">
          <h1 className="text-sm font-normal text-gray-700">
            2.Regulatory Advisory and Compliance Support
          </h1>
        </div>
        <div className="pl-1 pr-0 py-4">
          <ul class="list-disc list-inside text-gray-600 space-y-2  font-normal">
            <li class="text-xs font-normal">
              In-depth analysis of state-by-state MTL requirements tailored to
              your business model.
            </li>
            <li class="text-xs font-normal">
              Development of compliance frameworks aligned with federal, state,
              and cryptocurrency regulations.
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

export default ServiceTwo;
