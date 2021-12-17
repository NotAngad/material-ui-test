import React from 'react';
import { Fab, Grid, InputAdornment, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import ProjectCardsComponent from '../../Components/ProjectCards/ProjectCards';

export default function ProjectsList() {
  return (
    <>
      <Grid container item spacing={2}>
        <Grid item xs={12} md={10}>
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
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          item
          xs={12}
          md={2}
        >
          <Fab
            variant="extended"
            size="medium"
            color="secondary"
            aria-label="Add"
            href="/create-project"
          >
            <AddIcon />
            Project
          </Fab>
        </Grid>
      </Grid>

      <br />

      <Grid spacing={3} container>
        {[0, 1, 2, 4, 5, 6, 7, 8].map(item => (
          <Grid key={item} item xs={12} md={3}>
            <ProjectCardsComponent />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
