import React from "react";

import { StyledTrashButton } from "./styled";

import { ReactComponent as TrashIcon } from "assets/icons/trash.svg";

import { ButtonProps } from "evergreen-ui";

const TrashButton: React.FC<ButtonProps> = () => (
  <StyledTrashButton>
    <TrashIcon />
  </StyledTrashButton>
);

export { TrashButton };
