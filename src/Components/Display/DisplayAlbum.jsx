import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../../assets/assets";
import spotify_logo from "../../assets/spotify_logo.png";
import clock_icon from "../../assets/clock_icon.png";

export const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  // console.log(albumsData);

  return (
    <>
      <Navbar />

      <div className="flex flex-col mt-10 gap-8 md:flex-row md:items-end">
        <img src={albumData.image} alt="" className="w-48 rounded" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl ">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img src={spotify_logo} alt="" className="inline-block w-5" />
            <b className="ml-2">Spotify</b> • 1,323,154 likes • <b>50 songs,</b>{" "}
            about 2hrs 30min
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b> Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>

        <img src={clock_icon} alt="" className="m-auto w-4" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img src={item.image} alt="" className="inline w-10 mr-5" />

            {item.name}
          </p>

          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 Days Ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
};
