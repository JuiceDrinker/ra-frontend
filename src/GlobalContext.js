import { createContext } from "react";

const GlobalContext = createContext({
  currentVideoUrl: "",
  bookmarks: [],
  history: [],
});

export default GlobalContext;
