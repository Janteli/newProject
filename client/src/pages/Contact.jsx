import React from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div className="mt-32">
        <div className=" h-screen">
          <h1 className="text-center text-4xl leading-tight mb-4">
            <span className="bg-gradient-to-r from-[#C2E485] to-[#D7F825] px-2 rounded-md">
              Reach out
            </span>
            to us <br />
            <span className="text-blue-500 bg-blue-100 px-2 rounded-md">
              we're ready
            </span>
            to talk
          </h1>

          <p className="text-md font-light text-gray-400 text-center mb-20">
            Our aim to provide the best customer service experience <br /> in
            the industry. How may we help you?
          </p>

          <div className="flex justify-center items-center mt-6">
            <div className="bg-slate-500 rounded-md shadow-lg px-8 py-10">
              <div className="flex  gap-4 mb-6">
                <div>
                  <IoCalendarNumberOutline className="text-red-600 h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-md text-gray-600">
                    {" "}
                    Schedule a Consultation
                  </h3>{" "}
                  <p className="text-xs text-gray-400">
                    Book your meeting through Calendly or a preferred scheduling
                    app.
                  </p>
                </div>
              </div>
              <div className="flex  gap-4 mb-6">
                <div>
                  <BsFillTelephoneFill className="text-red-600 h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-md text-gray-600"> Contact Us Today:</h3>
                  <p className="text-xs text-gray-400">
                    Book your meeting through Calendly or a preferred scheduling
                    app.
                  </p>
                </div>
              </div>
              <div className="flex r gap-4 mb-6">
                <div>
                  <MdOutlineEmail className="text-red-600 h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-md text-gray-600"> Email Us:</h3>{" "}
                  <p className="text-xs text-gray-400">
                    Send an inquiry to inquiry@protonmail.com
                  </p>
                </div>
              </div>
              <div className="flex  gap-4 mb-6">
                <div>
                  <IoIosGlobe className="text-red-600 h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-md text-gray-600"> Visit Our Website:</h3>{" "}
                  <p className="text-xs text-gray-400">
                    Learn more at www.codeonellc.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
