import React from "react";
import { LOCALES } from "i18n";
import { ButtonToggle, TranslateContainer } from "./styled";

type Props = {
  locale?: string;
  setClick?: any;
};
const TranslateButton: React.FC<Props> = ({ locale, setClick }) => {
  return (
    <TranslateContainer>
      {locale === LOCALES.ENGLISH ? (
        <ButtonToggle onClick={() => setClick(LOCALES.RUSSIAN)}>
          RU
        </ButtonToggle>
      ) : (
        <ButtonToggle onClick={() => setClick(LOCALES.ENGLISH)}>
          EN
        </ButtonToggle>
      )}
    </TranslateContainer>
  );
};

export default TranslateButton;
