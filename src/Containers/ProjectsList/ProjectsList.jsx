import { Grid, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import ProjectCardsComponent from "../../Components/ProjectCards/ProjectCards";

export default function ProjectsList() {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            color="secondary"
            variant="outlined"
            label="Seach Projects"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      <br />

      <Grid spacing={3} container>
        {[0, 1, 2, 4, 5, 6, 7, 8].map((item) => (
          <Grid key={item} item xs={12} md={3}>
            <ProjectCardsComponent />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
