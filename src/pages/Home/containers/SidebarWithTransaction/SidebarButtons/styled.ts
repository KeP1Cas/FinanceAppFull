import styled from "styled-components";

import { designSystem } from "constants/designSystem";

const SidebarButtonsContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  margin: ${designSystem.indent["42"]} auto;
  button > svg {
    width: ${designSystem.size["42"]}px;
    height: ${designSystem.size["42"]}px;
  }
`;

export { SidebarButtonsContainer };
