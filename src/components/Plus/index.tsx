import React from "react";

import { StyledPlus } from "./styled";

type Props = {
  onClick: () => void;
};

const Plus: React.FC<Props> = ({ ...props }) => {
  return <StyledPlus {...props} />;
};

export { Plus };
