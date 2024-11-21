import React from "react";
import { assets } from "../../assets/assets";

export const SideBar = () => {
  return (
    <>
      <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
        <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around ">
          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img src={assets.home_icon} alt="" className="w-6" />
            <p className="font-bold">Home</p>
          </div>

          <div className="flex items-center gap-3 pl-8 cursor-pointer">
            <img src={assets.search_icon} alt="" className="w-6" />
            <p className="font-bold">Search</p>
          </div>
        </div>

        <div className="bg-[#121212] h-[85%] rounded">
          <div className="p-4 flex items-center justify-between ">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={assets.stack_icon} alt="" className="w-8" />
              <p className="font-semibold">Your Library</p>
            </div>

            <div className="flex items-center gap-3 cursor-pointer">
              <img src={assets.arrow_icon} alt="" className="w-5" />
              <img src={assets.plus_icon} alt="" className="w-5" />
            </div>
          </div>

          <div className="p-4 bg-[#242424] flex  justify-start gap-24 items-center m-2 mt-4 rounded font-semibold pl-4">
            <h1>Create Your First Playlist</h1>
            <button className="px-4 py-1.5 bg-white  text-[15px] text-black rounded-full hover:bg-green-700  scale-110 shadow-xl transition duration-300">
              Create Playlist
            </button>
          </div>

          <div className="p-4 bg-[#242424] flex  justify-start gap-[78px] items-center m-2 mt-4 rounded font-semibold pl-4">
            <h1>
              Add your Favourite Podcast <br />
              you listen to
            </h1>
            <button className="px-4 py-1.5 bg-white  text-[15px] text-black rounded-full hover:bg-green-700 scale-110 shadow-xl transition duration-300">
              Add Podcast
            </button>
          </div>

          <div className="p-4 bg-[#242424] flex  justify-start gap-[94px] items-center m-2 mt-4 rounded font-semibold pl-4">
            <h1>Add your Favourite Music</h1>
            <button className="px-4 py-1.5 bg-white  text-[15px] text-black rounded-full hover:bg-green-700 scale-110 shadow-xl transition duration-300">
              Add Music
            </button>
          </div>

          <div className="p-4 bg-[#242424] flex  justify-start gap-[94px] items-center m-2 mt-4 rounded font-semibold pl-4">
            <h1>Add your Favourite Artist</h1>
            <button className="px-4 py-1.5 bg-white  text-[15px] text-black rounded-full hover:bg-green-700 scale-110 shadow-xl transition duration-300">
              Add Artist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
