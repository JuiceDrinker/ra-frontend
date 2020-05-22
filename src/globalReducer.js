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
        bookmarks: [...state.bookmarks, state.currentVideoId],
      };
    default:
      return state;
  }
};

export default globalReducer;
