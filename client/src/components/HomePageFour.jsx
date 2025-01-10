import React from "react";
import Cart from "./Cart";

const HomePageFour = () => {
  const workStyle = [
    {
      title: "1.Discovery Phase",
      description:
        "We analyze your business model, target states, and operational goals to develop a customized MTL and blockchain compliance strategy.",
      img: "https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/648320d2bf8354a57243a47d_januar-product-icon-account.svg",
    },
    {
      title: "2.Application Preparation",
      description:
        "Our experts handle all aspects of your license applications, including compiling required documentation and liaising with state regulators.",
      img: "https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/648320d2fd3b2affb8a3299b_januar-product-icon-instant.svg",
    },
    {
      title: "3.Compliance Integration",
      description:
        "We ensure your business is ready to operate by building compliant policies and procedures, covering AML, KYC, transaction monitoring, and blockchain integration.",
      img: "https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/648320d32ca17ef308049ba7_januar-product-icon-wallet.svg",
    },
    {
      title: "4.Ongoing Support",
      description:
        "Post-licensing, we offer continued compliance support to maintain good standing, adapt to regulatory changes, and scale your blockchain operations.",
      img: "https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/648320d225aa984d1acf15d4_januar-product-icon-trade.svg",
    },
  ];

  return (
    <div className="mt-20">
      <div className=" ">
        <h1 className="text-center text-4xl font-normal mb-2">
          How
          <span className="text-blue-600 bg-blue-100 px-3 rounded-sm mr-0">
            We
          </span>
          <span className="bg-gradient-to-r from-[#D8FFA7] to-[#D6F719] px-3 rounded-sm -mr-32">
            Work
          </span>
        </h1>

        <p className="text-gray-400 text-center text-xs mt-6">
          We guide clients through every step—strategy, application, compliance
          integration,
          <br /> and ongoing support—to ensure seamless licensing and regulatory
          success.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 mt-14">
        {workStyle?.map((work, index) => (
          <Cart key={index} work={work} />
        ))}
      </div>
    </div>
  );
};

export default HomePageFour;
