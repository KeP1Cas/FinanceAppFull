import React from "react";

import { StyledTableBody } from "./styled";

const TableBody: React.FC = ({ children }) => {
  return <StyledTableBody>{children}</StyledTableBody>;
};

export { TableBody };
