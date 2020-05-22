import React, { useContext, useState } from "react";
import globalContext from "../state/GlobalContext";
import { getVideoId } from "../utils/helperFunctions";

const SearchBar = () => {
  const { dispatch } = useContext(globalContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const videoId = getVideoId(search);
    dispatch({ type: "search", payload: videoId });
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
