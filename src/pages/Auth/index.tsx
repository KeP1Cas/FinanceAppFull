import React, { useContext, useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router";
import { observer } from "mobx-react-lite";

import { Button } from "components/Button";
import { AuthForm } from "pages/Auth/containers/AuthForm";
import {
  AuthContainer,
  AuthWithErrorContainer,
  StyledAuthForm,
  StyledError,
} from "./styled";

import { OperationsStoreContext } from "stores/OperationsStore";
import { authAPI } from "services/ApiService";

import { InputsProps } from "pages/Auth/types/inputs";
import { Placeholder } from "../../components/Placeholder";

const Auth = observer(() => {
  const OperationStore = useContext(OperationsStoreContext);

  const [toggleForm, setToggleForm] = useState(true);
  const [error, setError] = useState("");
  const [userName, setUserName] = useState<string>("");
  const [isRegisterForm, setIsRegisterForm] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const nameToken = localStorage.getItem("username");
    if (nameToken) {
      setUserName(nameToken);
    }
  }, [localStorage.getItem("username")]);

  const onSubmitRegister: SubmitHandler<InputsProps> = ({
    username,
    password,
  }) => {
    authAPI
      .register(username, password)
      .then(() => {
        setToggleForm(true);
        setIsRegisterForm(true);
        setUserName(username);
      })
      .catch(error => {
        setError(error.response?.data);
      });
  };

  const onSubmitLogin: SubmitHandler<InputsProps> = ({
    username,
    password,
  }) => {
    authAPI
      .login(username, password)
      .then(data => {
        (() => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", username);
          setIsRegisterForm(false);
          OperationStore.login();
          history.push("/");
        })();
      })
      .catch(error => setError(error.response?.data.message));
  };

  if (OperationStore.isLoading) {
    return <Placeholder width={150} />;
  }

  return (
    <StyledAuthForm>
      <AuthWithErrorContainer>
        <AuthContainer>
          {OperationStore.isAuth ? (
            <>
              <p>Hello {userName}!</p>
              <Button
                onClick={() => {
                  localStorage.removeItem("username");
                  localStorage.removeItem("token");
                  setUserName("");
                  OperationStore.logout();
                  setToggleForm(true);
                }}
              >
                Log out
              </Button>
            </>
          ) : (
            <>
              {toggleForm ? (
                <>
                  <AuthForm
                    userName={userName}
                    title="Sign in"
                    onSubmit={onSubmitLogin}
                    isRegisterForm={isRegisterForm}
                  />
                  <Button onClick={() => setToggleForm(false)}>Register</Button>
                </>
              ) : (
                <>
                  <AuthForm
                    userName={userName}
                    title="Sign up"
                    onSubmit={onSubmitRegister}
                    isRegisterForm={isRegisterForm}
                  />
                  <Button onClick={() => setToggleForm(true)}>Login</Button>
                </>
              )}
            </>
          )}
        </AuthContainer>
      </AuthWithErrorContainer>
      {error && !userName && <StyledError>{error.toUpperCase()}</StyledError>}
    </StyledAuthForm>
  );
});

export { Auth };
