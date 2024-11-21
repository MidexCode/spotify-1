import React from "react";
import { assets } from "../../assets/assets";

export const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            src={assets.arrow_left}
            alt=""
            className="rounded-2xl cursor-pointer w-8 bg-black p-2"
          />
          <img
            src={assets.arrow_right}
            alt=""
            className="rounded-2xl cursor-pointer w-8 bg-black p-2"
          />
        </div>

        <div className="flex items-center gap-6">
          <p className="bg-white text-black text-[15px] px-4 py-2 cursor-pointer rounded-2xl hidden md:block hover:bg-green-700 hover:text-white scale-110 shadow-xl transition duration-300">
            Explore Premium
          </p>

          <p className="bg-black text-white text-[15px] px-2 py-2 cursor-pointer rounded-2xl hover:bg-green-700 hover:text-white scale-110 shadow-xl transition duration-300">
            Install App
          </p>

          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center cursor-pointer justify-center">
            C
          </p>
        </div>
      </div>

      <div className="flex item-center gap-4 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl font-semibold cursor-pointer  hover:bg-green-700 hover:text-white scale-110 shadow-xl transition duration-300">
          All
        </p>

        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer font-semibold hover:bg-green-700 hover:text-white scale-110 shadow-xl transition duration-300">
          Music
        </p>

        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer font-semibold hover:bg-green-700 hover:text-white scale-110 shadow-xl transition duration-300">
          Podcast
        </p>

        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer font-semibold hover:bg-green-700 hover:text-white scale-110 shadow-xl transition duration-300">
          Artist
        </p>
      </div>
    </>
  );
};
