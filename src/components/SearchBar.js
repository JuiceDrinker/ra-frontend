import React, { useContext, useState } from "react";
import globalContext from "../state/GlobalContext";
const SearchBar = () => {
  const { dispatch } = useContext(globalContext);

  const getYtSuffix = (url) => {
    return url.split("=")[1];
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const suffix = getYtSuffix(search);
    dispatch({ type: "search", payload: suffix });
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
