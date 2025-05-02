import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-16 mb-0">
      <div className="bg-[url('https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/64a562b9492999ffae211108_grain_less.png')] md:h-[300px] h-[300px] grid md:grid-cols-12 grid-rows-2 md:gap-20 relative md:mt-24 px-2 md:pt-8 object-contain">
        <div className="md:col-span-6 md:pl-24 md:py-12 row-span-1 mt-4">
          <h1 className="leading-tight font-extrabold text-gray-400 text-left -mb-6">
            We provide streamlined, secure and compliant solutions
            <br />
            for navigating licensing and regulatory
            <br />
            requirements.
          </h1>
        </div>
        <div className="md:col-span-6 grid md:grid-cols-12 md:gap-4 row-span-1 grid-cols-12 pt-8">
          <div className="col-span-4 text-white pt-4 rounded-md">
            <p className="text-white text-xs mb-4">Services</p>
            <p className="text-gray-400 text-xs font-light">
              Code One LLC Flow
            </p>
          </div>
          <div className="col-span-4 text-white pt-4 rounded-md">
            <p className="text-white text-xs mb-4">Company</p>
            <p className="text-gray-400 text-xs font-light mb-2">
              About Code One LLC
            </p>
            <p className="text-gray-400 text-xs font-light">Contact</p>
          </div>
          <div className="col-span-4 text-white pt-4 rounded-md">
            <p className="text-white text-xs mb-4">What's new</p>
            <p className="text-gray-400 text-xs font-light mb-2">News</p>
            <p className="text-gray-400 text-xs font-light mb-2">Twitter</p>
            <p className="text-gray-400 text-xs font-light">Linkedin</p>
          </div>
        </div>
        <div className="bg-[#121212] text-gray-300 text-xs h-10 font-light absolute bottom-0 left-0 w-full grid grid-cols-12">
          <div className="col-span-6">
            <p>©2025 CodeOne LLC All rights reserved</p>
          </div>
          <div className="col-span-2"><Link to="/privacy">Privacy & Policy</Link></div>
          <div className="col-span-2"><Link to="/terms">Terms</Link></div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;