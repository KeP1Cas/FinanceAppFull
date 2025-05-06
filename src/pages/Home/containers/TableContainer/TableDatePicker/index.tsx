import React, { Dispatch, SetStateAction } from "react";

import { Datepicker } from "components/DatePicker";

import { TableDateContainer, TableDateItemContainer } from "./styled";

import { IDataModel } from "stores/OperationsStore";
import Translate from "../../../../../i18n/messages/translate";

export type DatePropsType = {
  dateFrom: Date;
  dateTo: Date;
  setDateFrom: (date: Date) => void;
  setDateTo: (date: Date) => void;
  setCheckedTransactions: Dispatch<SetStateAction<IDataModel[]>>;
  setGlobalCheckbox: Dispatch<SetStateAction<boolean>>;
};

const TableDatePicker: React.FC<DatePropsType> = ({
  dateFrom,
  dateTo,
  setDateFrom,
  setDateTo,
  setCheckedTransactions,
  setGlobalCheckbox,
}) => {
  const onHandlerClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.target as HTMLButtonElement;
  };

  const onChangeDateFrom = (date: Date) => {
    setDateFrom(date);
    setCheckedTransactions([]);
    setGlobalCheckbox(false);
  };

  const onChangeDateTo = (date: Date) => {
    setDateTo(date);
    setCheckedTransactions([]);
    setGlobalCheckbox(false);
  };

  return (
    <TableDateContainer>
      <TableDateItemContainer className="dateFrom">
        <span className="dateLabel">{Translate("from")}</span>
        <Datepicker
          onClick={onHandlerClick}
          value={dateFrom}
          dateTo={dateTo}
          onChange={onChangeDateFrom}
          selected={dateFrom}
        />
      </TableDateItemContainer>
      <TableDateItemContainer className="dateTo">
        <span className="dateLabel">{Translate("to")}</span>
        <Datepicker
          onClick={onHandlerClick}
          value={dateTo}
          onChange={onChangeDateTo}
          selected={dateTo}
          dateFrom={dateFrom}
        />
      </TableDateItemContainer>
    </TableDateContainer>
  );
};

export { TableDatePicker };
