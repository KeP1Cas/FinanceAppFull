import React from "react";

import { Checkbox } from "pages/Home/components/Checkbox";
import { StyledTableTypeFilters, CheckboxContainer } from "./styled";

export type TableFiltersPropsType = {
  typeFilters: string[];
  checkedTypeFilters: string[];
  selectTypeFilters: (id: string) => void;
};

const TableTypeFilters: React.FC<TableFiltersPropsType> = ({
  typeFilters,
  checkedTypeFilters,
  selectTypeFilters,
}) => {
  return (
    <StyledTableTypeFilters>
      <CheckboxContainer>
        {typeFilters.map(filter => {
          const checked = checkedTypeFilters.includes(filter);
          const onChange = () => selectTypeFilters(filter);
          return (
            <Checkbox
              key={filter}
              label={filter}
              checked={checked}
              onChange={onChange}
            />
          );
        })}
      </CheckboxContainer>
    </StyledTableTypeFilters>
  );
};

export { TableTypeFilters };
