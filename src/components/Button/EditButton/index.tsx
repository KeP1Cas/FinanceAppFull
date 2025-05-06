import React from "react";

import { StyledEditButton } from "./styled";
import { ReactComponent as EditIcon } from "assets/icons/edit.svg";

type Props = {} & React.ComponentPropsWithoutRef<"button">;

const EditButton: React.FC<Props> = props => {
  return (
    <StyledEditButton {...props}>
      <EditIcon />
    </StyledEditButton>
  );
};

export { EditButton };
