import styled from "styled-components";

import { designSystem } from "constants/designSystem";

const SidebarCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: ${designSystem.indent["32"]};
  font-size: ${designSystem.text.fontSize["24"]};
`;

export { SidebarCard };
