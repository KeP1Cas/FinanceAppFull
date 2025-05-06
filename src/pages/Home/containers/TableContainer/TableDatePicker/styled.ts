import styled from "styled-components";

import { designSystem } from "constants/designSystem";

const TableDateContainer = styled.div`
  display: flex;
  & .dateFrom {
    margin-right: ${designSystem.indent["42"]};
  }
`;

const TableDateItemContainer = styled.div`
  display: flex;
  align-items: center;
  & .dateLabel {
    font-size: ${designSystem.text.fontSize["16"]};
    margin-right: ${designSystem.indent["24"]};
  }
`;

export { TableDateContainer, TableDateItemContainer };
