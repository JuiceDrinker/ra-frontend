import React, { useContext } from "react";
import globalContext from "../state/GlobalContext";
import YouTube from "react-youtube";

const VideoView = () => {
  const { state, dispatch, isDuplicateHistory } = useContext(globalContext);
  const { currentVideoId } = state;
  return (
    <div>
      {currentVideoId !== "" ? (
        <YouTube
          videoId={currentVideoId}
          onPlay={() => {
            // If not duplicate, add to history
            if (!isDuplicateHistory(currentVideoId, state))
              dispatch({ type: "addToHistory" });
          }}
        />
      ) : null}
    </div>
  );
};

export default VideoView;
