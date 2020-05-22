import React, { useContext } from "react";
import GlobalContext from "../state/GlobalContext";
import { isDuplicate } from "../utils/helperFunctions";

const Bookmarks = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { bookmarks, currentVideoId } = state;

  const addToBookmark = () => {
    if (!isDuplicate(currentVideoId, bookmarks))
      dispatch({ type: "addToBookmarks" });
  };

  return (
    <div>
      {currentVideoId === "" ? null : (
        <button onClick={addToBookmark}>Add Video to Bookmark</button>
      )}
      <ul>
        {bookmarks.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bookmarks;
