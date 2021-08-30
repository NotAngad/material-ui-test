import Chart from "react-apexcharts";
import React from "react";

export default function LineChart() {
  const state = {
    options: {
      colors: ["#f50057", "#26A0FC"],
      chart: {
        id: "apexchart-example",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "Tickets Closed",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
      {
        name: "Tickets Open",
        data: [25, 50, 45, 60, 60, 70, 50, 101, 115],
      },
    ],
  };

  return (
    <Chart
      options={state.options}
      series={state.series}
      type="line"
      height={350}
    />
  );
}
