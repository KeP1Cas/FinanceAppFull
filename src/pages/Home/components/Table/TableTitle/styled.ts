import styled from "styled-components";

import { designSystem } from "constants/designSystem";

const StyledTableTitle = styled.div`
  font-weight: ${designSystem.text.weight.bold};
  font-size: ${designSystem.text.fontSize["24"]};
  color: ${designSystem.color.normal};
`;

export { StyledTableTitle };
