import React from "react";

import { Dialog as DialogUI, DialogProps } from "evergreen-ui";

const Dialog: React.FC<DialogProps> = ({ children, ...restProps }) => {
  return <DialogUI {...restProps}>{children}</DialogUI>;
};

export { Dialog };
