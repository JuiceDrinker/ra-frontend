import React, { useContext, useState } from "react";
import GlobalContext from "../state/GlobalContext";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import HistoryIcon from "@material-ui/icons/History";
const History = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { history } = state;

  const handleClick = (e) => {
    const id = e.currentTarget.getAttribute("data-videoid");
    dispatch({ type: "search", payload: id });
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const HistoryList = () => (
    <div
      onClick={() => setIsDrawerOpen(false)}
      onKeyDown={() => setIsDrawerOpen(false)}
    >
      <List>
        {history.map((item) => {
          return (
            // Kind of hacky way to store keys
            <ListItem
              button
              key={item.created_at}
              onClick={(e) => handleClick(e)}
              data-videoid={item.videoId}
            >
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText>{`${item.title} by ${item.author}`}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
  return (
    <div className="history">
      <Drawer
        style={{ width: "500px" }}
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <HistoryList />
      </Drawer>
      <button className="history-button" onClick={() => setIsDrawerOpen(true)}>
        History
      </button>
    </div>
  );
};

export default History;
