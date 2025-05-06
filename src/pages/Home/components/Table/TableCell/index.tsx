import React from "react";

import { StyledTableCell } from "./styled";

type Props = {};

const TableCell: React.FC<Props> = ({ children }) => {
  return <StyledTableCell>{children}</StyledTableCell>;
};

export { TableCell };
