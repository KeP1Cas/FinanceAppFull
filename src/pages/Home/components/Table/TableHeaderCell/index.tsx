import React from "react";

import { StyledTableHeaderCell } from "./styled";

type Props = {};

const TableHeaderCell: React.FC<Props> = ({ children }) => {
  return <StyledTableHeaderCell>{children}</StyledTableHeaderCell>;
};

export { TableHeaderCell };
