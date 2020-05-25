import React, { useContext } from "react";
import globalContext from "../state/GlobalContext";
import YouTube from "react-youtube";
import { isDuplicate } from "../utils/helperFunctions";
import API from "../utils/api-service";
import "../styles.css";

const VideoView = () => {
  const { state, dispatch } = useContext(globalContext);
  const { currentVideo } = state;

  const handlePlay = async (e) => {
    const { title, author, video_id: videoId } = e.target.getVideoData();

    dispatch({
      type: "updateCurrentVideo",
      payload: { title, author, videoId },
    });
    if (!isDuplicate(videoId, state.history)) {
      await API.addToHistory(title, author, videoId);
    }
  };
  const opts = {
    height: "390",
    width: "640",
  };
  return (
    <div className="video-view">
      {currentVideo.videoId !== "" ? (
        <YouTube
          opts={opts}
          videoId={currentVideo.videoId}
          onPlay={(e) => {
            handlePlay(e);
          }}
        />
      ) : null}
    </div>
  );
};

export default VideoView;
