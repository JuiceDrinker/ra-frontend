import React, { useContext, useState } from "react";
import globalContext from "../state/GlobalContext";
const SearchBar = () => {
  const { dispatch } = useContext(globalContext);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "search", payload: search });
  };
  const [search, setSearch] = useState("");
  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button> Watch This Video </button>
      </form>
    </div>
  );
};

export default SearchBar;
