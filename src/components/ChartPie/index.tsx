import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Pie } from "react-chartjs-2";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { datasets, datalabelsOptions, legend } from "./constants/charConfig";
import { OperationsStoreContext } from "stores/OperationsStore";

import { PieContainer, PieTitle, Text } from "./styled";
import Translate from "i18n/messages/translate";

const ChartPie = observer(() => {
  const OperationsStore = useContext(OperationsStoreContext);

  Chart.register(ChartDataLabels);

  const expensesCategory = OperationsStore.data.filter(
    i => i.type == "Expenses",
  );
  const transactionsByCategory = expensesCategory.reduce(
    (acc: any, cur) => (
      (acc[cur.category] = (acc[cur.category] || 0) + cur.quantity), acc
    ),
    [],
  );
  const dataQuantity = Object.keys(transactionsByCategory).map(
    i => transactionsByCategory[i],
  );

  const generalExp = dataQuantity.reduce((acc, cur) => acc + cur, 0);

  const records = {
    labels: Object.keys(transactionsByCategory),
    datasets: [
      {
        data: dataQuantity,
        ...datasets,
      },
    ],
  };

  const options = {
    responsive: true,
    radius: "90%",
    plugins: {
      legend: legend,
      datalabels: {
        ...datalabelsOptions,
        formatter: (value: number) => {
          const sum = (value * 100) / generalExp;
          return `${sum.toFixed(2)}%`;
        },
      },
    },
  };

  return (
    <PieContainer>
      <PieTitle>
        <Text>{Translate("pieCategory")}⠀</Text>
      </PieTitle>

      <Pie data={records} options={options} />
    </PieContainer>
  );
});

export default ChartPie;
