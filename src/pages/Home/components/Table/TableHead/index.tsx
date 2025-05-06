import React from "react";

import { StyledTableHead } from "./styled";

type Props = {};

const TableHead: React.FC<Props> = ({ children }) => {
  return <StyledTableHead>{children}</StyledTableHead>;
};

export { TableHead };
