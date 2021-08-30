import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { LinearProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProjectCardsComponent() {
  const classes = useStyles();

  return (
    <Link underline="none" to="/project-details">
      <Card className={classes.root} elevation={2}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="X-KEYSCORE"
          subheader="1 open ticket, 9 tickets closed"
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
          <br />
          <Typography variant="body2" color="textPrimary" component="p">
            Deadline:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            17th September, 2021
          </Typography>
          <br />
          <Typography variant="body2" color="textPrimary" component="p">
            Team Lead:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <AccountCircleIcon />
          </Typography>
          <br />
          <Typography variant="body2" color="textPrimary" component="p">
            Team:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <AccountCircleIcon /> <AccountCircleIcon /> <AccountCircleIcon />{" "}
            <AccountCircleIcon />
          </Typography>
          <br />
          <Typography variant="body2" color="textPrimary" component="p">
            Progress
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <LinearProgress
              variant="determinate"
              color="secondary"
              value={40}
            />
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
