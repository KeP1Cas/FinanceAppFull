import React from "react";

import { TableTitle } from "pages/Home/components/Table/TableTitle";
import {
  TableFiltersPropsType,
  TableTypeFilters,
} from "pages/Home/containers/TableContainer/TableTypeFilters";
import {
  DatePropsType,
  TableDatePicker,
} from "pages/Home/containers/TableContainer/TableDatePicker";
import {
  TablePreHeaderContainer,
  TableTitleContainer,
  TableDatePickerContainer,
} from "./styled";
import Translate from "i18n/messages/translate";

type Props = {} & DatePropsType & TableFiltersPropsType;

const TablePreHeader: React.FC<Props> = ({
  typeFilters,
  selectTypeFilters,
  checkedTypeFilters,
  ...tableDateProps
}) => {
  return (
    <TablePreHeaderContainer>
      <TableTitleContainer>
        <TableTitle>{Translate("transactionsList")}</TableTitle>
        <TableTypeFilters
          checkedTypeFilters={checkedTypeFilters}
          selectTypeFilters={selectTypeFilters}
          typeFilters={typeFilters}
        />
      </TableTitleContainer>
      <TableDatePickerContainer>
        <TableTitle>
          <TableDatePicker {...tableDateProps} />
        </TableTitle>
      </TableDatePickerContainer>
    </TablePreHeaderContainer>
  );
};

export { TablePreHeader };
