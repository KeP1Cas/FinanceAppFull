import styled from "styled-components";

import { designSystem } from "constants/designSystem";

const StyledOperationFilters = styled.div`
  max-width: 100%;
  background: ${designSystem.bgColor.white};
  box-shadow: 0 16px 24px -10px rgba(209, 219, 241, 0.25);
  border-radius: ${designSystem.borderRadius["24"]};
  padding: ${designSystem.indent["8"]};
`;

export { StyledOperationFilters };
