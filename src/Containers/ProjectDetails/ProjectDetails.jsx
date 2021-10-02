import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import { Fab, Grid } from '@material-ui/core';
import TabsComponent from '../../Components/Tabs/Tabs';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
  },
  members: {
    color: '#ea384d',
    display: 'flex',
    alignItems: 'center',
  },
  projectStats: {
    display: 'flex',
  },
  statButton: {
    flexGrow: 0.2,
  },
  memberStats: {
    color: theme.palette.secondary.main,
    marginLeft: '10px',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 5,
  },
}));

export default function ProjectDetails() {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Card className={classes.root} elevation={0}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                X-KEYSCORE
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Created by FSB on 12th September 2021
              </Typography>
              <br />
              <Typography variant="span">
                <div className={classes?.projectStats}>
                  <Fab
                    variant="extended"
                    size="small"
                    color="secondary"
                    className={classes?.statButton}
                    aria-label="Add"
                  >
                    <AddIcon />
                    Members
                  </Fab>
                  <div className={classes?.memberStats}>
                    <AccountCircleIcon /> <AccountCircleIcon />{' '}
                    <AccountCircleIcon /> <AccountCircleIcon />
                  </div>
                </div>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <br />
      <Card className={classes.root} elevation={0}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Project Description
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus laboriosam tenetur officia expedita. Placeat laboriosam
            quisquam aliquid dolor delectus animi reprehenderit labore quas
            nobis. Magnam distinctio eligendi voluptatibus deserunt laborum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            assumenda, nostrum velit voluptate iste voluptates aliquid quaerat
            labore laborum deleniti, non ipsa incidunt sequi perspiciatis
            facilis aliquam mollitia quo ea! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Repellendus laboriosam tenetur
            officia expedita. Placeat laboriosam quisquam aliquid dolor delectus
            animi reprehenderit labore quas nobis. Magnam distinctio eligendi
            voluptatibus deserunt laborum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Laudantium assumenda, nostrum velit
            voluptate iste voluptates aliquid quaerat labore laborum deleniti,
            non ipsa incidunt sequi perspiciatis facilis aliquam mollitia quo
            ea!
          </Typography>

          <br />
          <TabsComponent />
        </CardContent>
      </Card>
    </>
  );
}
