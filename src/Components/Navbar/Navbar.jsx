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

        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-2 cursor-pointer rounded-2xl hidden md:block hover:bg-green-700 hover:text-white scale-110 shadow-xl transition duration-300">
            Explore Premium
          </p>
        </div>
      </div>
    </>
  );
};
