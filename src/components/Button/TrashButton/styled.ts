import { designSystem } from "constants/designSystem";
import styled from "styled-components";

const StyledTrashButton = styled.button`
  all: unset;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  cursor: pointer;
  & svg {
    & path {
      fill: ${designSystem.color.normal};
    }
  }
  &:hover {
    & svg {
      & path {
        fill: ${designSystem.color.normal};
        fill-opacity: 1;
      }
    }
  }
`;

export { StyledTrashButton };
