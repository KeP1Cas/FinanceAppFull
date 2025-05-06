import styled from "styled-components";

import { Pane } from "components/Pane";

import { designSystem } from "constants/designSystem";

const StyledError = styled.p`
  &:before {
    content: "⚠ ";
  }
  color: ${designSystem.text.color.warning};
  font-size: ${designSystem.text.fontSize[14]};
  font-family: "Segoe UI", sans-serif;
`;

const UserContainer = styled.div`
  font-size: ${designSystem.text.fontSize["18"]};
  color: ${designSystem.text.color.success};
  text-align: center;
`;

const AuthFormCommonContainer = styled(Pane)`
  background-color: ${designSystem.bgColor.white};
  padding: ${designSystem.size["32"]}px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.3);
`;

const AuthFormContainer = styled(Pane)`
  display: flex;
  flex-direction: column;
  gap: ${designSystem.indent["16"]};
`;

export {
  StyledError,
  UserContainer,
  AuthFormCommonContainer,
  AuthFormContainer,
};
