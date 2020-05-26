import API from "./api-service";

const isDuplicate = (element, array) => array.includes(element);

const getVideoId = (url) => url.split("=")[1]; //Get YT videoID after '='

const syncWithDB = async (dispatch) => {
  const history = await API.getHistory();
  const data = [...history.data];
  dispatch({ type: "syncWithDB", payload: data });
};

const syncWithLocalStorage = (dispatch) => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  console.log("bookmarks :>> ", bookmarks);
  dispatch({ type: "setBookmarks", payload: bookmarks });
};
export { isDuplicate, getVideoId, syncWithDB, syncWithLocalStorage };
