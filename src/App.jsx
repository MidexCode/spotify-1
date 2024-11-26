import React from "react";
import { SideBar } from "./Components/SideBar/SideBar";
import { Player } from "./Components/Player/Player";
import { Display } from "./Components/Display/Display";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <div className="h-[90%] flex">
        <SideBar />
        <Display />
      </div>
      <Player />
      <audio preload="auto"></audio>
    </div>
  );
};

export default App;
