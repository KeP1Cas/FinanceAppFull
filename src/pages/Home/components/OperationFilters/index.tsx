import React from "react";

import { StyledOperationFilters } from "./styled";

const OperationFilters: React.FC = ({ children }) => {
  return <StyledOperationFilters>{children}</StyledOperationFilters>;
};

export { OperationFilters };
