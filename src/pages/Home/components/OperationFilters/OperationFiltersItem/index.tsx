import React from "react";

import { StyledOperationFiltersItem } from "./styled";

export type OperationFilterProps = {
  label: string;
  isChosen?: boolean;
};

type Props = {
  onClick: () => void;
} & OperationFilterProps;

const OperationFiltersItem: React.FC<Props> = props => {
  return (
    <StyledOperationFiltersItem
      label={props.label}
      isChosen={props.isChosen}
      onClick={props.onClick}
    >
      {props.label}
    </StyledOperationFiltersItem>
  );
};

export { OperationFiltersItem };
