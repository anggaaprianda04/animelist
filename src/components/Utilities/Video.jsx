"use client";

import Youtube from "react-youtube";
import { useState } from "react";

const Video = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const opt = {
    height: "250",
    width: "360",
  };

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const VideoPlayer = () => {
    return (
      <div className="fixed bottom-14 right-3">
        <button
          onClick={handleVideoPlayer}
          className="float-right w-10 p-2 mb-2 font-bold rounded-3xl text-color-secondary bg-color-white">
          X
        </button>
        <Youtube
          videoId={youtubeId}
          opts={opt}
          onError={() => alert("Video is broken, please try another")}
          onReady={(event) => event.target.pauseVideo()}
        />
      </div>
    );
  };

  const VideoOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed px-3 py-1 font-medium transition-all duration-300 rounded-md hover:scale-x-105 bottom-3 right-3 bg-color-white text-color-dark">
        Buka Trailer
      </button>
    );
  };

  return isOpen ? <VideoPlayer /> : <VideoOpenPlayer />;
};

export default Video;
