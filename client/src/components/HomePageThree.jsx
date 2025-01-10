import React from "react";

const HomePageThree = () => {
  return (
    <div>
      <div className="md:mt-32 ">
        <div className="">
          <h1 className=" text-center text-[30px] font-normal">
            Easy.
            <span className="text-blue-600 bg-blue-100 px-4 rounded-sm mr-0">
              Safe.
            </span>
            <span className="bg-gradient-to-r from-[#D8FFA7] to-[#D6F719] px-3 rounded-sm -mr-8">Compliant.</span>
          </h1>
        </div>
        <div className="mt-10">
          <p className="font-normal text-sm text-gray-500 text-center">
            Committed to best practices in compliance with an <br /> obtained EU
            regulatory license to prove it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-32 md:px-24 px-4 gap-6">
          <div className="col-span-1 rounded-md md:order-1 order-2">
            <div className="px-2 rounded-md bg-gray-200 py-1 w-32 mb-8">
              <p className="text-xs font-normal">Complaince stack</p>
            </div>
            <h1 className="text-[22px] font-normal mb-2">
              Our comprehensive <br />
              compliance stack
            </h1>

            <div className="mt-6">
              <img src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/648183fb04cb8031b4a91639_divider.svg" />
            </div>

            <div className="flex flex-col mt-6 pr-56">
              <h1 className="text-[12px] font-normal mb-3 mt-2">
                Licensed with the Danish FSA
              </h1>
              <hr className="h-0.5 bg-gray-400 w-full" />
              <h1 className="text-[12px] font-normal mb-3 mt-3">
                {" "}
                Complaint with EU 5AMLD
              </h1>
              <hr className="h-0.5 bg-gray-400 w-full" />
              <h1 className="text-[12px] font-normal mb-3 mt-3">
                Transaction monitoring
              </h1>
              <hr className="h-0.5 bg-gray-400 w-full" />
              <h6 className="text-[12px] font-normal mb-3 mt-3">
                Seamless onboarding
              </h6>
            </div>
          </div>

          <div className=" col-span-1 bg-gray-300 flex items-center justify-center rounded-md md:order-2 order-1">
            <div className="flex items-center justify-center h-96 w-96">
              <img
                src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6499418e8e5e9efd16b78ffc_Stack.webp"
                className="h-64 w-64"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[url('https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/64a562b9492999ffae211108_grain_less.png')] bg-cover bg-center h-[600px] rounded-md mt-32">
        <div className="col-span-1 max-h-[500px] w-full px-6 pt-2 rounded-md py-4">
          <div className="py-3">
            <img
              src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/64918eb6270212395eb81c97_statement-jimmi-p-800.webp"
              alt="person "
              className="rounded-md w-full h-[560px] object-cover"
            />
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center relative md:p-6 rounded-lg shadow-lg">
          <div className="hidden md:block md:absolute top-4 right-28 bg-transparent bg-opacity-50 px-4 py-2 rounded-lg">
             <h1 className="text-white font-normal text-sm mb-4">
             We make it easy, safe, and compliant to navigate licensing and regulatory requirements seamlessly.
            </h1>
            <h1 className="text-white font-normal text-2xl ">
            Industries We Serve
            </h1>
            {/* <h1 className="text-white font-normal text-2xl pl-16 -mt-2">
              solution for business
            </h1>
            <h1 className="text-white font-normal text-[25px] pl-20 -mt-2">
              payment accounts
            </h1> */}
          </div>
          <div className="absolute bottom-2 right-2 bg-transparent bg-opacity-50 flex flex-wrap gap-2 w-96 justify-center md:justify-end">
            
              <h6 className="text-gray-100 border rounded-sm bg-transparent  border-gray-100 px-3 py-2 font-light text-xs">• Fintech Companies</h6>
              <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">•	Cryptocurrency Firms</h6>
              <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">•	Remittance Services</h6>
              <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">•	E-commerce Platforms</h6>
              <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">DAO's</h6>
              <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">Institutional investors</h6>
              <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">Family Offices</h6>
              <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">Traders</h6>
              <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">Investment funds</h6>
              <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">Brokers</h6>
              <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">Exchange</h6>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageThree;
