import styled from "styled-components";

import { designSystem } from "constants/designSystem";

const FiltersCollectionContainer = styled.ul`
  padding: ${designSystem.indent["8"]};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${designSystem.indent["14"]};
`;

export { FiltersCollectionContainer };
