import React, { useContext } from "react";
import globalContext from "../state/GlobalContext";

const VideoView = () => {
  const { state } = useContext(globalContext);
  const { currentVideoUrl } = state;
  return (
    <div>
      <iframe
        title="video"
        width="560"
        height="315"
        src={
          currentVideoUrl === ""
            ? null
            : `https://www.youtube.com/embed/${currentVideoUrl}`
        }
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoView;
