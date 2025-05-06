import styled from "styled-components";
import { IconButton } from "evergreen-ui";

import SettingsIcon from "assets/icons/settings.svg";

import { designSystem } from "constants/designSystem";

const StyledButton = styled(IconButton)`
  min-width: ${designSystem.indent[24]};
  width: ${designSystem.indent[24]};
  height: ${designSystem.indent[24]};
  border: none;
  background-color: transparent;
  background-image: url(${SettingsIcon});
  background-repeat: no-repeat;
  background-position: center;
  padding: 0;

  &:not([disabled]):hover {
    border: none;
    background-color: transparent;
  }
`;

export { StyledButton };
