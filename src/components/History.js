import React, { useContext, useState } from "react";
import GlobalContext from "../state/GlobalContext";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import HistoryIcon from "@material-ui/icons/History";
import { makeStyles } from "@material-ui/core/styles";
const History = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { history } = state;

  const handleClick = (e) => {
    const id = e.currentTarget.getAttribute("data-videoid");
    dispatch({ type: "search", payload: id });
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const useStyles = makeStyles({
    drawerPaper: {
      width: "50%",
      backgroundColor: "#000",
    },

    button: {
      color: "#FFF",
      borderBottom: "1px solid red",
      "&:hover": {
        borderBottom: "1px solid white",
      },
    },
  });

  const classes = useStyles();

  const HistoryList = () => {
    return (
      <div
        onClick={() => setIsDrawerOpen(false)}
        onKeyDown={() => setIsDrawerOpen(false)}
      >
        <List>
          {history.map((item) => {
            return (
              // Kind of hacky way to store keys
              <ListItem
                classes={{ root: classes.button }}
                style={{}}
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
  };

  return (
    <div className="history">
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
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
