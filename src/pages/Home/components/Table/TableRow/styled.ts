import styled from "styled-components";

import { Table } from "evergreen-ui";

import { designSystem } from "constants/designSystem";

const StyledTableRow = styled(Table.Row)`
  padding: 0 42px;
  background: ${designSystem.bgColor.white};
  &:hover {
    box-shadow: 0 0 24px rgba(209, 219, 241, 0.5);
    position: relative;
    z-index: 2;
    &:first-child {
      border-top-left-radius: ${designSystem.borderRadius["24"]};
      border-top-right-radius: ${designSystem.borderRadius["24"]};
      box-shadow: 0 0 24px rgba(209, 219, 241, 0.5);
    }
  }
`;

export { StyledTableRow };
