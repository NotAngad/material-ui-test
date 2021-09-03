import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, Button, CardActions, Fab, TextField } from "@material-ui/core";

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
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 200,
  },
}));

export default function EventComponent() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={5}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Add Events
        </Typography>
        <Fab variant="extended" size="small" color="secondary" aria-label="Add">
          <AddIcon />
          Event
        </Fab>
        <Box>
          <br />
          <form className={classes.container} noValidate>
            <TextField
              id="standard-number"
              label="Event name"
              value="Milestone 1"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="datetime-local"
              label="Milestone From"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="datetime-local"
              label="Milestone To"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Box>
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
