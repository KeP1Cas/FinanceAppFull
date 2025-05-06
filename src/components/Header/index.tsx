import React, { useEffect, useState } from "react";

import { Profile } from "components/Profile";
import { SettingsButton } from "components/Button/SettingsButton";
import ToggleSwitch from "components/Button/ToggleSwitch";
import {
  HeaderContainer,
  HeaderLeftSide,
  HeaderLinks,
  HeaderRightSide,
  StyledNavLink,
} from "./styled";

import { navigationRoutes } from "constants/navigationRoutes";

import Logo from "assets/icons/logo.svg";
import Translate from "i18n/messages/translate";
import TranslateButton from "components/Button/TranslateButton";

type Props = {
  localeApp: string;
  setLocaleApp: any;
};

const Header: React.FC<Props> = ({ setLocaleApp, localeApp }) => {
  const [profileName, setProfileName] = useState<any>("Profile");

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setProfileName(localStorage.getItem("username"));
    } else {
      setProfileName("Profile");
    }
  }, [localStorage.getItem("username")]);

  return (
    <HeaderContainer>
      <HeaderLeftSide>
        <StyledNavLink exact to="/">
          <img src={Logo} alt="Finance App" />
        </StyledNavLink>

        <nav>
          <HeaderLinks>
            {navigationRoutes.map(({ path, title }) => (
              <li key={path}>
                <StyledNavLink exact to={path} activeClassName={"active"}>
                  {title}
                </StyledNavLink>
              </li>
            ))}
            <StyledNavLink exact to={"/auth"} activeClassName={"active"}>
              {Translate("auth")}
            </StyledNavLink>
          </HeaderLinks>
        </nav>
      </HeaderLeftSide>

      <HeaderRightSide>
        <StyledNavLink exact to={"/auth"}>
          <Profile name={profileName} />
        </StyledNavLink>
        <SettingsButton />
        <TranslateButton setClick={setLocaleApp} locale={localeApp} />
        <ToggleSwitch />
      </HeaderRightSide>
    </HeaderContainer>
  );
};

export { Header };
