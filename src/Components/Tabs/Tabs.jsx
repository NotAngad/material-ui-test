import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Box, Grid, Typography } from "@material-ui/core";
import CalendarComponent from "../Calendar/Calendar";
import TicketsComponent from "../TicketsComponent/TicketsComponent";
import RequirementsComponent from "../Requirements/Requirements";
import ProfileCardComponent from "../ProfileCard/ProfileCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      style={{ backgroundColor: "white", color: "black" }}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontWeight: "bold",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
}));

export default function TabsComponent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root} elevation={0}>
      <Tabs
        TabIndicatorProps={{
          style: {
            background: "white",
            height: "5px",
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",
          },
        }}
        value={value}
        onChange={handleChange}
        centered
      >
        <Tab label="Timeline" {...a11yProps(0)} />
        <Tab label="Requirements" {...a11yProps(1)} />
        <Tab label="Members" {...a11yProps(2)} />
        <Tab label="Tickets" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <br />
        <CalendarComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RequirementsComponent />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid spacing={2} container>
          {[0, 1, 2, 5, 6, 4].map((value) => (
            <Grid key={value} item xs={4}>
              <ProfileCardComponent />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TicketsComponent />
      </TabPanel>
    </Paper>
  );
}
