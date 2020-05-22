const isDuplicateHistory = (videoId, state) => {
  return state.history.includes(videoId); // Check to see if videoID already is included in history
};

const getVideoId = (url) => {
  return url.split("=")[1]; //Get YT videoID after '='
};
export { isDuplicateHistory, getVideoId };
