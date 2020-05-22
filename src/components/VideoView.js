import React, { useContext } from "react";
import globalContext from "../state/GlobalContext";
import YouTube from "react-youtube";
import { isDuplicate } from "../utils/helperFunctions";

const VideoView = () => {
  const { state, dispatch } = useContext(globalContext);
  const { currentVideoId } = state;
  return (
    <div>
      {currentVideoId !== "" ? (
        <YouTube
          videoId={currentVideoId}
          onPlay={() => {
            // If not duplicate, add to history
            if (!isDuplicate(currentVideoId, state.history)) {
              dispatch({ type: "addToHistory" });
            }
          }}
        />
      ) : null}
    </div>
  );
};

export default VideoView;
