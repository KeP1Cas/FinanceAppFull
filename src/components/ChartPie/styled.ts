import { designSystem } from "constants/designSystem";
import styled from "styled-components";
import Analytics from "../../assets/icons/pie-chart-svgrepo-com.svg";

const PieContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1000px;
  position: relative;
  margin-top: 50px;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${designSystem.color.light};
  }
`;

const PieTitle = styled.div`
  padding-top: 70px;
  text-align: center;
`;

const Text = styled.p`
  font-size: ${designSystem.text.fontSize[24]};
  color: ${designSystem.color.normal};
  position: relative;

  ::after {
    content: "";
    position: absolute;
    background: url(${Analytics});
    width: 25px;
    height: 25px;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export { PieContainer, PieTitle, Text };
