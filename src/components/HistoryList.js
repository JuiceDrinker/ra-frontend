import React from "react";

const HistoryList = ({ setIsDrawerOpen }) => (
    const { state, dispatch } = useContext(GlobalContext);
    const { history } = state;
  <div
    onClick={() => setIsDrawerOpen(false)}
    onKeyDown={() => setIsDrawerOpen(false)}
  >
    <List>
      {history.map((item) => {
        return (
          // Kind of hacky way to store keys
          <ListItem
            classes={classes.button}
            style={{
              color: "#FFF",
              borderBottom: "1px solid red",
            }}
            button
            key={item.created_at}
            onClick={(e) => handleClick(e)}
            data-videoid={item.videoId}
            onMouseEnter={(e) => {
              e.target.style.color = "#eee";
            }}
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

export default HistoryList;
