import React, { useContext, useState, useEffect } from "react";
import globalContext from "../state/GlobalContext";
import { getVideoId, validateYtUrl } from "../utils/helperFunctions";
import "../styles.css";
const SearchBar = () => {
  const { state, dispatch } = useContext(globalContext);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    if (search.length === 0 || !validateYtUrl(search)) {
      setError(true);
      return;
    }
    setError(false);
    const videoId = getVideoId(search);
    dispatch({ type: "search", payload: videoId });
  };

  useEffect(() => {
    setError(false); //Remove Error message if new video loaded
  }, [state.currentVideo]);

  return (
    <>
      <div className="search-bar">
        <form onSubmit={(e) => submitHandler(e)}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Paste a YouTube URL here"
          />
          <button> Watch This Video </button>
        </form>
      </div>
      {error && <p className="error">Enter a valid URL</p>}
    </>
  );
};

export default SearchBar;
