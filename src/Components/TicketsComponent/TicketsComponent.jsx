import { Grid } from "@material-ui/core";
import React from "react";
import ProjectCardsComponent from "../ProjectCards/ProjectCards";
import StatsChart from "../StatsChart/StatsChart";
import TableComponent from "../Table/Table";

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
      <Grid container>
        <Grid item xs={12}>
          <TableComponent />
        </Grid>
      </Grid>
    </>
  );
}
