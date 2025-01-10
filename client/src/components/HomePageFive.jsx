import React from "react";

const HomePageFive = () => {
  return (
    <div className="md:mt-20 mt-6">
      <h1 className="text-center text-4xl  font-normal mb-16">
        A new <span>borderless</span> era for the <md:br />{" "}
        <span className="bg-blue-100 text-blue-600 px-2  rounded-md">
          digital asset{" "}
        </span>
        economy
      </h1>

      <p className="text-center text-xs text-gray-400 md:mt-4 mt-2">
        It doesn't matter where you are, so long as you're <br /> connected.
        Code One LLC Instant offers no limitations.
      </p>

      <div className="bg-[url('https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6638da64d5cb186f294a9288_6481b8ee8b4dcf6bfed04a03_januar-world%20(1)-poster-00001.jpg')] w-full min-h-[550px] mt-28 rounded-sm shadow-md relative ">
        <video
          src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/6638da64d5cb186f294a9288_6481b8ee8b4dcf6bfed04a03_januar-world%20(1)-transcode.mp4"
          className="absolute inset-0 w-full h-full object-cover mx-2"
          autoPlay
          loop
          muted
        />

<div className="absolute left-2 bottom-2 flex flex-col items-center justify-center text-white text-center px-4">
    <h1 className="text-2xl font-normal mb-4">24/7</h1>
    <p className="text-xs text-left max-w-xl font-light">
      Always open <br/> Even on <br/> weekends
    </p>
  </div>

  <div className="absolute left-36 bottom-2 flex flex-col items-center justify-center text-white text-center px-4">
    <h1 className="text-2xl font-normal mb-4">Instant</h1>
    <p className="text-xs text-left max-w-xl font-light">
      Real-time <br/> fiat <br/> settlement
    </p>
  </div>

  <div className="absolute left-72 bottom-6 flex flex-col items-center justify-center text-white text-center px-4">
    <h1 className="text-2xl font-normal mb-4">30+</h1>
    <p className="text-xs text-left max-w-xl font-light">
      Countries <br/> supported 
    </p>
  </div>
      </div>
    </div>
  );
};

export default HomePageFive;
