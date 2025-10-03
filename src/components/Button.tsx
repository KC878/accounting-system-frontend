import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import type { ButtonProp } from "@src/interfaces/interfaces";

export const Button: React.FC<ButtonProp> = ({
  leftNavMetaData,
  handleClick,
  setPage,
  data,
}) => {
  return (
    <>
      {leftNavMetaData.map((item, index) => (
        <List>
          <ListItem disablePadding key={index}>
            <ListItemButton
              onClick={() => {
                setPage && setPage(item.key);
                handleClick && handleClick(); // call if defined
              }}
            >
              {item.icon && (
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
              )}
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        </List>
      ))}
    </>
  );
};
