import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  Box,
  Button,
  CardActions,
  Checkbox,
  Fab,
  FormControlLabel,
  TextField,
} from "@material-ui/core";

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
    margin: "20px 0px",
  },
}));

export default function RequirementsComponent() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={5}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Add Requirements
        </Typography>
        <Fab variant="extended" size="small" color="secondary" aria-label="Add">
          <AddIcon />
          Requirement
        </Fab>
        <Box>
          <br />
          <form className={classes.container} noValidate>
            <TextField
              id="standard-number"
              label="Requirement Heading"
              variant="outlined"
              fullWidth
              className={classes?.textField}
            />
            <TextField
              id="standard-number"
              label="Requirement Label"
              variant="outlined"
              fullWidth
              className={classes?.textField}
            />
            <TextField
              id="standard-number"
              label="Requirement Description"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              className={classes?.textField}
            />
            <FormControlLabel
              control={<Checkbox checked={true} name="checkedA" />}
              label="Sensitive Information"
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
