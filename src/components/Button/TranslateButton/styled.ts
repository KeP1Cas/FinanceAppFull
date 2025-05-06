import { designSystem } from "constants/designSystem";
import styled from "styled-components";

const TranslateContainer = styled.div``;

const ButtonToggle = styled.button`
  font-family: Roboto;
  font-weight: ${designSystem.text.weight.bold};
  font-size: ${designSystem.text.fontSize[16]};
  line-height: 20px;
  color: ${designSystem.color.normal};
  background: transparent;
  border: 1px solid rgba(67, 83, 121, 0.4);
  cursor: pointer;
  border-radius: 10px;
  width: 50px;
  align-items: center;

  :hover {
    background: rgba(67, 83, 121, 0.1);
  }
`;

export { ButtonToggle, TranslateContainer };
