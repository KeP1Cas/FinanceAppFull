import styled from "styled-components";

import { Table } from "evergreen-ui";

import { designSystem } from "constants/designSystem";

const StyledTableBody = styled(Table.Body)`
  height: 718px;
  border-radius: ${designSystem.borderRadius["24"]};
`;

export { StyledTableBody };
