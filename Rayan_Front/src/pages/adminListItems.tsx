import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import LayersIcon from "@mui/icons-material/Layers";
import AddIcon from "@mui/icons-material/Add";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/admin/all-games-admin">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Show All games" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/allUsers">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/add-game">
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Add Game" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/add-admin">
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Add Admin" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/delete-user">
      <ListItemIcon>
        <PersonRemoveIcon />
      </ListItemIcon>
      <ListItemText primary="Delete User" />
    </ListItemButton>
  </React.Fragment>
);
