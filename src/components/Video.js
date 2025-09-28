import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const Video = ({ movieId }) => {
  useTrailerVideo(movieId);
  const movie = useSelector(store => store.movies.movieTrailer)
  if(!movie) return;
  const {key} = movie
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + key + "?si=bkV3UCbXSWu696jJ&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default Video;
