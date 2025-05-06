import React from "react";
import { Button as ButtonUI, ButtonProps } from "evergreen-ui";
import { designSystem } from "constants/designSystem";

const Button = (props: ButtonProps) => {
  const { children, ...restProps } = props;
  return (
    <ButtonUI
      style={{
        background: designSystem.bgColor.white,
        color: designSystem.color.nightBlue,
      }}
      {...restProps}
    >
      {children}
    </ButtonUI>
  );
};

export { Button };
