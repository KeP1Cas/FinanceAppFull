import React, { useState } from "react";

import { ChartBar } from "components/ChartBar";
import { Datepicker } from "components/DatePicker";
import ChartPie from "components/ChartPie";
import { GeneralIncExp } from "./components/GeneralIncExp";

import {
  ContainerCharts,
  ContentWrapper,
  DateContainer,
  DatePickerContent,
  HeaderContent,
  TextDatePicker,
  TitleContent,
} from "./styled";

import { getDateRange, getFirstAndLastDayMonth } from "utils/getDateRange";
import BudgetSwitcher from "./components/BudgetSwitcher";
import Translate from "i18n/messages/translate";

export type PropsBudget = {
  value: string;
};

const Info = () => {
  const [toggleBudget, setToggleBudget] = useState(false);
  const [dateFrom, setDateFrom] = useState<Date>(
    getFirstAndLastDayMonth().firstDay,
  );
  const [dateTo, setDateTo] = useState<Date>(getFirstAndLastDayMonth().lastDay);
  const onChangeDateFrom = (date: Date) => {
    setDateFrom(date);
  };

  const onChangeDateTo = (date: Date) => {
    setDateTo(date);
  };

  const onHandlerClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.target as HTMLButtonElement;
  };

  const dateRange =
    new Date(dateFrom) <= new Date(dateTo)
      ? getDateRange(dateFrom, dateTo)
      : [];

  const handleClick = () => {
    setToggleBudget((prevState: boolean) => !prevState);
  };

  React.useEffect(() => {
    const trackSwitch: any = window.localStorage.getItem("toggleBudget");
    setToggleBudget(JSON.parse(trackSwitch));
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("toggleBudget", JSON.stringify(toggleBudget));
  }, [toggleBudget]);

  return (
    <>
      <ContainerCharts>
        <HeaderContent>
          <TitleContent>
            <BudgetSwitcher
              onClick={handleClick}
              toggle={toggleBudget}
              primary={toggleBudget}
            />
          </TitleContent>

          <GeneralIncExp />

          <ContentWrapper>
            <DatePickerContent>
              <DateContainer>
                <TextDatePicker>{Translate("from")}</TextDatePicker>
                <Datepicker
                  onClick={onHandlerClick}
                  onChange={onChangeDateFrom}
                  value={dateFrom}
                  dateTo={dateTo}
                  selected={dateFrom}
                />
              </DateContainer>
              <DateContainer>
                <TextDatePicker>{Translate("to")}</TextDatePicker>
                <Datepicker
                  onClick={onHandlerClick}
                  onChange={onChangeDateTo}
                  value={dateTo}
                  dateFrom={dateFrom}
                  selected={dateTo}
                />
              </DateContainer>
            </DatePickerContent>
          </ContentWrapper>
        </HeaderContent>

        <ChartBar dateRange={dateRange} toggleBudget={toggleBudget} />
        <ChartPie />
      </ContainerCharts>
    </>
  );
};

export { Info };
