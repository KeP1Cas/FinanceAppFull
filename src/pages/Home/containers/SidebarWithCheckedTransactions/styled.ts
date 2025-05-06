import styled from "styled-components";

import { designSystem } from "constants/designSystem";

const SidebarHeader = styled.div`
  h2 {
    font-size: ${designSystem.text.fontSize["36"]};
    text-align: center;
    padding: ${designSystem.indent["28"]};
  }
`;

const SidebarContainer = styled.div`
  padding: ${designSystem.indent["32"]};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${designSystem.indent["24"]};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${designSystem.indent["42"]};
  button > svg {
    width: ${designSystem.size["42"]}px;
    height: ${designSystem.size["42"]}px;
  }
`;

export { SidebarHeader, SidebarContainer, ButtonContainer };
