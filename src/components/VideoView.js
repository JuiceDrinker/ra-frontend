import React, { useContext } from "react";
import globalContext from "../state/GlobalContext";
import YouTube from "react-youtube";
import { isDuplicate } from "../utils/helperFunctions";
import API from "../utils/api-service";

const VideoView = () => {
  const { state } = useContext(globalContext);
  const { currentVideoId } = state;

  const handlePlay = async (e) => {
    if (!isDuplicate(currentVideoId, state.history)) {
      const { title, author } = e.target.getVideoData();
      await API.addToHistory(title, author, currentVideoId);
    }
  };

  return (
    <div>
      {currentVideoId !== "" ? (
        <YouTube
          videoId={currentVideoId}
          onPlay={(e) => {
            handlePlay(e);
          }}
        />
      ) : null}
    </div>
  );
};

export default VideoView;
