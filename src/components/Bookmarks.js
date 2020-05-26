import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../state/GlobalContext";
import { isDuplicate } from "../utils/helperFunctions";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const savedBookMarks = JSON.parse(localStorage.getItem("bookmarks"));
    const savedBookmarkCount = savedBookMarks.length || 0;
    setBookmarkCount(savedBookmarkCount);
  }, [bookmarks]);

  const BookmarkList = () => {
    return (
      <div
        onClick={() => setIsDrawerOpen(false)}
        onKeyDown={() => setIsDrawerOpen(false)}
      >
        <List>
          {bookmarks.map((item) => {
            console.log("item", item);
            return (
              <ListItem button key={item.videoId}>
                <ListItemIcon>
                  <BookmarkBorderIcon />
                </ListItemIcon>
                <ListItemText>{`${item.title} by ${item.author}`}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  };

  return (
    <div className="bookmarks">
      <button onClick={() => setIsDrawerOpen(true)}>
        Bookmarks {`(${bookmarkCount})`}
      </button>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <BookmarkList />
      </Drawer>
      {currentVideo.title === "" || currentVideo.author === "" ? null : (
        <button onClick={addToBookmark}>Add Video to Bookmark</button>
      )}
    </div>
  );
};

export default Bookmarks;
