import React from "react";
import { Grid, Toolbar } from "@material-ui/core";
import { Pie } from "react-chartjs-2";
import TableComponent from "../../Components/Table/Table";
import CardComponent from "../../Components/Cards/Cards";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Dashbaord() {
  return (
    <>
      <Grid container spacing={3}>
        {[0, 1, 2].map((item) => (
          <Grid key={item} item xs={12} sm={12} lg={4}>
            <CardComponent />
          </Grid>
        ))}
      </Grid>

      <Toolbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "350px",
            display: "inline-flex",
          }}
        >
          <Pie
            data={data}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>

      <Toolbar />
      <TableComponent />
    </>
  );
}
