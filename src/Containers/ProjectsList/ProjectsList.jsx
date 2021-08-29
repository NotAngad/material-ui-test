import { Grid } from "@material-ui/core";
import React from "react";
import ProjectCardsComponent from "../../Components/ProjectCards/ProjectCards";

export default function ProjectsList() {
  return (
    <>
      <Grid spacing={2} container>
        {[0, 1, 2, 4].map((item) => (
          <Grid key={item} item xs={12} md={3}>
            <ProjectCardsComponent />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
