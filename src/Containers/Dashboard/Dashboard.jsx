import React, { useState } from 'react';
import { Grid, Toolbar } from '@material-ui/core';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BugReportIcon from '@material-ui/icons/BugReport';
import LockIcon from '@material-ui/icons/Lock';
import ApexChart from '../../Components/LineChart/LineChart';
import StatsChart from '../../Components/StatsChart/StatsChart';
import TableComponent from '../../Components/Table/Table';
import CardComponent from '../../Components/Cards/Cards';

export default function Dashbaord() {
  const [state] = useState({
    cards: [
      { title: 'Projects', value: 3, icon: <AccountTreeIcon /> },
      { title: 'Tickets Open', value: 5, icon: <BugReportIcon /> },
      { title: 'Tickets Closed', value: 2, icon: <LockIcon /> },
    ],
  });

  return (
    <>
      <Grid container spacing={3}>
        {state?.cards?.map(card => (
          <Grid key={card?.title} item xs={12} sm={12} lg={4}>
            <CardComponent data={card} />
          </Grid>
        ))}
      </Grid>

      <Toolbar />
      <Grid container>
        {[0, 1].map(graph => (
          <Grid key={graph} item xs={12} md={6}>
            {graph === 1 ? <ApexChart /> : <StatsChart />}
          </Grid>
        ))}
      </Grid>

      <Toolbar />
      <TableComponent />
    </>
  );
}
