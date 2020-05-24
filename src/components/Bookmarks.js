import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../state/GlobalContext";
import { isDuplicate } from "../utils/helperFunctions";

const Bookmarks = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { bookmarks, currentVideo } = state;
  const [bookmarkCount, setBookmarkCount] = useState(0);

  const isBookmarkDuplicate = (videoId, bookmarkArr) => {
    const idArr = bookmarkArr.map((item) => item.videoId);
    return isDuplicate(videoId, idArr);
  };

  const addToBookmark = () => {
    const localStorageBookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];
    if (!isBookmarkDuplicate(currentVideo.videoId, localStorageBookmarks)) {
      // Change naming?
      localStorageBookmarks.push(currentVideo);
      dispatch({ type: "addToBookmarks" });
      localStorage.setItem("bookmarks", JSON.stringify(localStorageBookmarks));
    }
  };

  useEffect(() => {
    const savedBookMarks = JSON.parse(localStorage.getItem("bookmarks"));
    const savedBookmarkCount = savedBookMarks.length || 0;
    setBookmarkCount(savedBookmarkCount);
  }, [bookmarks]);

  return (
    <div>
      <h3>Currently you have: {bookmarkCount} bookmarks saved</h3>
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
