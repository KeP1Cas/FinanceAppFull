import React from "react";

import { StyledOperationFiltersAddButton } from "./styled";

type Props = {
  onClick: () => void;
};

const OperationFiltersAddButton: React.FC<Props> = ({ ...props }) => {
  return <StyledOperationFiltersAddButton {...props} />;
};

export { OperationFiltersAddButton };
