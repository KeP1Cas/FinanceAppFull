import React from "react";
import { Label as LabelUI } from "evergreen-ui";
import { designSystem } from "constants/designSystem";

const Label: React.FC = ({ children }) => {
  return (
    <LabelUI style={{ color: `${designSystem.color.nightBlue}` }}>
      {children}
    </LabelUI>
  );
};

export { Label };
