import styled from "styled-components";
import { IconButton } from "evergreen-ui";

import PlusIcon from "assets/icons/plus.svg";

import { designSystem } from "constants/designSystem";

const StyledPlus = styled(IconButton)`
  position: fixed;
  z-index: 2;
  bottom: 64px;
  right: 64px;

  width: ${designSystem.indent[64]};
  height: ${designSystem.indent[64]};
  border-radius: 50%;
  background-color: ${designSystem.bgColor.base};
  background-image: url(${PlusIcon});
  background-position: center;
  background-repeat: no-repeat;

  &:not([disabled]):hover {
    background-color: ${designSystem.bgColor.base};
  }
`;

export { StyledPlus };
