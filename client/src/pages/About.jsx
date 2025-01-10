import React from "react";
import Cart from "../components/Cart";

const About = () => {
  return (
    <>
      <section className="h-screen mt-20 w-full">
        <div className="flex flex-col md:flex-row gap-2 ">
          <div className="  bg-slate-500 md:w-1/2 md:pl-40 md:pr-5 md:py-10 md:order-1 order-1">
            <h1 className="text-sm text-slate-800 text-center bg-slate-100 px-2 rounded-sm mb-6">
              Who are we
            </h1>
            <h1 className="text-slate-800 mb-3">About Code One LLC</h1>

            <img
              src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/648183fb04cb8031b4a91639_divider.svg"
              className="mb-3"
            />

            <p className="text-xs text-slate-700">
              At Code One LLC, we specialize in guiding businesses through the
              intricate regulatory landscape of Money Transmitter Licensing
              (MTL) and the rapidly evolving compliance requirements for
              cryptocurrency and blockchain-based businesses in the United
              States. Our team of seasoned compliance professionals, regulatory
              experts, and legal consultants is dedicated to empowering fintech
              companies, payment processors, cryptocurrency firms, and
              blockchain enterprises to achieve operational excellence while
              navigating complex regulations. Whether you’re a startup entering
              the market or an established company seeking to expand across
              state lines, Code One LLC provides the expertise you need to
              navigate the MTL process and ensure compliance with crypto and
              blockchain-specific regulations with confidence and precision.
            </p>
          </div>
          <div className="  bg-slate-500 md:order-2 order-2 ">
            <img
              src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/64abb44d752f2e9019fc3a9a_about-januar-p-1080.webp"
              className="h-96 object-cover w-full "
            />
          </div>
        </div>

        {/* why to choose? */}

        <div className="flex flex-col md:flex-row gap-2 mt-10 ml-40  ">
          <div className="  bg-slate-500 md:w-11/12 md:pr-8 md:pl-32 md:py-10 md:order-1 order-1">
            <h1 className="text-sm text-slate-800 text-center bg-slate-100 px-2 rounded-sm mb-6">
              Why Choose Code One LLC?
            </h1>
            <h1 className="text-slate-800 mb-3">About Code One LLC</h1>

            <img
              src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/648183fb04cb8031b4a91639_divider.svg"
              className="mb-3"
            />

            <p className="text-xs text-slate-700">
              • Expertise Across All States We understand the nuances of
              licensing requirements across every U.S. jurisdiction, ensuring
              your applications are complete and compliant. • Specialized
              Blockchain and Crypto Solutions Our team stays ahead of regulatory
              trends, offering customized support for blockchain infrastructure,
              cryptocurrency firms, and digital payments innovators. •
              End-to-End Licensing and Compliance Support From initial
              application to ongoing compliance management, Code One LLC
              provides comprehensive consulting tailored to your unique business
              needs. • Accelerated Time to Market With proven strategies and
              strong relationships with state regulators, we help you secure
              licenses and integrate blockchain solutions efficiently, reducing
              time-to-market delays. ________________________________________
            </p>
          </div>
          <div className="  bg-slate-500  md:order-2 order-2 ">
            <img
              src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/64abb44d752f2e9019fc3a9a_about-januar-p-1080.webp"
              className="h-96 object-cover w-full "
            />
          </div>
        </div>
      </section>

      {/* <section>
        <h4>How We Work</h4>
        <div className="flex flex-row gap-10 pl-6">
            {workStyle && workStyle?.map((work)=>(<Cart work={work}/>))}
        </div>
      </section> */}
    </>
  );
};

export default About;
