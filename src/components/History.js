import React, { useContext, useEffect } from "react";
import GlobalContext from "../state/GlobalContext";
const History = () => {
  const { state } = useContext(GlobalContext);
  const { history } = state;

  useEffect(() => {
    console.log(localStorage);
    localStorage.removeItem("history");
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <div>
      <ul>
        {history.map((item) => {
          return <li key={item}> {item} </li>;
        })}
      </ul>
    </div>
  );
};

export default History;
