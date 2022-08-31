import * as React from 'react';

import { AuthenticateUserPayload } from 'api/authenticateUser';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { useUserContext } from 'contexts/UserProvider/UserContext';
import { AppRoute } from 'enums/router';
import {
  ConfirmSection,
  ContentContainer,
  FormContainer,
  PrimaryLink,
  SecondaryLink
} from 'pages/Authorization/authorization.styled';

export function LoginPage() {
  const [loginData, setLoginData] = React.useState<AuthenticateUserPayload>({
    email: '',
    password: ''
  });
  const { login } = useUserContext();

  return (
    <ContentContainer>
      <SecondaryLink to={AppRoute.Main}>Back to home</SecondaryLink>
      <h1>Sign In</h1>
      <FormContainer>
        <Input
          label="Email"
          type="email"
          autoComplete="email"
          value={loginData.email}
          onChange={({ currentTarget: { value } }) => {
            setLoginData((data) => ({ ...data, email: value }));
          }}
        />
        <Input
          label="Password"
          type="password"
          autoComplete="current-password"
          value={loginData.password}
          onChange={({ currentTarget: { value } }) => {
            setLoginData((data) => ({ ...data, password: value }));
          }}
        />
        <SecondaryLink to={AppRoute.ForgotPassword}>
          Forgot password?
        </SecondaryLink>
        <ConfirmSection>
          <Button
            text="Sign In"
            shouldFitContainer
            disabled={!loginData.email || !loginData.password}
            onClick={() => {
              login(loginData).catch((err) => {
                console.log(err);
              });
            }}
          />
          <div>
            Don’t have an account?{' '}
            <PrimaryLink to={AppRoute.Register}>Sign Up</PrimaryLink>
          </div>
        </ConfirmSection>
      </FormContainer>
    </ContentContainer>
  );
}
