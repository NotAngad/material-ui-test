import React, { useState } from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const StyledListItem = withStyles({
  root: {
    color: "black",
    fontWeight: "bold",
    "&.Mui-selected": {
      backgroundColor: "#e6f2f2",
      color: "#f50057",
      borderRight: "3px solid #f50057",
      fontWeight: "bold",
    },
  },
})(ListItem);

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    textDecoration: "none",
    color: "#f50057",
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

function Sidebar(props) {
  const { wind } = props;

  const [routes] = useState([
    { text: "Dashboard", pathname: "/" },
    { text: "Projects", pathname: "/projects-list" },
  ]);
  const [activeRoute, setActiveRoute] = useState("Dashboard");
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <div className={classes.toolbar} />
      <div className={classes.drawerHeader}>
        <FavoriteIcon /> Heartbeat
      </div>
      <List>
        {routes?.map((route, index) => (
          <Link key={route?.path} to={route?.pathname}>
            <StyledListItem
              onClick={() => setActiveRoute(route?.text)}
              button
              key={route?.text}
              selected={route?.text === activeRoute}
            >
              <ListItemIcon
                style={{ color: route?.text === activeRoute ? "#f50057" : "" }}
              >
                {index % 2 === 0 ? <DashboardIcon /> : <AccountTreeIcon />}
              </ListItemIcon>
              <ListItemText primary={route?.text} />
            </StyledListItem>
          </Link>
        ))}
      </List>
    </>
  );

  const container =
    wind !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
