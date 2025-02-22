import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Function to handle the scroll event
    // console.log(location)
    const handleScroll = () => {
      if (window.scrollY > 665) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // console.log("hello", location.pathname);

    // Only add the scroll listener if on the desired page
    if (location.pathname === "/codeone-account") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true);
    }

    // Cleanup event listener when leaving the page
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // console.log(isScrolled);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(index);
  };
  return (
    <nav
      className={`fixed   top-0 left-0 w-full flex h-20 md:h-[80px] justify-between md:px-2  md:py-6  px-2 py-4 z-50 ${
        isScrolled === true ? "bg-white" : "bg-[#282828]"
      }`}
    >
      <div className="w-1/3 h-7 md:h-10 flex justify-start items-center md:pl-12 pt-6 md:pt-0 ">
        <Link to="/">
          <div className="h-16 -mt-2">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 112.8 142.8"
              className={`svglogo ${isScrolled ? "fill-black" : "fill-white"}`}
            >
              <rect x="37.6" width="37.6" height="18.8"></rect>
              <rect x="18.8" y="18.8" width="18.8" height="18.8"></rect>
              <rect y="37.6" width="18.8" height="105.2"></rect>
              <rect x="75.2" y="18.8" width="18.8" height="18.8"></rect>
              <rect x="94" y="37.6" width="18.8" height="105.2"></rect>
            </svg> */}
            <img
              src="../logo.png"
              alt="logo"
              className="h-full w-full inset-0 object-contain"
            />
          </div>
        </Link>
      </div>
      {/* TABS */}
      <div
        className={`hidden sm:hidden md:flex  items-center justify-center px-2 py-3 z-10 ${
          isScrolled ? "bg-white text-[#282828]" : "bg-[#282828] text-white"
        }`}
      >
        <FlyoutLink
          href="#"
          FlyoutContent={ServicesContent}
          isScrolled={isScrolled}
        >
          <p className="text-md px-4 py-1 mr-4 text- rounded-sm hover:bg-gray-100">
            Services
          </p>
        </FlyoutLink>
        <FlyoutLink
          href="#"
          FlyoutContent={CompanyContent}
          isScrolled={isScrolled}
        >
          <p className="text-md px-4 py-1 mr-4 rounded-sm hover:bg-gray-100">
            Company
          </p>
        </FlyoutLink>
        <FlyoutLink
          href="#"
          FlyoutContent={ResourcesContent}
          isScrolled={isScrolled}
        >
          <p className="text-md px-4 py-1 mr-4 rounded-sm hover:bg-gray-100">
            Resources
          </p>
        </FlyoutLink>
      </div>

      {/* BUTTONS */}
      <div className="md:mt-0 md:pr-12 w-1/3 flex justify-end">
        <div className="   hidden md:flex">
          {/* <button
            className={`px-3 py-0   text-xs ${
              isScrolled
                ? "border-black border rounded-md hover:bg-gray-100 "
                : "bg-[#282828] text-white border rounded-md"
            }`}
          >
            <Link to="/login">Login</Link>
          </button> */}
          <Link to="/book-a-demo">
            <button
              className={`px-3 py-2  border shadow-md font-normal text-xs rounded-md ${
                isScrolled
                  ? "bg-[#282828] text-[#fff]"
                  : "bg-[#fff] text-[#282828] border rounded-md  "
              }`}
            >
              Book a meeting
            </button>
          </Link>
        </div>
        {/* hamburger */}
        <div className="md:hidden -mt-1" onClick={handleMenu}>
          <GiHamburgerMenu className="text-gray-600 text-3xl" />
        </div>
      </div>
      {/* Mobile menus */}
      <div
        className={`fixed md:hidden bg-white inset-0 flex flex-col px-1 py-1 h-screen z-10  ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="w-full h-7 flex justify-between mb-2">
          <div className="w-16 h-16 z-20">
            <img
              src="../logo.png"
              alt="logo"
              className="h-full w-full inset-0 object-contain"
            />
          </div>
          {/* Hamburger */}
          <div className="nav-toggle" onClick={handleMenu}>
            <IoMdClose className="text-gray-600 text-4xl" />
          </div>
        </div>
        {/* toggling menu */}
        <div className={`${menuOpen ? "block" : "hidden"} `}>
          <div className="flex flex-grow overflow-y-hidden flex-col justify-center text-[#282828]  bg-white px-2 py-8  z-10">
            <ul className="space-y-4 mb-6">
              {/* Products Dropdown */}
              <li
                onMouseEnter={() => toggleDropdown(1)}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <button className="w-full text-left font-normal  py-2 text-xl">
                  Products
                </button>
                {dropdownOpen === 1 && (
                  <div
                    className="pl-4 space-y-2 transition-all duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Link to="/codeone-account">
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
                              Code One LLC Account
                            </h4>
                            <p className="text-xs font-normal text-gray-500">
                              Real-Time Payments
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>

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
                            Code One LLC Wallet
                          </h4>
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
              <li
                onMouseEnter={() => toggleDropdown(2)}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <button className="w-full text-left font-normal  py-2 text-xl">
                  Services
                </button>
                {dropdownOpen === 2 && (
                  <div className="pl-4 space-y-2 transition-all duration-300">
                    <Link to="/service">
                      <div
                        className="px-2 py-3 hover:bg-gray-200 rounded-md"
                        onClick={() => setMenuOpen(false)}
                      >
                        <div className="flex gap-10 px-1">
                          <div className="h-10 w-10 ">
                            <img
                              src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6499418e8e5e9efd16b78ffc_Stack-p-500.webp"
                              alt="stack"
                            />
                          </div>
                          <Link to={"/service"}>
                            <div>
                              <h4 className="text-xs font-normal text-[#282828]">
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
              <li
                onMouseEnter={() => toggleDropdown(3)}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <button className="w-full text-left font-normal  py-2 text-xl">
                  Company
                </button>
                {dropdownOpen === 3 && (
                  <div
                    className="pl-4 space-y-2 transition-all duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="flex px-2 py-6 hover:bg-gray-200 rounded-md">
                      <Link to="/about">
                        <h4 className="text-xs font-normal">About One LLC </h4>
                      </Link>
                    </div>
                    <div className="flex px-2 py-6 hover:bg-gray-200 rounded-md">
                      <h4 className="text-xs font-normal">Partners </h4>
                    </div>
                    <div className="flex px-2 py-6 hover:bg-gray-200 rounded-md">
                      <Link to="/contact">
                        <h4 className="text-xs font-normal">Contact </h4>
                      </Link>
                    </div>
                    <div className="flex px-2 py-6 hover:bg-gray-200 rounded-md">
                      <h4 className="text-xs font-normal">Career </h4>
                    </div>
                  </div>
                )}
              </li>

              {/* Resources Dropdown */}
              <li
                onMouseEnter={() => toggleDropdown(4)}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <button className="w-full text-left font-normal  py-2 text-xl">
                  Resources
                </button>
                {dropdownOpen === 4 && (
                  <div
                    className="pl-4 space-y-2 transition-all duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
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
              <Link to="/login">
                <button
                  className="px-3 py-3 border border-black rounded-md hover:bg-gray-100 text-xs "
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </button>
              </Link>
              <Link to="/book-a-demo">
                <button
                  className="px-3 py-3 font-normal bg-[#282828] text-white rounded-md hover:bg-gray-800 text-xs"
                  onClick={() => setMenuOpen(false)}
                >
                  Book a demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent, isScrolled }) => {
  const [open, setOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  const showFlyout = open && FlyoutContent;
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative h-fit w-fit"
    >
      <a
        href={href}
        className={`relative  text-sm px-2 ${
          isScrolled ? "bg-white text-[#282828]" : "bg-[#282828] text-white"
        }`}
      >
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
            className="absolute left-1/2 top- -translate-x-1/2 bg-white text-[#282828]"
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
        <Link to="codeone-account">
          <div className="px-2 py-3 hover:bg-gray-200 rounded-md">
            <div className="flex gap-10 px-1">
              <div className="h-10 w-10 ">
                <img
                  src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6499418e8e5e9efd16b78ffc_Stack-p-500.webp"
                  alt="stack"
                />
              </div>
              <div>
                <h4 className="text-xs font-normal">Code One LLC Account</h4>
                <p className="text-xs font-normal text-gray-500">
                  Payments & Collection
                </p>
              </div>
            </div>
          </div>
        </Link>

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
    <div className="h-fit w-96 bg-white py-3 flex flex-col gap-6 shadow-md px-3">
      <Link to="/service">
        <div className="px-2 py-3 hover:bg-gray-200 rounded-md pointer">
          <div className="flex gap-10 px-1">
            <div className="h-10 w-10 ">
              <img
                src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6499418e8e5e9efd16b78ffc_Stack-p-500.webp"
                alt="stack"
              />
            </div>
            <div className="flex gap-2 mt-2">
              <h4 className=" text-xs font-normal text-[#282828] ">
                Create an account
              </h4>
              <p className="text-xs font-normal text-gray-500">
                Comming soon...
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const CompanyContent = () => {
  return (
    <div className="h-fit w-96 bg-white px-2 py-3 flex flex-col  gap-4 shadow-md">
      <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
        <Link to="/about">
          <h4 className="text-xs font-normal">About Code One LLC </h4>
        </Link>
      </div>
      {/* <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
          <h4 className="text-xs font-normal">Partners </h4>
        </div> */}
      <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
        <Link to="/contact">
          <h4 className="text-xs font-normal">Contact </h4>
        </Link>
      </div>
      {/* <div className="flex px-2 py-3 hover:bg-gray-200 rounded-md">
          <h4 className="text-xs font-normal">Career </h4>
        </div> */}
    </div>
  );
};

const ResourcesContent = () => {
  return (
    <div className="h-fit w-96 bg-white px-2 py-3 flex flex-col  gap-4 shadow-md">
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
  );
};

export default NavBar;
