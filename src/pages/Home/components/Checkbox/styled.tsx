import styled from "styled-components";

import { Checkbox } from "evergreen-ui";

import { designSystem } from "constants/designSystem";

const StyledCheckbox = styled(Checkbox)`
  width: 20px;
  height: 20px;
  border: 2px solid ${designSystem.color.normal};
  border-radius: ${designSystem.borderRadius["6"]};
  position: relative;
  div {
    all: unset;
  }
  svg {
    display: none;
  }
  span {
    font-size: ${designSystem.text.fontSize["16"]};
    font-weight: ${designSystem.text.weight.normal};
    color: ${designSystem.color.normal};
    margin-left: 29px;
  }
  input[type="checkbox"] {
    all: unset;
    :focus + div {
      box-shadow: none;
    }
  }
  input:checked ~ div:after {
    content: "";
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    z-index: 2;
    border-radius: ${designSystem.borderRadius["2"]};
    background-color: ${designSystem.color.normal};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export { StyledCheckbox };
