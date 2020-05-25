import API from "./api-service";

const isDuplicate = (element, array) => array.includes(element);

const getVideoId = (url) => url.split("=")[1]; //Get YT videoID after '='

const syncWithDB = async (dispatch) => {
  const history = await API.getHistory();
  const data = [...history.data];
  console.log("data :>> ", data);
  dispatch({ type: "syncWithDB", payload: data });
};
export { isDuplicate, getVideoId, syncWithDB };
