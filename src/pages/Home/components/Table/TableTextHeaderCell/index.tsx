import React from "react";

import { StyledTableTextHeaderCell } from "./styled";

export type TableTextHeaderCellPropsType = {
  sorting?: boolean | number;
  onClick?: () => void;
  tabIndex?: number;
  dateSorting?: number;
  quantitySorting?: number;
  datedirection?: number;
  quantitydirection?: number;
};

const TableTextHeaderCell: React.FC<TableTextHeaderCellPropsType> = ({
  children,
  tabIndex,
  ...restProps
}) => {
  return (
    <StyledTableTextHeaderCell {...restProps}>
      <div tabIndex={tabIndex}>{children}</div>
    </StyledTableTextHeaderCell>
  );
};

export { TableTextHeaderCell };
