import styled, { createGlobalStyle } from "styled-components";

import { designSystem } from "constants/designSystem";

const TableBodyContainer = styled.div`
  background-color: ${designSystem.bgColor.white};
  border: 0 solid transparent;
  border-radius: ${designSystem.borderRadius["24"]};
`;

const PaginationContainer = styled.div`
  position: relative;
  bottom: ${designSystem.indent["60"]};
  left: ${designSystem.indent["52"]};
`;

const TableUnionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TableRightSideContainer = styled.div`
  max-width: ${designSystem.table.rightSide.width};
  display: flex;
  flex-basis: ${designSystem.table.rightSide.width};
`;

const TableLeftSideContainer = styled.div`
  max-width: ${designSystem.table.leftSide.width};
  display: flex;
  flex-basis: ${designSystem.table.leftSide.width};
  align-items: center;
`;

const TableIdContainer = styled.div`
  flex: 0 0 130px;
  text-align: center;
  max-width: 130px;
`;

const TableCheckboxContainer = styled.div`
  flex: 0 0 0;
`;

const DialogTitle = createGlobalStyle`
  .ub-color_101840 {
    color: ${designSystem.color.nightBlue};
  }
  .ub-color_474d66 {
      color: ${designSystem.color.normal};
  }

  //Temporary styles
  .css-12b25td:not([disabled]):hover {
    background-color: ${designSystem.bgColor.white};
  } 
  .ub-algn-slf_stretch:hover {
    background: ${designSystem.bgColor.white};
  }
`;

export {
  TableBodyContainer,
  PaginationContainer,
  TableLeftSideContainer,
  TableRightSideContainer,
  TableUnionContainer,
  TableIdContainer,
  TableCheckboxContainer,
  DialogTitle,
};
