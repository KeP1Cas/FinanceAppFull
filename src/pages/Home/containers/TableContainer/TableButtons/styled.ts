import styled from "styled-components";

import { designSystem } from "constants/designSystem";

const TableButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${designSystem.indent["24"]};
`;

export { TableButtonsContainer };
