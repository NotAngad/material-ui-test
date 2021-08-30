import { makeStyles, Toolbar } from "@material-ui/core";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Containers/Dashboard/Dashboard";
import ProjectDetails from "./Containers/ProjectDetails/ProjectDetails";
import ProjectsList from "./Containers/ProjectsList/ProjectsList";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes?.root}>
      <Navbar />
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <Toolbar />
          <Route path="/" exact component={Dashboard} />
          <Route path="/projects-list" exact component={ProjectsList} />
          <Route path="/project-details" exact component={ProjectDetails} />
        </div>
      </main>
    </div>
  );
}

export default App;
