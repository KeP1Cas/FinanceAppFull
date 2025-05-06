import React, { useContext } from "react";
import { compareAsc, parse } from "date-fns";

import { Bar } from "react-chartjs-2";
import { BarContainer } from "./styled";
import { datasets, options } from "./constants/charConfig";
import { OperationsStoreContext } from "stores/OperationsStore";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { getFirstAndLastDayMonth } from "../../utils/getDateRange";

type Props = {
  dateRange: string[];
  toggleBudget: boolean;
};
const ChartBar: React.FC<Props> = observer(({ dateRange, toggleBudget }) => {
  const OperationsStore = useContext(OperationsStoreContext);

  const firstDay = getFirstAndLastDayMonth().firstDay;
  const lastDay = getFirstAndLastDayMonth().lastDay;

  const typeBudget = toggleBudget ? "Expenses" : "Income";

  const expensesByDateRange = toJS(OperationsStore.data)
    .filter(({ type, date }) => {
      return (
        typeBudget === type &&
        [0, 1].some(
          n =>
            n === compareAsc(parse(date, "dd/MM/yyyy", new Date()), firstDay),
        ) &&
        [-1, 0].some(
          n => n === compareAsc(parse(date, "dd/MM/yyyy", new Date()), lastDay),
        )
      );
    })
    .sort((a: any, b: any) => compareAsc(new Date(a.date), new Date(b.date)));

  const quantitiesByDates = dateRange.map(dateFromRange => {
    return expensesByDateRange
      .filter(({ date }) => {
        return (
          parse(dateFromRange, "dd.MM.yy", new Date()).getTime() ===
          parse(date, "dd/MM/yyyy", new Date()).getTime()
        );
      })
      .reduce((acc, cur) => {
        return acc + cur.quantity;
      }, 0);
  });

  const records = {
    labels: dateRange,
    datasets: [
      {
        data: quantitiesByDates,
        ...datasets,
      },
    ],
  };

  return (
    <BarContainer>
      <Bar data={records} options={options} />
    </BarContainer>
  );
});

export { ChartBar };
