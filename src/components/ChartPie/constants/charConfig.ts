import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

window.addEventListener("resize", () => {
  if (window.innerWidth < 450) {
    Chart.defaults.font.size = 13;
  } else {
    Chart.defaults.font.size = 18;
  }
});

export const datasets = {
  label: "Траты",
  backgroundColor: [
    "rgba(255, 99, 132, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(255, 206, 86, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(153, 102, 255, 0.5)",
    "rgba(255, 159, 64, 0.5)",
    "rgba(217, 213, 7, 0.5)",
  ],
  borderColor: [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(217, 213, 7, 1)",
    // "#435379",
  ],
  borderWidth: 1,
  hoverOffset: 15,
  spacing: 1,
};

export const datalabelsOptions = {
  display: true,
  align: "end",
  borderRadius: 3,
  color: "#2a3d69",
  font: {
    size: 18,
    weight: "bold",
  },
};

export const legend = {
  position: "left",
  onClick: false,
};

// const colorPie = OperationsStore.data.map(i => {
//   switch (i.category) {
//     case "Clothes":
//       return "#FFD3C9";
//     case "Food":
//       return "#FFEAC2";
//     case "Home service":
//       return "#F0E3FF";
//     case "Health":
//       return "#CDF9E1";
//     case "Restaurants":
//       return "#FFE5F3";
//     case "Entertainment":
//       return "#F0E3FF";
//     case "Salary":
//       return "#DDEFFF";
//     case "Transport":
//       return "#FFE5F3";
//     case "Credits":
//       return "#dde8f0";
//     case "Gifts":
//       return "#85c8de";
//     case "Benefit":
//       return "#b1daea";
//     case "Aid":
//       return "#dae5ea";
//     case "Award":
//       return "#64ac8f";
//     case "Dues":
//       return "#94d6ba";
//     case "Petrol":
//       return "#e7f5dc";
//     case "Phone":
//       return "#c0dfc2";
//     case "Public service":
//       return "#D9FFFF";
//     case "Kindergarten":
//       return "#0195ae";
//     case "Gym":
//       return "#85c8de";
//     case "Insurance":
//       return "#b1daea";
//     case "Vacation":
//       return "#dae5ea";
//     case "Repairs":
//       return "#64ac8f";
//     case "Medicine":
//       return "#94d6ba";
//     case "Travel":
//       return "#B3FFFC";
//     case "Home appliances":
//       return "#97cbdc";
//     case "Books":
//       return "#018abd";
//     case "Furniture":
//       return "#018abd";
//     default:
//       return `${designSystem.color.light}`;
//   }
// });
