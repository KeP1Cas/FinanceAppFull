import styled from "styled-components";

import { designSystem } from "constants/designSystem";

const MainContainer = styled.div`
  font-weight: ${designSystem.text.weight.normal};
  font-size: ${designSystem.text.fontSize[16]};
  color: ${designSystem.color.normal};
  max-width: 1370px;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export { MainContainer };
