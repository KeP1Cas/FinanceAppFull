import React from "react";

import {
  TextInput as InputUI,
  TextInputProps as InputProps,
} from "evergreen-ui";

import { designSystem } from "constants/designSystem";

const Input: React.FC<InputProps> = React.forwardRef((props, ref) => {
  return (
    <InputUI
      style={{
        background: designSystem.bgColor.white,
        color: designSystem.color.nightBlue,
      }}
      ref={ref}
      {...props}
    />
  );
});

export { Input };
