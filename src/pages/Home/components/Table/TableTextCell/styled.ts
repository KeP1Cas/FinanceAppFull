import styled, { css } from "styled-components";
import { Table } from "evergreen-ui";

import { designSystem } from "constants/designSystem";
import { selectCategoryColor } from "utils/selectCategory";

import { TextCellStyleProps } from "pages/Home/containers/TableContainer/types/textCellStyleProps";

const StyledTableTextCell = styled(Table.TextCell)<TextCellStyleProps>`
  & span {
    font-size: ${designSystem.text.fontSize["16"]};
    font-weight: ${designSystem.text.weight.normal};
    color: ${designSystem.color.normal};
  }

  ${({ placeholder, children }) =>
    placeholder &&
    css`
      &:before {
        content: "";
        width: 16px;
        height: 16px;
        background-color: ${selectCategoryColor(children)};
        border-radius: 50%;
        margin-right: 16px;
      }
    `}
    
  ${({ category }) =>
    category &&
    css`
      & span {
        font-size: ${designSystem.text.fontSize["18"]};
        line-height: ${designSystem.text.lineHeight["22"]};
        font-weight: ${designSystem.text.weight.bold};
        color: ${designSystem.color.normal};
      }
    `}
  
  ${({ quantity }) =>
    quantity &&
    css`
      & span {
        font-weight: ${designSystem.text.weight.bold};
      }
    `}
`;

export { StyledTableTextCell };
