import React from "react";

export const AlbumItem = ({ image, name, desc, id }) => {
  return (
    <div className="min-w-[180px] cursor-pointer p-2 px-3 rounded hover:bg-[#FFFFff26]">
      <img src={name} alt="" className="rounded" />
      <p className="font-bold mt-2 mb-1">{name}</p>
    </div>
  );
};
