import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Label } from "components/Label";
import { Input } from "components/Input";
import { Button } from "components/Button";

import { designSystem } from "constants/designSystem";
import {
  AuthFormContainer,
  AuthFormCommonContainer,
  StyledError,
  UserContainer,
} from "./styled";

import { InputsProps } from "pages/Auth/types/inputs";

type AuthFormProps = {
  title: string;
  onSubmit: SubmitHandler<any>;
  userName: string;
  isRegisterForm: boolean;
};

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  onSubmit,
  userName,
  isRegisterForm,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsProps>();

  return (
    <>
      {userName && isRegisterForm && (
        <>
          <UserContainer>
            User {userName} successfully registered!
          </UserContainer>
          <UserContainer> Please Sing in</UserContainer>
        </>
      )}
      <AuthFormCommonContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AuthFormContainer>
            <Label>
              Username
              <Input
                {...register("username", { required: true })}
                width="100%"
                marginTop={designSystem.indent[8]}
              />
            </Label>
            {errors?.username?.type === "required" && (
              <StyledError>This field is required</StyledError>
            )}
            <Label>
              Password
              <Input
                {...register("password", {
                  required: true,
                  minLength: 4,
                  maxLength: 10,
                })}
                width="100%"
                type="password"
                marginTop={designSystem.indent[8]}
              />
            </Label>
            {errors?.password?.type === "required" && (
              <StyledError>This field is required</StyledError>
            )}
            {errors?.password?.type === "minLength" && (
              <StyledError>
                Password can not be less than 4 characters
              </StyledError>
            )}
            {errors?.password?.type === "maxLength" && (
              <StyledError>Password cannot exceed 10 characters</StyledError>
            )}
            <Button type="submit">{title}</Button>
          </AuthFormContainer>
        </form>
      </AuthFormCommonContainer>
    </>
  );
};

export { AuthForm };
