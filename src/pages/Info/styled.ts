import { designSystem } from "constants/designSystem";
import styled from "styled-components";

const ContainerCharts = styled.div`
  width: 1360px;
  margin: 0 auto;
  background: ${designSystem.bgColor.white};
  box-shadow: 0px 16px 24px -10px rgba(209, 219, 241, 0.25);
  border-radius: 24px;
  max-width: 100%;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 69px 32px 43px;

  @media (max-width: 956px) {
    flex-wrap: wrap;
  }
  @media (max-width: 584px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TitleContent = styled.div`
  @media (max-width: 956px) {
    width: 100%;
    text-align: center;
    padding-bottom: ${designSystem.indent[16]};
  }
`;

const DatePickerContent = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 956px) {
    width: 100%;
  }
`;

const TextDatePicker = styled.p`
  font-family: Roboto;
  font-weight: 500;
  font-size: ${designSystem.text.fontSize[16]};
  line-height: 24px;
  color: ${designSystem.color.normal};
  padding-right: ${designSystem.indent[24]};

  @media (max-width: 1000px) {
    :last-child {
      padding-right: 40px;
    }
  }
`;

const DateContainer = styled.div`
  display: flex;
  padding-right: 42px;
  align-items: center;
  :last-child {
    padding-right: 0;
  }

  @media (max-width: 1000px) {
    padding: 0;

    :last-child {
      padding-top: 5px;
      padding-left: 20px;
    }
  }
`;

const ContentWrapper = styled.div``;

export {
  ContainerCharts,
  HeaderContent,
  DatePickerContent,
  TextDatePicker,
  DateContainer,
  TitleContent,
  ContentWrapper,
};
