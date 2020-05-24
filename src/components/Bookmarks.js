import React, { useContext } from "react";
import GlobalContext from "../state/GlobalContext";

const Bookmarks = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { bookmarks, currentVideo } = state;

  const addToBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    console.log("bookmarks :>> ", bookmarks);
    bookmarks.push(currentVideo);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    dispatch({ type: "addBookmarks" });
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
