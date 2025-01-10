import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(index);
  };
  return (
    <nav className="fixed  top-0 left-0 w-full bg-white flex h-20 md:h-24 justify-between md:px-20 md:py-6  px-2 py-3 z-50">
      <div className="w-1/3 h-7 md:h-10 flex justify-start   ">
       <Link to = '/'>
       <div className="h-[35px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 112.8 142.8"
            className="svglogo"
          >
            <rect x="37.6" width="37.6" height="18.8"></rect>
            <rect x="18.8" y="18.8" width="18.8" height="18.8"></rect>
            <rect y="37.6" width="18.8" height="105.2"></rect>
            <rect x="75.2" y="18.8" width="18.8" height="18.8"></rect>
            <rect x="94" y="37.6" width="18.8" height="105.2"></rect>
          </svg>
        </div>
       </Link>
      </div>
      {/* TABS */}
      <div className="w-1/3 hidden md:block">
        <div className="flex  justify-center text-black  bg-white px-2 py-3 -mt-8 z-10">
          <FlyoutLink href="#" FlyoutContent={ProductContent} className="">
            <p className="text-xs px-4 py-1 mr-4 rounded-sm hover:bg-gray-100">
              Products
            </p>
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={ServicesContent}>
            <p className="text-xs px-4 py-1 mr-4 rounded-sm hover:bg-gray-100">
              Services
            </p>
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={CompanyContent}>
            <p className="text-xs px-4 py-1 mr-4 rounded-sm hover:bg-gray-100">
              Company
            </p>
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={ResourcesContent}>
            <p className="text-xs px-4 py-1 mr-4 rounded-sm hover:bg-gray-100">
              Resources
            </p>
          </FlyoutLink>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="md:mt-2 md:pr-5 w-1/3 flex justify-end">
        <div className=" space-x-2 hidden md:flex">
          <button className="px-3 py-0 border border-black rounded-md hover:bg-gray-100 text-xs">
           <Link to="/login">
           Login
           </Link>
          </button>
          
          <button className="px-3 py-0 font-normal bg-black text-white rounded-md hover:bg-gray-800 text-xs">
          <Link to="/book-a-demo">
            Book a demo
          </Link>

          </button>
        </div>
        {/* hamburger */}
        <div className="md:hidden -mt-1" onClick={handleMenu}>
          <GiHamburgerMenu className="text-gray-600 text-3xl" />
        </div>
      </div>
      {/* Mobile menus */}
      <div
        className={`fixed md:hidden bg-white inset-0 flex flex-col px-2 py-3 h-screen  ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="w-full h-7 flex justify-between mb-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 112.8 142.8"
              className="svglogo"
            >
              <rect x="37.6" width="37.6" height="18.8"></rect>
              <rect x="18.8" y="18.8" width="18.8" height="18.8"></rect>
              <rect y="37.6" width="18.8" height="105.2"></rect>
              <rect x="75.2" y="18.8" width="18.8" height="18.8"></rect>
              <rect x="94" y="37.6" width="18.8" height="105.2"></rect>
            </svg>
          </div>
          {/* Hamburger */}
          <div className="nav-toggle" onClick={handleMenu}>
            <IoMdClose className="text-gray-600 text-4xl" />
          </div>
        </div>
        {/* toggling menu */}
        <div className={`${menuOpen ? "block" : "hidden"} `}>
          <div className="flex flex-grow overflow-y-hidden flex-col justify-center text-black  bg-white px-2 py-3  z-10">
            <ul className="space-y-4 mb-6">
              {/* Products Dropdown */}
              <li onMouseEnter={() => toggleDropdown(1)}
                  onMouseLeave={() => toggleDropdown(null)}>
                <button
                  className="w-full text-left font-normal  py-2 text-xl"
                  
                >
                  Products
                </button>
                {dropdownOpen === 1 && (
                  <div className="pl-4 space-y-2 transition-all duration-300">
                    <div className="px-2 py-3 hover:bg-gray-200 rounded-md">
                      <div className="flex gap-10 px-1">
                        <div className="h-10 w-10 ">
                          <img
                            src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6499418e8e5e9efd16b78ffc_Stack-p-500.webp"
                            alt="stack"
                          />
                        </div>
                        <div>
                          <h4 className="text-xs font-normal">
                            Code One LLC Instant
                          </h4>
                          <p className="text-xs font-normal text-gray-500">
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
                          <h4 className="text-xs font-normal">Code One LLC Wallet</h4>
                          <p className="text-xs font-normal text-gray-500">
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
                          <h4 className="text-xs font-normal hover:bg-gray-200">
                            Code One LLC Trade
                          </h4>
                          <p className="text-xs font-normal text-white bg-gray-400 border rounded-md px-2">
                            Book a demo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Services Dropdown */}
              <li onMouseEnter={() => toggleDropdown(2)}
                  onMouseLeave={() => toggleDropdown(null)}>
                <button
                  className="w-full text-left font-normal  py-2 text-xl"
                >
                  Services
                </button>
                {dropdownOpen === 2 && (
                  <div className="pl-4 space-y-2 transition-all duration-300">
                    <Link to='/service'>
                    <div className="px-2 py-3 hover:bg-gray-200 rounded-md">
                      <div className="flex gap-10 px-1">
                        <div className="h-10 w-10 ">
                          <img
                            src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6499418e8e5e9efd16b78ffc_Stack-p-500.webp"
                            alt="stack"
                          />
                        </div>
                        <Link to={"/service"}>
                        <div>
                          <h4 className="text-xs font-normal text-black ">
                            One LLC Flow
                          </h4>
                          <p className="text-xs font-normal text-gray-500">
                            report of funds and risks
                          </p>
                        </div>
                        </Link>
                      </div>
                    </div>
                    </Link>
                  </div>
                )}
              </li>

              {/* Company Dropdown */}
              <li onMouseEnter={() => toggleDropdown(3)}
                  onMouseLeave={() => toggleDropdown(null)}>
                <button
                  className="w-full text-left font-normal  py-2 text-xl"
                  
                >
                  Company
                </button>
                {dropdownOpen === 3 && (
                  <div className="pl-4 space-y-2 transition-all duration-300">
                    <div className="flex px-2 py-6 hover:bg-gray-200 rounded-md">
                     <Link to="/about">
                     <h4 className="text-xs font-normal">About One LLC </h4>
                     </Link>
                    </div>
                    <div className="flex px-2 py-6 hover:bg-gray-200 rounded-md">
                      <h4 className="text-xs font-normal">Partners </h4>
                    </div>
                    <div className="flex px-2 py-6 hover:bg-gray-200 rounded-md">
                      <h4 className="text-xs font-normal">Contact </h4>
                    </div>
                    <div className="flex px-2 py-6 hover:bg-gray-200 rounded-md">
                      <h4 className="text-xs font-normal">Career </h4>
                    </div>
                  </div>
                )}
              </li>

              {/* Resources Dropdown */}
              <li  onMouseEnter={() => toggleDropdown(4)}
                  onMouseLeave={() => toggleDropdown(null)}>
                <button
                  className="w-full text-left font-normal  py-2 text-xl"
                 
                >
                  Resources
                </button>
                {dropdownOpen === 4 && (
                  <div className="pl-4 space-y-2 transition-all duration-300">
                    <div className="flex px-2 py-6 hover:bg-gray-200 rounded-md">
                      <h4 className="text-xs font-normal">News </h4>
                    </div>
                    <div className="flex px-2 py-6 hover:bg-gray-200 rounded-md">
                      <h4 className="text-xs font-normal">Blogs </h4>
                    </div>
                    <div className="flex px-2 py-6 hover:bg-gray-200 rounded-md">
                      <h4 className="text-xs font-normal">
                        Advisor Directory{" "}
                      </h4>
                    </div>
                  </div>
                )}
              </li>
            </ul>
            <div className=" space-x-2 flex">
              <button className="px-3 py-3 border border-black rounded-md hover:bg-gray-100 text-xs ">
                Login
              </button>
              <button className="px-3 py-3 font-normal bg-black text-white rounded-md hover:bg-gray-800 text-xs">
                Book a demo
              </button>
            </div>
          </div>
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
            className="absolute left-1/2 top- -translate-x-1/2 bg-white text-black"
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
      <div className="flex flex-col gap-6 shadow-md px-3 py-2 bg-white">
        <div className="px-2 py-3 hover:bg-gray-200 rounded-md">
          <div className="flex gap-10 px-1">
            <div className="h-10 w-10 ">
              <img
                src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6499418e8e5e9efd16b78ffc_Stack-p-500.webp"
                alt="stack"
              />
            </div>
            <div>
              <h4 className="text-xs font-normal">Code One LLC Instant</h4>
              <p className="text-xs font-normal text-gray-500">
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
              <h4 className="text-xs font-normal">Code One LLC Wallet</h4>
              <p className="text-xs font-normal text-gray-500">
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
              <h4 className="text-xs font-normal hover:bg-gray-200">
                Code One LLC Trade
              </h4>
              <p className="text-xs font-normal text-white bg-gray-400 border rounded-md px-2">
                Book a demo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesContent = () => {
  return (
    <div className="h-24 w-96 bg-white px-2 py-3 ">
      <div className="flex flex-col gap-6 shadow-md px-3 py-2 bg-white">
        <Link to="/service">
        <div className="px-2 py-3 hover:bg-gray-200 rounded-md pointer">
          <div className="flex gap-10 px-1">
            <div className="h-10 w-10 ">
              <img
                src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6499418e8e5e9efd16b78ffc_Stack-p-500.webp"
                alt="stack"
              />
            </div>
            <div>
              <h4 className="text-xs font-normal text-black ">Code One LLC Flow</h4>
              <p className="text-xs font-normal text-gray-500">
                report of funds and risks
              </p>
            </div>
          </div>
        </div>
        </Link>
        
      </div>
    </div>
  );
};

const CompanyContent = () => {
  return (
    <div className="h-24 w-96 bg-white px-2 py-3 ">
      <div className="flex flex-col  gap-4 shadow-md px-3 py-2 bg-white">
        <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
          <Link to="/about">
          <h4 className="text-xs font-normal">Code One LLC </h4>
          </Link>
        </div>
        <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
          <h4 className="text-xs font-normal">Partners </h4>
        </div>
        <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
          <h4 className="text-xs font-normal">Contact </h4>
        </div>
        <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
          <h4 className="text-xs font-normal">Career </h4>
        </div>
      </div>
    </div>
  );
};

const ResourcesContent = () => {
  return (
    <div className="h-24 w-96 bg-white px-2 py-3 ">
      <div className="flex flex-col  gap-4 shadow-md px-3 py-2 bg-white">
        <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
          <h4 className="text-xs font-normal">News </h4>
        </div>
        <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
          <h4 className="text-xs font-normal">Blogs </h4>
        </div>
        <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
          <h4 className="text-xs font-normal">Advisor Directory </h4>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
