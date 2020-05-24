const globalReducer = (state, action) => {
  switch (action.type) {
    case "search":
      return {
        ...state,
        currentVideo: {
          ...state.currentVideo,
          videoId: action.payload,
        },
      };
    case "updateCurrentVideo":
      return {
        ...state,
        currentVideo: action.payload,
      };
    case "addToBookmarks":
      return {
        ...state,
        bookmarks: [...state.bookmarks, { ...state.currentVideo }],
      };
    case "syncWithDB":
      return {
        ...state,
        history: [...action.payload],
      };
    default:
      return state;
  }
};

export default globalReducer;
