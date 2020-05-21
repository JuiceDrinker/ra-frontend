import React, { useReducer } from "react";
import GlobalContext from "./state/GlobalContext";
import initialState from "./state/initialState";
import globalReducer from "./globalReducer";
import SearchBar from "./components/SearchBar";
import VideoView from "./components/VideoView";
const App = () => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <SearchBar />
        <VideoView />
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
