import React, { useContext } from "react";
import { PlayerContext } from "../Player/PlayerContext";

export const SongItem = ({ image, name, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] cursor-pointer p-2 px-3 rounded hover:bg-[#FFFFff26]"
    >
      <img src={image} alt="" className="rounded" />
      <p className="font-bold mt-2 mb-1 text-slate-200">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};
