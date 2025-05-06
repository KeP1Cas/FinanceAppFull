import styled, { createGlobalStyle } from "styled-components";

import { designSystem } from "constants/designSystem";

const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${designSystem.indent["16"]};
`;

const DialogSoloContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DialogDuoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DialogEndLineContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledError = styled.span`
  font-size: ${designSystem.text.fontSize["12"]};
  color: ${designSystem.color.red};
  padding: ${designSystem.indent["12"]} 0 0 0;
`;

const GlobalStyleTransaction = createGlobalStyle`
  .css-1dccw9w[data-state="entered"] {
    background: ${designSystem.bgColor.white};
  }
  .ub-color_101840 {
    color: ${designSystem.color.nightBlue};
  }
  
  .ub-bg-clr_white {
    background-color: ${designSystem.bgColor.white};
    :hover {
      background-color: ${designSystem.bgColor.white} !important;
    }
  }
  .ub-color_474d66 {
    color: ${designSystem.color.nightBlue};
  }
  .css-12b25td:not([disabled])[data-active]{
    background: #d3d7e889;
  }
  .css-9r9n92[aria-selected="true"]{
    background: #d3d7e889;
  }
`;

export {
  DialogContainer,
  DialogDuoContainer,
  DialogSoloContainer,
  StyledError,
  GlobalStyleTransaction,
  DialogEndLineContainer,
};
