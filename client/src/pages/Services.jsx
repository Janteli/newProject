import React from "react";
import ServiceCart from "../components/ServiceCart";

const Services = () => {
  const services = [
    {
      icon: "💡",
      head: "MTL Application Management",
      listOne:
        "Comprehensive preparation and submission of Money Transmitter License applications for all 50 states.",
      listTwo:
        "Assistance with meeting state-specific financial requirements, such as net worth thresholds and surety bonds.",
      listThree:
        "Guidance on creating robust compliance policies, including AML, KYC, and Permissible Investments.",
    },
    {
      icon: "⚙️",
      head: "Regulatory Advisory and Compliance Support",
      listOne:
        "In-depth analysis of state-by-state MTL requirements tailored to your business model.",
      listTwo:
        "Development of compliance frameworks aligned with federal, state, and cryptocurrency regulations.",
      listThree:
        "Guidance on creating robust compliance policies, including AML, KYC, and Permissible Investments.",
    },
    {
      icon: "👩‍💼",
      head: "Crypto and Blockchain Compliance Solutions",
      listOne:
        "Advisory on like-for-like cryptocurrency permissible investments (e.g., ETH for ETH, BTC for BTC) to meet state-specific requirements.",
      listTwo:
        "Blockchain compliance assessments, including wallet audits, custody protocols, and transaction reporting.",
    },
    {
      icon: "🏆",
      head: "Blockchain Infrastructure Consulting",
      listOne:
        "Integration of blockchain technology into operations for increased transparency, security, and efficiency.",
      listTwo:
        "Consultation on smart contracts, decentralized applications (DApps), tokenized payment systems, and blockchain analytics.",
      listThree:
        "Regulatory readiness for businesses adopting or expanding blockchain-based solutions.",
    },
    {
      icon: "🌍",
      head: "Licensing Expansion and Strategic Planning",
      listOne:
        "Support for multi-state licensing strategies, including phased application rollouts.",
      listTwo:
        "Acquisition consulting for businesses seeking to expand by purchasing local MSBs with existing licenses.",
      listThree:
        "Strategic partnerships to accelerate licensing timelines and market entry for fintech and blockchain businesses.",
    },
    {
      icon: "🔧",
      head: "Assistance in securing state-specific surety bonds.",
      listOne:
        "Strategic planning to meet permissible investment requirements for both fiat and cryptocurrency assets.",
      listThree:
        "Guidance on establishing and maintaining financial reserves to support operational stability.",
    },
  ];

  return (
    <div className="py-16 px-8 text-white mt-24 md:bg-diagonal-blue-yellow bg-gray-300">
      <div className="container mx-auto">
        {/* Heading */}
        <p className="text-xs text-gray-100 text-center mb-4">
          We offer comprehensive services to help businesses <br />
          navigate the complexities of Money Transmitter License (MTL)
          <br />
          applications, regulatory compliance, blockchain integration, and
          licensing
          <br />
          expansion. From managing state-specific requirements to providing
          <br />
          tailored crypto compliance strategies and financial solutions, our
          <br />
          expertise ensures seamless operations, regulatory readiness, and
          <br />
          strategic growth for fintech and blockchain businesses.
        </p>
        <h2 className="text-3xl font-normal text-center mb-12">Services</h2>

        {/*  Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card  */}
          {services.map((service, i) => (
            <ServiceCart key={i} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
