import styled from "styled-components";

import { designSystem } from "constants/designSystem";

const TransactionElementStyle = styled.span`
  font-size: ${designSystem.text.fontSize["24"]};
  font-weight: ${designSystem.text.weight.bold};
  color: ${designSystem.text.color.normal};
  padding: ${designSystem.indent["14"]};
  border-radius: ${designSystem.borderRadius["16"]};
  border: 2px solid ${designSystem.color.cornflowerblue};
  cursor: pointer;
`;

export { TransactionElementStyle };
