import React from "react";

import { StyledTableTextCell } from "./styled";

import { TextCellStyleProps } from "pages/Home/containers/TableContainer/types/textCellStyleProps";

const TableTextCell: React.FC<TextCellStyleProps> = ({
  children,
  ...props
}) => {
  return <StyledTableTextCell {...props}>{children}</StyledTableTextCell>;
};

export { TableTextCell };
