import React, { useContext } from "react";
import globalContext from "../state/GlobalContext";
import YouTube from "react-youtube";
import { isDuplicate } from "../utils/helperFunctions";
import API from "../utils/api-service";

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

  return (
    <div>
      {currentVideo.videoId !== "" ? (
        <YouTube
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
