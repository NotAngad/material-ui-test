import {
  Box,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: "2px solid #ea384d",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  cardAlign: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function CardComponent({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box m={1}>
          <Typography variant="h5" gutterBottom color="textSecondary">
            <Grid container spacing={1}>
              <Grid
                item
                xs={1}
                className={classes.cardAlign}
                style={{ color: "#ea384d" }}
              >
                {data?.icon}
              </Grid>
              <Grid item xs={11}>
                {data?.title}
              </Grid>
            </Grid>
          </Typography>
        </Box>
        <Typography variant="h3" gutterBottom>
          <Grid container>
            <Grid item xs={2} className={classes.cardAlign}>
              {data?.value}
            </Grid>
          </Grid>
        </Typography>
      </CardContent>
    </Card>
  );
}
