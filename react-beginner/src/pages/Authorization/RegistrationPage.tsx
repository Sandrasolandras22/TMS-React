import * as React from 'react';

import { AxiosError } from 'axios';

import { registerUser, RegisterUserErrors } from 'api/registerUser';
import { AppRoute } from 'enums/router';
import {
  ContentContainer,
  SecondaryLink
} from 'pages/Authorization/authorization.styled';
import { RegistrationConfirmation } from 'pages/Authorization/RegistrationConfirmation';
import { RegistrationForm } from 'pages/Authorization/RegistrationForm';
import { User } from 'types/user.types';

export function RegistrationPage() {
  const [isLoading, setLoading] = React.useState(false);
  const [appErrors, setAppErrors] = React.useState<RegisterUserErrors>({});
  const [registerData, setRegisterData] = React.useState<User | null>(null);
  return (
    <ContentContainer>
      <SecondaryLink to={AppRoute.Main}>Back to home</SecondaryLink>
      <h1>{registerData ? 'Registration confirmation' : 'Sign Up'}</h1>
      {registerData ? (
        <RegistrationConfirmation email={registerData.email} />
      ) : (
        <RegistrationForm
          isLoading={isLoading}
          errors={appErrors}
          onSubmit={(formData) => {
            setLoading(true);
            setAppErrors({});
            registerUser(formData)
              .then((data) => {
                setLoading(false);
                setRegisterData(data);
              })
              .catch((err: AxiosError<RegisterUserErrors>) => {
                const { response } = err;
                if (response?.status === 400) {
                  setAppErrors(response.data);
                } else {
                  setAppErrors({ global: ['Something went wrong!'] });
                }
                setLoading(false);
              });
          }}
        />
      )}
    </ContentContainer>
  );
}
