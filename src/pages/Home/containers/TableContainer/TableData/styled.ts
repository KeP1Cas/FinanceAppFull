import styled from "styled-components";

import { designSystem } from "constants/designSystem";

const NoData = styled.h1`
  font-size: ${designSystem.text.fontSize["36"]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${designSystem.indent["48"]};
`;

export { NoData };
