import styled from "styled-components";
import { designSystem } from "constants/designSystem";

const IncExpContent = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 584px) {
    padding-bottom: ${designSystem.indent[16]};
  }
`;

const Text = styled.span`
  padding-bottom: ${designSystem.indent[8]};
  font-weight: ${designSystem.text.weight.bold};
  font-size: ${designSystem.text.fontSize[24]};
  color: ${designSystem.color.green};

  :last-child {
    padding-bottom: 0;
    padding-left: ${designSystem.indent[16]};
    color: ${designSystem.color.red};
  }

  @media (max-width: 1300px) {
    font-size: 20px;
  }

  @media (max-width: 956px) {
    font-size: ${designSystem.text.fontSize[18]};
  }
`;

export { IncExpContent, Text };
