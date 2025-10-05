import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const BasicList = () => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        maxHeight: 300,
      }}
    >
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <ListItem
          key={item}
          sx={{
            borderBottom: "1px solid #f0f0f0",
            "&:hover": { backgroundColor: "#f9f9f9" },
          }}
        >
          <ListItemText primary={`Item ${item + 1}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default BasicList;
