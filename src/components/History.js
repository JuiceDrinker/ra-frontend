import React, { useContext, useEffect } from "react";
import GlobalContext from "../state/GlobalContext";
const History = () => {
  const { state } = useContext(GlobalContext);
  const { history } = state;

  // useEffect(() => {
  //   localStorage.removeItem("history");
  //   localStorage.setItem("history", JSON.stringify(history));
  // }, [history]);

  return (
    <div>
      <ul>
        {history
          ? history.map((item) => {
              return (
                <li key={item._id}>
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
