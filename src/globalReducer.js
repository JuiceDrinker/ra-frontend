const globalReducer = (state, action) => {
  switch (action.type) {
    case "search":
      return {
        ...state,
        currentVideoId: action.payload,
      };
    case "addToHistory":
      return {
        ...state,
        history: [...state.history, state.currentVideoId],
      };
    case "addToBookmarks":
      return {
        ...state,
        bookmarks: [...state.bookmarks, state.currentVideoId],
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
