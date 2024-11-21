import React from "react";
import LeftArrow from "../../assets/left_arrow.png";
import RightArrow from "../../assets/right_arrow.png";
import HomeIcon from "../../assets/home.png";
import BellIcon from "../../assets/bell.png";
import Search from "../../assets/Search.png";

export const Navbar = () => {
  return (
    <div className="w-full bg-black text-white px-6 py-3 flex items-center">
      {/* Left Side - Arrows and Home Icon */}
      <div className="flex items-center gap-4">
        <img
          src={LeftArrow}
          alt="Left Arrow"
          className="w-6 h-6 cursor-pointer"
        />
        <img
          src={RightArrow}
          alt="Right Arrow"
          className="w-6 h-6 cursor-pointer"
        />
        {/* <img
          src={HomeIcon}
          alt="Home Icon"
          className="w-8 h-8 cursor-pointer bg-gray-800 p-2 rounded-full"
        /> */}
      </div>

      {/* Center - Search Bar */}
      <div className=" relative flex-1 flex justify-center">
        <img
          src={HomeIcon}
          alt="Home Icon"
          className="w-10 h-10 cursor-pointer bg-gray-800 p-2 rounded-full"
        />

        <img
          src={Search}
          alt="Search"
          className="w-10 h-10 cursor-pointer bg-gray-800 p-2 rounded-full"
        />

        <input
          type="text"
          placeholder="What do you want to play?"
          className="w-96 bg-gray-800 text-white px-4 py-2 rounded-full outline-none placeholder-gray-400"
        />
      </div>

      {/* Right Side - Explore Premium, Notifications, Profile */}
      <div className="flex items-center gap-4">
        <button className="bg-white text-black font-semibold px-4 py-1 rounded-full">
          Explore Premium
        </button>
        <img
          src={BellIcon}
          alt="Notifications"
          className="w-6 h-6 cursor-pointer"
        />
        {/* <img
          src={ProfileIcon}
          alt="Profile"
          className="w-8 h-8 cursor-pointer rounded-full"
        /> */}
      </div>
    </div>
  );
};
