import Chart from "react-apexcharts";
import React from "react";

export default function StatsChart() {
  const state = {
    series: [
      {
        name: "Tickets Closed",
        data: [76, 85, 101],
      },
      {
        name: "Tickets Open",
        data: [44, 55, 57],
      },
    ],
    options: {
      colors: ["#ea384d", "#26A0FC"],
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["X-KEYSCORE", "EPIC-SHELTER", "KUDRAT OS"],
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return `${val} tickets.`;
          },
        },
      },
    },
  };
  return (
    <Chart
      options={state.options}
      series={state.series}
      type="bar"
      height={350}
    />
  );
}
