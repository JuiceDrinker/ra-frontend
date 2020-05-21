import React, { useReducer } from "react";
import GlobalContext from "./state/GlobalContext";
import initialState from "./state/initialState";
import globalReducer from "./globalReducer";

const [state, dispatch] = useReducer(globalReducer, initialState);
function App() {
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="App"></div>
    </GlobalContext.Provider>
  );
}

export default App;
