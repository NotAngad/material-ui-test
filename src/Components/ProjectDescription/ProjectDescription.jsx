import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button, CardActions, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function ProjectDesciptionComponent() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={5}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Project Details
        </Typography>
        <br />
        <TextField
          id="outlined-basic"
          label="Project Title"
          variant="outlined"
          fullWidth
        />
        <br />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Project Description"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
        />
        <br />
        <br />
        <CardActions>
          <Button variant="contained" color="secondary" size="small">
            Save
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
