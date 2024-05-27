"use client";

const Video = ({ youtube_id }) => {
  return (
    <div className=" aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${youtube_id}`}
        width="100%"
        height="100%"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
};

export default Video;
