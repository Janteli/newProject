import React from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="md:mt-32 mt-20 md:px-12 px-6">
        <div className=" h-fit">
          <h1 className="text-center md:text-3xl text-2xl leading-tight mb-4">
            <span className="bg-gradient-to-r from-[#C2E485] to-[#D7F825] px-2 rounded-md">
              Reach out
            </span>
            to us <br />
            <span className="text-blue-500 bg-blue-100 px-2 rounded-md">
              we're ready
            </span>
            to talk
          </h1>

          <p className="text-sm font-light text-gray-400 text-center md:mb-20">
            Our aim to provide the best customer service experience <md:br /> in
            the industry. How may we help you?
          </p>

          <div className="grid md:grid-cols-12 md:grid-rows-2 grid-rows-4 grid-cols-1 mt-6 gap-4 mb-10">
            <div className="row-span-1 col-span-6 py-14 px-6 shadow-lg">
              <Link to="/book-a-demo">
                <div className="flex  gap-4 mb-6 cursor-pointer">
                  <div className="flex items-center justify-center">
                    <IoCalendarNumberOutline className="text-red-400 h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-md text-gray-600">
                      Schedule a Consultation
                    </h3>
                    <p className="text-xs text-gray-400">
                      Book your meeting through Calendly or a preferred
                      scheduling app.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="row-span-1 col-span-6 pt-14 px-6 shadow-lg">
              <div className="flex  gap-4 mb-6">
                <div className="flex items-center justify-center">
                  <BsFillTelephoneFill className="text-pink-400 h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-md text-gray-600"> Contact Us Today:</h3>
                  <p className="text-xs text-gray-400">
                  Call us at [Insert Phone Number].
                  </p>
                </div>
              </div>
            </div>
            <div className="row-span-1 col-span-6 pt-14 px-6 shadow-lg">
              <div className="flex  gap-4 mb-6">
                <div className="flex items-center justify-center">
                  <MdOutlineEmail className="text-green-400 md:h-8 md:w-8 h-4" />
                </div>
                <div>
                  <h3 className="text-md text-gray-600"> Email Us:</h3>
                  <p className="text-xs text-gray-400">
                    Send an inquiry to inquiry@protonmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="row-span-1 col-span-6 pt-14 px-6 shadow-lg">
              <div className="flex  gap-4 mb-6">
                <div className="flex items-center justify-center">
                  <IoIosGlobe className="text-blue-400 h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-md text-gray-600"> Visit Our Website:</h3>
                  <Link to ="/">
                  <p className="text-xs text-blue-400 cursor-pointer">
                    Learn more at <u>www.codeonegroup.com</u>
                  </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-slate-500 rounded-md shadow-lg px-8 py-10">
              
              
              
              <div className="flex  gap-4 mb-6">
                <div>
                  <IoIosGlobe className="text-red-600 h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-md text-gray-600"> Visit Our Website:</h3>
                  <p className="text-xs text-gray-400">
                    Learn more at www.codeonellc.com
                  </p>
                </div>
              </div>
            </div> */}
    </>
  );
};

export default Contact;
