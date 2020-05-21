import React, { useReducer } from "react";
import GlobalContext from "./state/GlobalContext";
import initialState from "./state/initialState";
import globalReducer from "./globalReducer";
import SearchBar from "./components/SearchBar";
const App = () => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <SearchBar />
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
