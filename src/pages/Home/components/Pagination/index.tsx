import React from "react";

import { PaginationStyleSetting, StyledPagination } from "./styled";
import { PaginationProps } from "evergreen-ui";

const Pagination: React.FC<PaginationProps> = ({ ...props }) => (
  <>
    <StyledPagination {...props} className="pagination" />
    <PaginationStyleSetting />
  </>
);

export { Pagination };
