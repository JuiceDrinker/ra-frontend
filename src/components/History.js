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
        {
          // Unclear why I have to access history[0] => Probably has to do with how I wrote "syncWithDB" dispatch
          history[0]
            ? history[0].map((item) => {
                return (
                  <li key={item._id}>
                    {item.author} {item.title}
                  </li>
                );
              })
            : null
        }
      </ul>
    </div>
  );
};

export default History;
