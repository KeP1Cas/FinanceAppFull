import React from "react";

import { StyledRightArrowButton } from "./styled";
import { ReactComponent as ArrowRightIcon } from "assets/icons/arrow-right.svg";

const RightArrowButton = ({ ...props }) => {
  return (
    <StyledRightArrowButton {...props}>
      <ArrowRightIcon />
    </StyledRightArrowButton>
  );
};

export { RightArrowButton };
