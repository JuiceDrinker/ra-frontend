import React, { useContext } from "react";
import GlobalContext from "../state/GlobalContext";
import { isDuplicate } from "../utils/helperFunctions";

const Bookmarks = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { bookmarks, currentVideo } = state;

  const addToBookmark = () => {
    const currentBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    console.log("currentBookmarks :>> ", currentBookmarks);
    const newBookmarks = [{ ...currentBookmarks }, { ...currentVideo }];
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
  };

  return (
    <div>
      {currentVideo.title === "" || currentVideo.author === "" ? null : (
        <button onClick={addToBookmark}>Add Video to Bookmark</button>
      )}
      <ul>
        {bookmarks.map((item) => (
          <li key={item.videoId}>
            {item.title} {item.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookmarks;
