import React, { useContext } from "react";
import GlobalContext from "../state/GlobalContext";

const History = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { history } = state;

  const handleClick = (e) => {
    const id = e.target.getAttribute("data-videoid");
    dispatch({ type: "search", payload: id });
  };

  return (
    <div className="history">
      <ul>
        {history
          ? history.map((item) => {
              return (
                <li
                  key={item.created_at} // Kind of hacky way to store keys
                  data-videoid={item.videoId} // Might be a better way to store videoId for onClick purposes
                  onClick={handleClick}
                >
                  {item.author} {item.title}
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default History;
