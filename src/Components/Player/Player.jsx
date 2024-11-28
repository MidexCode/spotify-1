import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { PlayerContext } from "./PlayerContext";

export const Player = () => {
  const { track, seekBg, seekBar, playStatus, play, pause, time } =
    useContext(PlayerContext);

  return (
    <>
      <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
        <div className="hidden lg:flex items-center gap-4">
          <img src={track.image} alt="" className="w-12" />
          <div>
            <p>{track.name}</p>
            <p>{track.desc.slice(0, 12)}</p>
          </div>
        </div>

        <div className="flex flex-col items-center m-auto gap-1">
          <div className="flex gap-4">
            <img
              src={assets.shuffle_icon}
              alt=""
              className="w-4 cursor-pointer"
            />

            <img src={assets.prev_icon} alt="" className="w-4 cursor-pointer" />

            {playStatus ? (
              <img
                src={assets.pause_icon}
                alt=""
                className="w-4 cursor-pointer"
                onClick={pause}
              />
            ) : (
              <img
                src={assets.play_icon}
                alt=""
                className="w-4 cursor-pointer"
                onClick={play}
              />
            )}

            <img src={assets.next_icon} alt="" className="w-4 cursor-pointer" />

            <img src={assets.loop_icon} alt="" className="w-4 cursor-pointer" />
          </div>

          <div className="flex gap-5 items-center">
            <p>
              {time.currentTime.minute}:{time.currentTime.second}
            </p>

            <div
              ref={seekBg}
              className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
            >
              <hr
                ref={seekBar}
                className="rounded-full bg-green-800 h-1 w-0 border-none"
              />
            </div>

            <p>
              {time.totalTime.minute}:{time.totalTime.second}
            </p>
          </div>
        </div>

        <div className="hidden lg:flex items-center opacity-75 gap-4 cursor-pointer">
          <img src={assets.plays_icon} alt="" className="w-4" />
          <img src={assets.mic_icon} alt="" className="w-4" />
          <img src={assets.queue_icon} alt="" className="w-4" />
          <img src={assets.speaker_icon} alt="" className="w-4" />
          <img src={assets.volume_icon} alt="" className="w-4" />
          <div className="h-1 bg-slate-50 w-20 rounded-full"></div>
          <img src={assets.mini_player_icon} alt="" className="w-4" />
          <img src={assets.zoom_icon} alt="" className="w-4" />
        </div>
      </div>
    </>
  );
};
