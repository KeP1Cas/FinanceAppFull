import styled from "styled-components";

import { designSystem } from "constants/designSystem";

const StyledOperationFiltersAddButton = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: inline-block;
  border-radius: 50%;
  transition: 0.5s ease;
  :before,
  :after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: ${designSystem.borderRadius["25"]};
    background-color: ${designSystem.color.normal};
    transform: translate(-50%, -50%);
    transition: 0.5s ease;
  }
  :before {
    width: 4px;
    height: 24px;
  }
  :after {
    width: 24px;
    height: 4px;
  }
  :hover {
    transform: rotate(-90deg);
    :after {
      background-color: ${designSystem.color.normal};
    }
    :before {
      background-color: ${designSystem.color.normal};
    }
  }
`;

export { StyledOperationFiltersAddButton };
