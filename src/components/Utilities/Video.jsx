"use client";

import Youtube from "react-youtube";

const Video = ({ youtubeId }) => {
  // const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {/* <button
          onClick={handleVideoPlayer}
          className="float-right w-10 p-2 mb-2 font-bold rounded-3xl text-color-secondary bg-color-white">
          X
        </button> */}
      <Youtube
        className="w-full h-64"
        videoId={youtubeId}
        onError={() => alert("Video is broken, please try another")}
        // onReady={(event) => event.target.pauseVideo()}
      />
    </div>
  );

  // const VideoOpenPlayer = () => {
  //   return (
  //     <button
  //       onClick={handleVideoPlayer}
  //       className="fixed px-3 py-1 font-medium transition-all duration-300 rounded-md hover:scale-x-105 bottom-3 right-3 bg-color-white text-color-dark">
  //       Open Trailer
  //     </button>
  //   );
  // };

  // return isOpen ? <VideoPlayer /> : <VideoOpenPlayer />;
};

export default Video;
