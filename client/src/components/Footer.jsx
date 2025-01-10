import React from "react";

const Footer = () => {
  return (
    <div className="mt-16 ">
      <div className="md:px-20 px-2 mb-8">
        <div className="flex  justify-between bg-gradient-to-r from-[#C2E485] to-[#D7F825]   rounded-lg shadow-lg ">
          {/* Left Image */}
          <div className="w-1/3 ">
            <img
              src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6486dcbf50b15da4c3b6ad20_janus-cta.webp"
              alt="Artistic face"
              className=" rounded-l-lg h-72 w-2/5"
            />
          </div>

          {/* Right Content */}
          <div className="w-2/3 text-center  md:-ml-56 -ml-96">
            <h1 className="md:text-4xl text-3xl font-normal text-black text-center">
              Let’s get started
            </h1>
            <p className="text-sm text-[#63B145]">
            Navigating the U.S. Money Transmitter License process and crypto/blockchain compliance doesn’t have to be daunting. At Code One LLC, we simplify the journey, helping your business thrive in a rapidly evolving financial and technological landscape.
            </p>
            <div className="space-x-4">
              <button className="px-3 py-2 bg-black text-white text-sm font-normal rounded-md hover:bg-gray-800">
                Book a demo
              </button>
              <button className="px-3 py-2 text-black text-sm bg-white font-normal rounded-md hover:bg-gray-800">
                Get started today
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* lower part */}

      <div className="bg-[url('https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/64a562b9492999ffae211108_grain_less.png')] h-fit grid grid-rows-2 md:gap-20  relative  md:mt-24 px-2">
        <div className="row-span-1">
          <div className="grid grid-cols-12">
            <div className="md:col-span-8 col-span-10 md:pl-24 md:py-10">
              <div className=" text-white md:text-4xl text-3xl  font-normal pt-3 pl-2">
                <h1 className="leading-tight  text-left -mb-6">
                  Building a more <br />
                  inclusive and open <br />
                  financial system.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-1">
          <div className="grid md:grid-cols-12 grid-cols-2">
            <div className="md:col-span-5 col-span-2 md:pl-24 md:mt-10 mb-4">
              
                <p className=" text-xs font-light text-gray-300 md:mb-6">
                  Januar ApS is a Payment Institute with a license granted by
                  <br />
                  the Danish Financial Supervisory Authority (Finanstilsynet)
                  <br /> (FTID:22045). Januar ApS is incorporated in Denmark,
                  <br />
                  registered at Gothersgade 14, 4. sal , 1123 Copenhagen K,
                  <br /> Denmark, with company registration number (CVR)
                  <br />: 38891294. The company is allowed to operate across all
                  EEA
                  <br /> markets under the European passport regime.
                </p>
                <p className="text-gray-100 text-xs mt-4">
                  <span>REDEGØRELSE: </span>
                  <span className="text-gray-50 text-xs">
                    Report on Inspection at Januar ApS by <br /> Danish
                    Financial Supervisory Authority (Finanstilsynet)
                  </span>
                </p>
              
            </div>
            {/* <div className="col-span-2"> */}
              {/* <div className="flex  gap-36"> */}
                <div className="md:col-span-2 col-span-1">
                  <p className="text-white text-[12px] text-semibold mb-4">
                    Products
                  </p>
                  <p className="text-gray-300 text-xs font-light mb-3">
                    Januar Account
                  </p>
                  <p className="text-gray-300 text-xs font-light mb-3">
                    Januar Instant
                  </p>
                  <p className="text-gray-300 text-xs font-light mb-3">
                    Januar Wallet
                  </p>
                  <p className="text-gray-300 text-xs font-light mb-3">Januar Trade</p>
                </div>
                <div className="md:col-span-2 col-span-1">
                  <p className="text-white text-[12px] text-semibold mb-4">
                    Services
                  </p>
                  <p className="text-gray-300 text-xs font-light">Januar Flow</p>
                </div>
                <div className="md:col-span-2 col-span-1">
                  <p className="text-white text-[12px] text-semibold mb-4">
                    Company
                  </p>
                  <p className="text-gray-300 text-xs font-light mb-3">About Januar</p>
                  <p className="text-gray-300 text-xs font-light mb-3">Career</p>
                  <p className="text-gray-300 text-xs font-light mb-3">Partners</p>
                  <p className="text-gray-300 text-xs font-light mb-3">Contact</p>
                </div>
                <div className="col-span-1">
                  <p className="text-white text-[12px] text-semibold mb-4">
                    What's new
                  </p>
                  <p className="text-gray-300 text-xs font-light mb-3">News</p>
                  <p className="text-gray-300 text-xs font-light mb-3">Twitter</p>
                  <p className="text-gray-300 text-xs font-light mb-3">Linkedin</p>
                </div>
              {/* </div> */}
            {/* </div> */}
            <div className="bg-[#121212] text-gray-300 text-xs font-light absolute bottom-0 left-0 w-full">hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
