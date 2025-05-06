import React from "react";

import { StyledTable } from "./styled";

type Props = {};

const Table: React.FC<Props> = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

export { Table };
