import React from "react";

import { StyledTableRow } from "./styled";

type Props = {};

const TableRow: React.FC<Props> = ({ children }) => {
  return <StyledTableRow>{children}</StyledTableRow>;
};

export { TableRow };
