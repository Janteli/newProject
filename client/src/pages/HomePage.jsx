import React from "react";
import HomePageOne from "../components/HomePageOne";
import HomePageTwo from "../components/HomePageTwo";
import HomePageThree from "../components/HomePageThree";
import HomePageFour from "../components/HomePageFour";
import HomePageFive from "../components/HomePageFive";

const HomePage = () => {
  return (
    <div className="w-full">
      <div className="md:px-10 px-5 pt-20">
        <HomePageOne />
      </div>
      <div className="md:px-14">
        <HomePageTwo />
        <HomePageThree />
        <HomePageFour />
        {/* <HomePageFive /> */}
      </div>
    </div>
  );
};

export default HomePage;
