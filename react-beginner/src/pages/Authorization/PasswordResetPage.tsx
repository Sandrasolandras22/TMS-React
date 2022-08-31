import * as React from 'react';

import { useParams } from 'react-router-dom';

import { resetPassword } from 'api/resetPassword';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';

import { AppRoute } from 'enums/router';

import {
  ContentContainer,
  FormContainer,
  SecondaryLink
} from './authorization.styled';

export function PasswordResetPage() {
  const { token, uid } = useParams<{
    token: string;
    uid: string;
  }>();
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isLoading, setLoadingState] = React.useState(false);
  const [isPasswordReset, setResetPasswordState] = React.useState(false);

  return (
    <ContentContainer>
      <SecondaryLink to={AppRoute.Main}>Back to home</SecondaryLink>
      <h1>{isPasswordReset ? 'Success' : 'New password'}</h1>
      <FormContainer>
        {isPasswordReset ? (
          <p>Password has been reset!</p>
        ) : (
          <>
            <Input
              value={password}
              onChange={({ currentTarget: { value } }) => {
                setPassword(value);
              }}
              label="Password"
              type="password"
              autoComplete="new-password"
            />
            <Input
              value={confirmPassword}
              autoComplete="new-password"
              onChange={({ currentTarget: { value } }) => {
                setConfirmPassword(value);
              }}
              label="Confirm password"
              type="password"
            />
            <Button
              text="Reset"
              shouldFitContainer
              disabled={
                isLoading ||
                password !== confirmPassword ||
                !password ||
                !confirmPassword
              }
              onClick={() => {
                if (uid && token) {
                  setLoadingState(true);
                  resetPassword({
                    new_password: password,
                    uid,
                    token
                  })
                    .then(() => {
                      setLoadingState(false);
                      setResetPasswordState(true);
                    })
                    .catch(() => {
                      setLoadingState(false);
                    });
                }
              }}
            />
          </>
        )}
      </FormContainer>
    </ContentContainer>
  );
}
