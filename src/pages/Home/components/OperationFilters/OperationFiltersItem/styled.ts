import styled, { css } from "styled-components";

import { designSystem } from "constants/designSystem";
import { selectCategoryIcon, selectCategoryColor } from "utils/selectCategory";

import { OperationFilterProps } from "pages/Home/components/OperationFilters/OperationFiltersItem";

const StyledOperationFiltersItem = styled.div<OperationFilterProps>`
  padding: ${designSystem.indent["24"]};
  font-size: ${designSystem.text.fontSize["16"]};
  font-weight: ${designSystem.text.weight.normal};
  display: inline-block;
  border-radius: ${designSystem.borderRadius["14"]};
  cursor: pointer;

  ${({ label, isChosen }) =>
    label &&
    css`
      background-color: ${selectCategoryColor(label)};
      opacity: ${isChosen ? "50%" : "100%"};
      display: inline-flex;
      align-items: center;
      ::before {
        content: "";
        width: 32px;
        height: 32px;
        display: block;
        margin-right: ${designSystem.indent["12"]};
        background-image: url(${selectCategoryIcon(label)});
        background-size: 32px 32px;
      }
    `}
`;

export { StyledOperationFiltersItem };
