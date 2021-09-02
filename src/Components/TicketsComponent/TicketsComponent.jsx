import { Fab, Grid } from "@material-ui/core";
import React from "react";
import ProjectCardsComponent from "../ProjectCards/ProjectCards";
import StatsChart from "../StatsChart/StatsChart";
import TableComponent from "../Table/Table";
import AddIcon from "@material-ui/icons/Add";

export default function TicketsComponent() {
  return (
    <>
      <Grid container>
        <Grid alignItems="center" item xs={12} md={3}>
          <ProjectCardsComponent />
        </Grid>
        <Grid item xs={12} md={9}>
          <StatsChart />
        </Grid>
      </Grid>
      <br />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Fab
          variant="extended"
          size="medium"
          color="secondary"
          aria-label="Add"
        >
          <AddIcon />
          Ticket
        </Fab>
      </div>
      <br />
      <Grid container>
        <Grid item xs={12}>
          <TableComponent />
        </Grid>
      </Grid>
    </>
  );
}
