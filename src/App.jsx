import React, { useContext } from "react";
import { SideBar } from "./Components/SideBar/SideBar";
import { Player } from "./Components/Player/Player";
import { Display } from "./Components/Display/Display";
import { PlayerContext } from "./Components/Player/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black text-white">
      <div className="h-[90%] flex">
        <SideBar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
