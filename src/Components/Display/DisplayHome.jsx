import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { albumsData } from "../../assets/assets";
import { AlbumItem } from "../AlbumItem/AlbumItem";
import { songsData } from "../../assets/assets";

export const DisplayHome = () => {
  return (
    <>
      <Navbar />

      <div className="mb-4">
        <h1 className="my-5 mt-10 mx-3 font-bold text-2xl text-white">
          Featured Charts
        </h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 mt-10 mx-3 font-bold text-2xl text-white">
          Today's Biggest Hit
        </h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};
