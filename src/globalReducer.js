const globalReducer = (state, action) => {
  switch (action.type) {
    case "search":
      return {
        ...state,
        currentVideoUrl: action.payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
