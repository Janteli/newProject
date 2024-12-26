import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white flex h-24 justify-between px-16 py-6">
      <div className="w-10 h-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 112.8 142.8"
          class="svglogo"
        >
          <rect x="37.6" width="37.6" height="18.8"></rect>
          <rect x="18.8" y="18.8" width="18.8" height="18.8"></rect>
          <rect y="37.6" width="18.8" height="105.2"></rect>
          <rect x="75.2" y="18.8" width="18.8" height="18.8"></rect>
          <rect x="94" y="37.6" width="18.8" height="105.2"></rect>
        </svg>
      </div>
      {/* TABS */}
      <div>
        <div className="flex  justify-center bg-white px-2 py-10 -mt-8 z-10">
          <FlyoutLink href="#" FlyoutContent={ProductContent}>
            Products
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={ServicesContent}>
            Services
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={CompanyContent}>
            Company
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={ResourcesContent}>
            Resources
          </FlyoutLink>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="mt-2 pr-5">
        <div className="flex space-x-2">
          <button className="px-3 py-1.5 border border-black rounded-md hover:bg-gray-100 text-sm">
            Login
          </button>
          <button className="px-3 py-1.5 font-bold bg-black text-white rounded-md hover:bg-gray-800 text-sm">
            Book a demo
          </button>
        </div>
      </div>
    </nav>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open && FlyoutContent;
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative h-fit w-fit"
    >
      <a href={href} className="relative bg-white text-black text-sm px-2">
        {children}
        {/* <span
          style={{
            // transform:"scaleX(0.5)"
            // transform: open ? "scaleX(1)" : "scaleX(0)"
            // transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left  rounded-full bg-indigo-300 transition-transform duration-200 ease-out"
        /> */}
        {/* TODO Render underline animation thingy */}
      </a>
      {/* TODO Render flyout Content */}
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translate: "-20%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-5 -translate-x-1/2 bg-white text-black"
          >
            {/* <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" /> */}
            {/* <div className="absolute left-1/2 top-0 h-4 w-4  -translate-y-1/2 rotate-45 bg-white" /> */}
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductContent = () => {
  return (
    <div className="h-24 w-96 bg-white px-2 py-3 ">
      <diV className="flex flex-col gap-6 shadow-md px-3 py-2">
        <div className="px-2 py-3 hover:bg-gray-200 rounded-md">
          <div className="flex gap-10 px-1">
            <div className="h-10 w-10 ">
              <img
                src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6499418e8e5e9efd16b78ffc_Stack-p-500.webp"
                alt="stack"
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold">Januar Instant</h4>
              <p className="text-sm font-semibold text-gray-500">
                Real-Time Payments
              </p>
            </div>
          </div>
        </div>

        <div className="px-2 py-3 hover:bg-gray-200 rounded-md">
          <div className="flex gap-10 px-1">
            <div className="h-10 w-10 ">
              <img
                src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6499418e8e5e9efd16b78ffc_Stack-p-500.webp"
                alt="stack"
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold">Januar Wallet</h4>
              <p className="text-sm font-semibold text-gray-500">
                Institutional Crypto Custody
              </p>
            </div>
          </div>
        </div>

        <div className="px-2 py-3 hover:bg-gray-200 rounded-md">
          <div className="flex gap-10 px-1">
            <div className="h-10 w-10 ">
              <img
                src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6499418e8e5e9efd16b78ffc_Stack-p-500.webp"
                alt="stack"
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold hover:bg-gray-200">
                Januar Trade
              </h4>
              <p className="text-sm font-semibold text-white bg-gray-400 border rounded-md px-2">
                Book a demo
              </p>
            </div>
          </div>
        </div>
      </diV>
    </div>
  );
};

const ServicesContent = () => {
  return (
    <div className="h-24 w-96 bg-white px-2 py-3 ">
      <diV className="flex flex-col gap-6 shadow-md px-3 py-2">
        <div className="px-2 py-3 hover:bg-gray-200 rounded-md">
          <div className="flex gap-10 px-1">
            <div className="h-10 w-10 ">
              <img
                src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6499418e8e5e9efd16b78ffc_Stack-p-500.webp"
                alt="stack"
              />
            </div>
            <div>
              <h4 className="text-sm font-semibold">Januar Flow</h4>
              <p className="text-sm font-semibold text-gray-500">
                report of funds and risks
              </p>
            </div>
          </div>
        </div>
      </diV>
    </div>
  );
};

const CompanyContent = () => {
  return (
    <div className="h-24 w-96 bg-white px-2 py-3 ">
      <diV className="flex flex-col  gap-4 shadow-md px-3 py-2">
        <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
          <h4 className="text-sm font-semibold">About Januar </h4>
        </div>
        <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
          <h4 className="text-sm font-semibold">Partners </h4>
        </div>
        <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
          <h4 className="text-sm font-semibold">Contact </h4>
        </div>
        <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
          <h4 className="text-sm font-semibold">Career </h4>
        </div>
      </diV>
    </div>
  );
};

const ResourcesContent = () => {
  return (
    <div className="h-24 w-96 bg-white px-2 py-3 ">
      <diV className="flex flex-col  gap-4 shadow-md px-3 py-2">
        <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
          <h4 className="text-sm font-semibold">News </h4>
        </div>
        <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
          <h4 className="text-sm font-semibold">Blogs </h4>
        </div>
        <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
          <h4 className="text-sm font-semibold">Advisor Directory </h4>
        </div>
      </diV>
    </div>
  );
};

export default NavBar;
