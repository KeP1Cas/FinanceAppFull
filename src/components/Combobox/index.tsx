import React from "react";

import { StyledCombobox } from "./styled";

import { ComboboxProps } from "evergreen-ui";

export type ComboboxRequiredType = {
  required?: boolean;
};

type Props = {} & ComboboxProps & ComboboxRequiredType;

const Combobox: React.FC<Props> = props => {
  return <StyledCombobox {...props} />;
};

export { Combobox };
