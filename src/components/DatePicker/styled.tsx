import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { designSystem } from "constants/designSystem";

import CalendarIcon from "assets/icons/calendar.svg";
import DatePicker from "react-datepicker";

const Calendar = styled.div`
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(27, 37, 86, 0.16);
  overflow: hidden;
  background: ${designSystem.bgColor.bgCalendar};
  border: 1px solid rgba(67, 83, 121, 0.2);
`;

const Popper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
`;
const HeaderCalendar = createGlobalStyle`
    .react-datepicker__header {
      background: #435379;
      border-bottom: 0;
    }
    .react-datepicker__day-name, 
    .react-datepicker__current-month{
      color: ${designSystem.color.white};
    }
    
    .react-datepicker__year-read-view--down-arrow, 
    .react-datepicker__month-read-view--down-arrow, 
    .react-datepicker__month-year-read-view--down-arrow, 
    .react-datepicker__navigation-icon::before {
      border-color: ${designSystem.color.white};
    }
    .react-datepicker__day--selected,
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--selected,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--selected,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--selected,
    .react-datepicker__year-text--in-selecting-range,
    .react-datepicker__year-text--in-range{
          background-color: #435379;
          border: 1px solid #000;
        }

    .react-datepicker__day--selected{
      color: ${designSystem.color.white};
    }

    .react-datepicker__day:hover{
      background: #999999;
    }
    
`;

const ExampleCustomButton = styled.span`
  background-color: ${designSystem.bgColor.white};
  border: 1px solid rgba(67, 83, 121, 0.4);
  box-sizing: border-box;
  border-radius: 31px;
  color: ${designSystem.color.normal};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding: 4px 36px 4px 24px;
  width: 175px;
  outline: none;
  appearance: none;
  max-height: 46px;
  cursor: pointer;
  position: relative;
  text-align: left;

  ::after {
    content: "";
    position: absolute;
    left: 80%;
    top: 18%;
    background-size: 10px;
    width: 20px; 
    height: 20px;
    cursor: pointer;
    background-image: url("${CalendarIcon}");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const DatePickerWrapper = styled(({ className, ...restProps }) => (
  <DatePicker wrapperClassName={className} {...restProps} />
))`
  width: 100%;
`;

export {
  Popper,
  Calendar,
  ExampleCustomButton,
  HeaderCalendar,
  DatePickerWrapper,
};
