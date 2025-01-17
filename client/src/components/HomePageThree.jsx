import React from "react";

const HomePageThree = () => {
  return (
    <div>
      <div className="md:mt-24 mt-14">
        <div className="">
          <h1 className="space-x-2 -m-2 text-center md:text-3xl text-2xl font-normal">
            <span className="px-2 md:px-0">Easy.</span>
            <span className="text-blue-600 bg-blue-100 md:px-4 px-2 rounded-sm mr-0">
              Safe.
            </span>
            <span className="bg-gradient-to-r from-[#D8FFA7] to-[#D6F719] md:px-3 px-2 rounded-sm -mr-8">
              Compliant.
            </span>
          </h1>
        </div>
        <div className="mt-8">
          <p className="font-normal text-sm text-gray-500 text-center">
            Demonstrated expertise in ensuring compliance <br /> with the
            established US regulatory framework.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:mt-12 md:px-24 px-4 gap-6">
          <div className="col-span-1 rounded-md md:order-1 order-2">
            <div className="px-2 rounded-md bg-gray-200 py-1 w-32 mb-8">
              <p className="text-xs font-normal">Complaince stack</p>
            </div>
            <h1 className="text-xl font-normal text-[#282828] mb-2">
              Fully integrated, end-to-end
              <br />
              compliance solution stack.
            </h1>

            <div className="mt-6">
              <img src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/648183fb04cb8031b4a91639_divider.svg" />
            </div>

            <div className="flex flex-col mt-6 pr-28">
              {/* <h1 className="text-[12px] font-normal mb-3 mt-2">
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
              </h6> */}

              <ul className="list-disc ">
                <li className="text-sm text-gray-500 mb-2">
                  <span className="font-normal text-[#282828]">
                    Expertise Across All States:
                  </span>
                  We specialize in navigating the nuances of licensing
                  requirements across all U.S. jurisdictions, ensuring your
                  applications are accurate, complete, and fully compliant.
                </li>
                <li className="text-sm text-gray-500 mb-2">
                  <span className="font-normal text-[#282828]">
                    Specialized Blockchain and Crypto Solutions:
                  </span>{" "}
                  Our team anticipates regulatory trends and delivers tailored
                  support for blockchain infrastructure, cryptocurrency
                  businesses, and digital payments innovators.
                </li>
                <li className="text-sm text-gray-500 mb-2">
                  <span className="font-normal text-[#282828]">
                    End-to-End Licensing and Compliance Support From initial:
                  </span>{" "}
                  applications to ongoing compliance management, Code One LLC
                  provides comprehensive consulting services designed to meet
                  your business’s unique needs.
                </li>
                <li className="text-sm text-gray-500 mb-2">
                  <span className="font-normal text-[#282828]">
                    Accelerated Time to Market:
                  </span>{" "}
                  Leveraging proven strategies and strong relationships with
                  state regulators, we streamline licensing and blockchain
                  integration, minimizing delays and expediting
                  your time to market.
                </li>
              </ul>
            </div>
          </div>

          <div className=" col-span-1 bg-gray-100 flex items-center justify-center rounded-md md:order-2 order-1">
            <div className="relative flex items-center justify-center h-96 w-96">
              <div className="absolute inset-0 blur-3xl opacity-95 bg-gradient-to-r from-[#d6f719fb] to-blue-900 rounded-lg z-10"></div>

              <img
                src="../src/assets/images/img1.jpg"
                alt="img1"
                className="h-full inset-0 w-full object-contain z-20 "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[url('https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/64a562b9492999ffae211108_grain_less.png')] bg-cover bg-center h-[600px] rounded-md md:mt-32 mt-12">
        <div className="col-span-1 max-h-[600px] w-full px-6 pt-2 rounded-md py-4">
          <div className="w-full h-full pt-4">
            <img
              src="../src/assets/images/stck.jpg"
              alt="person"
              className="rounded-md w-full h-full inset-0 object-cover object-right"
            />
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center relative md:p-6 rounded-lg shadow-lg">
          <div className="hidden md:block md:absolute top-4 right-28 bg-transparent bg-opacity-50 px-4 py-2 rounded-lg">
            <h1 className="text-white font-normal text-sm mb-4">
              We expertly guide businesses through licensing and regulatory
              requirements with safety and compliance assured.
            </h1>
            <h1 className="text-white font-normal text-2xl ">
              Industries We Serve
            </h1>
          </div>
          <div className="absolute bottom-2 right-2 bg-transparent bg-opacity-50 flex flex-wrap gap-2 w-96 justify-center md:justify-end">
            <h6 className="text-gray-100 border rounded-sm bg-transparent border-gray-100 px-3 py-2 font-light text-xs">
              • Fintech Companies
            </h6>
            <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">
              • Cryptocurrency Firms
            </h6>
            <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">
              • Remittance Services
            </h6>
            <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">
              • E-commerce Platforms
            </h6>
            <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">
              DAO's
            </h6>
            <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">
              • Institutional investors
            </h6>
            <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">
              • Family Offices
            </h6>
            <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">
              • Traders
            </h6>
            <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">
              • Investment funds
            </h6>
            <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">
              • Brokers
            </h6>
            <h6 className="text-gray-300 border rounded-sm bg-transparent border-gray-300 px-3 py-2 font-light text-xs">
              • Exchange
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageThree;
