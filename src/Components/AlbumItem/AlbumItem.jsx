import React from "react";
import { useNavigate } from "react-router-dom";

export const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] cursor-pointer p-2 px-3 rounded hover:bg-[#FFFFff26]"
    >
      <img src={image} alt="" className="rounded" />
      <p className="font-bold mt-2 mb-1 text-slate-200">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};
