import React, { useState } from "react";
import { Grid, Toolbar } from "@material-ui/core";
import TableComponent from "../../Components/Table/Table";
import CardComponent from "../../Components/Cards/Cards";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import BugReportIcon from "@material-ui/icons/BugReport";
import LockIcon from "@material-ui/icons/Lock";
import PieChartComponent from "../../Components/PieChart/PieChart";

export default function Dashbaord() {
  const [state] = useState({
    cards: [
      { title: "Projects", value: 3, icon: <AccountTreeIcon /> },
      { title: "Tickets Open", value: 5, icon: <BugReportIcon /> },
      { title: "Tickets Closed", value: 2, icon: <LockIcon /> },
    ],
  });
  return (
    <>
      <Grid container spacing={3}>
        {state?.cards?.map((card) => (
          <Grid key={card?.title} item xs={12} sm={12} lg={4}>
            <CardComponent data={card} />
          </Grid>
        ))}
      </Grid>

      <Toolbar />
      <PieChartComponent />

      <Toolbar />
      <TableComponent />
    </>
  );
}
