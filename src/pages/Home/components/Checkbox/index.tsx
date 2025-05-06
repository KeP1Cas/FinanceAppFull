import React from "react";

import { StyledCheckbox } from "./styled";

type Props = {
  label?: string;
  checked?: boolean;
  onChange?: () => void;
};

const Checkbox: React.FC<Props> = ({ ...props }) => {
  return <StyledCheckbox {...props} />;
};

export { Checkbox };
