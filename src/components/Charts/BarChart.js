import React from "react";
import { HorizontalBar } from "react-chartjs-2";

function BarChart(props) {
  const data = {
    labels: ["Development", "Design", "Print", "Marketing"],
    datasets: [
      {
        label: "Code Skills",
        data: [95, 85, 80, 70],
        backgroundColor: [
          props.background,
          props.background,
          props.background,
          props.background,
        ],
      },
    ],
  };

  const options = {
    title: {
      dislay: true,
      text: "Code Skills",
    },
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
            stepSize: 10,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <div className="bar-chart-wrapper">
      <HorizontalBar data={data} options={options} />
    </div>
  );
}

export default BarChart;
