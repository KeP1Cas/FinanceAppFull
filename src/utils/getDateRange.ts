import {
  eachDayOfInterval,
  format,
  startOfMonth,
  lastDayOfMonth,
} from "date-fns";

export const getDateRange = (from: Date, to: Date) => {
  return eachDayOfInterval({
    start: from,
    end: to,
  }).map(i => format(i, "dd.MM.yy"));
};

export const getFirstAndLastDayMonth = () => {
  return {
    firstDay: startOfMonth(new Date()),
    lastDay: lastDayOfMonth(new Date()),
  };
};
