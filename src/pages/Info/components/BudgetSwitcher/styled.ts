import styled from "styled-components";
import { designSystem } from "constants/designSystem";

const BudgetSwitcherButton = styled.button<{ primary?: boolean }>`
  font-family: Roboto;
  font-weight: ${designSystem.text.weight.bold};
  font-size: ${designSystem.text.fontSize[24]};
  line-height: 32px;
  color: ${({ primary }) =>
    primary ? designSystem.color.red : designSystem.color.green};
  background: transparent;
  border: 1px solid rgba(67, 83, 121, 0.4);
  cursor: pointer;
  border-radius: 10px;
  width: 150px;

  :hover {
    background: rgba(67, 83, 121, 0.1);
  }
`;
export { BudgetSwitcherButton };
