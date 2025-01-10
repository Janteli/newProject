import React from "react";
import ServiceOne from "../components/ServiceOne";
import ServiceTwo from "../components/ServiceTwo";
import ServiceThree from "../components/ServiceThree";
import ServiceFour from "../components/ServiceFour";
import ServiceFive from "../components/ServiceFive";
import ServiceSix from "../components/ServiceSix";

const Services = () => {
  return (
    <>
      <div className="  mt-40 shadow-md rounded-sm mb-10">
        <p className="text-sm font-light text-gray-600 text-center">
          We offer comprehensive services to help businesses navigate the
          complexities of Money Transmitter License (MTL) <br />
          applications, regulatory compliance, blockchain integration, and
          licensing expansion. From managing state-specific <br />
          requirements to providing tailored crypto compliance strategies and
          financial solutions, our expertise ensures seamless operations,
          <br /> regulatory readiness, and strategic growth for fintech and
          blockchain businesses.
        </p>
        <h3 className="font-normal text-3xl text-center"> Services...</h3>

        <div className="flex flex-col items-center">
          <div className="mb-3">
            <button
              onClick={() =>
                document
                  .getElementById("service-one")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="border border-green-700 rounded-sm px-2 py-2 hover:scale-105 cursor-pointer text-xs text-green-600"
            >
              MTL Application Management
            </button>
          </div>
          <div className="flex gap-3 mb-3">
            <button  onClick={() => document.getElementById("service-two").scrollIntoView({ behavior: "smooth" })}
    className="border border-yellow-600 rounded-sm px-2 py-2 hover:scale-105 cursor-pointer text-xs text-yellow-700">
              Regulatory Advisory and Compliance Support
            </button>
            <button  onClick={() => document.getElementById("service-three").scrollIntoView({ behavior: "smooth" })}
    className="border border-pink-700 rounded-sm px-2 py-2 hover:scale-105 cursor-pointer text-xs text-pink-600">
              {" "}
              Crypto and Blockchain Compliance Solutions
            </button>
          </div>
          <div className="flex gap-3 mb-3">
            <button  onClick={() => document.getElementById("service-four").scrollIntoView({ behavior: "smooth" })}
    className="border border-red-500 rounded-sm px-2 py-2 hover:scale-105 cursor-pointer text-xs text-red-400">
              Blockchain Infrastructure Consulting
            </button>
            <button  onClick={() => document.getElementById("service-five").scrollIntoView({ behavior: "smooth" })}
    className="border border-yellow-400 rounded-sm px-2 py-2 hover:scale-105 cursor-pointer text-xs text-yellow-300">
              Licensing Expansion and Strategic Planning
            </button>
            <button  onClick={() => document.getElementById("service-six").scrollIntoView({ behavior: "smooth" })}
    className="border border-pink-400 rounded-sm px-2 py-2 hover:scale-105 cursor-pointer text-xs text-pink-300">
              Surety Bond and Financial Requirement Solutions
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[url('https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/649977b69a5cbbcf87cd7d89_hero-januar-flow-p-800.webp')] bg-cover bg-center">
        <div id="service-one">
          <ServiceOne />
        </div>

        <div id="service-two">
          <ServiceTwo />
        </div>
        <div className="w-full h-64 mt-4 px-8 rounded-md mb-8">
          <img
            src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4087184/cover_image/regular_1708x683/Untitled-c7f4c86ddb44556b00a31a37e4219c3d.png"
            alt="Image"
            class="w-full h-full object-cover"
          />
        </div>
        <div id="service-three">
          <ServiceThree />
        </div>
        <div id="service-four">
          <ServiceFour />
        </div>
        <div id="service-five">
          <ServiceFive />
        </div>
        <div id="service-six">
          <ServiceSix />
        </div>
      </div>
    </>
  );
};

export default Services;
