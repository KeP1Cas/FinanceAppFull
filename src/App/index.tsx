import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { MainContainer } from "./styled";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Pane } from "components/Pane";

import { NavigationSwitch } from "App/NavigationSwitch";
import { OperationsStoreContext } from "stores/OperationsStore";
import { observer } from "mobx-react-lite";

import { I18nProvider, LOCALES } from "i18n/index";

const App = observer(() => {
  const OperationsStore = useContext(OperationsStoreContext);

  const [locale, setLocale] = React.useState(LOCALES.ENGLISH);

  useEffect(() => {
    OperationsStore.fetch();
  }, [OperationsStore.isAuth]);

  return (
    <I18nProvider locale={locale}>
      <MainContainer>
        <Router>
          <Pane>
            <Header localeApp={locale} setLocaleApp={setLocale} />
            <NavigationSwitch />
          </Pane>
          <Footer />
        </Router>
      </MainContainer>
    </I18nProvider>
  );
});

export { App };
