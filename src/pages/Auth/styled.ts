import styled from "styled-components";

import { designSystem } from "constants/designSystem";

const StyledAuthForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${designSystem.indent[32]};
`;

const StyledError = styled.p`
  &:before {
    content: "⚠ ";
  }
  color: ${designSystem.text.color.warning};
  font-family: "Segoe UI", sans-serif;
`;

const AuthWithErrorContainer = styled.div`
  display: flex;
  gap: ${designSystem.indent["64"]};
`;

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${designSystem.indent["16"]};
`;

export { StyledAuthForm, StyledError, AuthWithErrorContainer, AuthContainer };
