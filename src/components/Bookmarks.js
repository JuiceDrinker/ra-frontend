import React, { useContext, useState } from "react";
import GlobalContext from "../state/GlobalContext";
import { isDuplicate } from "../utils/helperFunctions";

const Bookmarks = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { bookmarks, currentVideo } = state;
  const [bookmarkCount, setBookmarkCount] = useState(0);

  const isBookmarkDuplicate = (videoId, bookmarkArr) => {
    const idArr = bookmarkArr.map((item) => item.videoId);
    console.log(isDuplicate(videoId, idArr));
    return isDuplicate(videoId, idArr);
  };
  const addToBookmark = () => {
    const localStorageBookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];
    if (!isBookmarkDuplicate(currentVideo.videoId, localStorageBookmarks)) {
      localStorageBookmarks.push(currentVideo);
      dispatch({ type: "addToBookmarks" });
      localStorage.setItem("bookmarks", JSON.stringify(localStorageBookmarks));
      setBookmarkCount(localStorageBookmarks.length);
    }
  };

  return (
    <div>
      {currentVideo.title === "" || currentVideo.author === "" ? null : (
        <button onClick={addToBookmark}>Add Video to Bookmark</button>
      )}
      <ul>
        {bookmarks.map((item) => (
          <li key={item._id}>
            {item.title} {item.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookmarks;
