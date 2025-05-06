import { Chart } from "react-chartjs-2";

Chart.defaults.font.size = 16;
Chart.defaults.font.weight = "bold";
Chart.defaults.color = "#435379";

export const datasets = {
  label: "",
  backgroundColor: "rgba(67, 83, 121, 0.5)",
  borderRadius: 4,
  hoverBackgroundColor: "rgba(67, 83, 121, 0.9)",
  categoryPercentage: 1,
};

export const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
      caretSize: 3,
    },
    datalabels: {
      display: false,
    },
  },

  maintainAspecrRatio: false,
  scales: {
    yAxes: {
      ticks: {
        beginAtZero: true,
        min: 0,
        // stepSize: 50,
        crossAlign: "start",
        callback: function(value: number) {
          const yAxes = value == 0 ? value : `$${value}.00`;
          return yAxes;
        },
      },

      grid: {
        display: false,
      },
      stacked: true,
    },

    xAxes: {
      ticks: {},
      grid: {
        display: false,
      },
    },
  },
};
