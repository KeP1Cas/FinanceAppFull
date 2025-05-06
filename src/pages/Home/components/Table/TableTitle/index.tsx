import React from "react";

import { StyledTableTitle } from "./styled";

type Props = {};

const TableTitle: React.FC<Props> = ({ children }) => {
  return <StyledTableTitle>{children}</StyledTableTitle>;
};

export { TableTitle };
