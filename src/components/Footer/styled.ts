import { designSystem } from "constants/designSystem";
import styled from "styled-components";

const StyledText = styled.div`
  a {
    text-transform: uppercase;
    color: ${designSystem.color.normal};
    text-decoration: none;
    font-family: inherit;
  }
`;

export { StyledText };
