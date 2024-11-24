import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { albumsData } from "../../assets/assets";

export const DisplayAlbum = () => {
  const { id } = useParams();
  const albumsData = albumsData[id];
  console.log(albumsData);

  return (
    <>
      <Navbar />
    </>
  );
};
