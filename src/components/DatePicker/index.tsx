import React, { forwardRef } from "react";

import "react-datepicker/dist/react-datepicker.css";
import {
  Calendar,
  DatePickerWrapper,
  ExampleCustomButton,
  HeaderCalendar,
  Popper,
} from "./styled";

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  value?: string | Date;
  dateFrom?: Date;
  dateTo?: Date;
  selected?: Date;
  onChange?: (date: Date) => void;
};
const Datepicker: React.FC<Props> = ({
  value,
  onClick,
  dateFrom,
  dateTo,
  selected,
  onChange,
}) => {
  const ExampleCustomInput = forwardRef(
    ({ value, onClick }: Props, ref: any) => (
      <ExampleCustomButton onClick={onClick} ref={ref}>
        {value !== "" ? value : "Select Date"}
      </ExampleCustomButton>
    ),
  );

  return (
    <>
      <DatePickerWrapper
        selected={selected}
        onChange={onChange}
        customInput={<ExampleCustomInput value={value} onClick={onClick} />}
        dateFormat="dd / MM / yyyy"
        popperContainer={Popper}
        calendarContainer={Calendar}
        minDate={dateFrom}
        maxDate={dateTo}
        closeOnScroll={true}
      />
      <HeaderCalendar />
    </>
  );
};

export { Datepicker };
