import * as React from 'react';

import { RegisterUserErrors, RegisterUserPayload } from 'api/registerUser';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { AppRoute } from 'enums/router';
import {
  ConfirmSection,
  FormContainer,
  PrimaryLink
} from 'pages/Authorization/authorization.styled';

function getPasswordErrors(
  formData: RegisterUserPayload,
  errors: RegisterUserErrors
) {
  if (errors.password) {
    return errors.password.join('. ');
  }
  if (
    formData.password &&
    formData.confirmPassword &&
    formData.password !== formData.confirmPassword
  ) {
    return 'Passwords do not match';
  }

  return '';
}

export function RegistrationForm({
  onSubmit,
  isLoading,
  errors
}: {
  errors: RegisterUserErrors;
  isLoading: boolean;
  onSubmit: (formData: RegisterUserPayload) => void;
}) {
  const [formData, setFormData] = React.useState<RegisterUserPayload>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <FormContainer>
      <Input
        value={formData.username}
        onChange={({ currentTarget: { value } }) => {
          setFormData((prevState) => ({
            ...prevState,
            username: value
          }));
        }}
        error={errors.username ? errors.username.join('. ') : undefined}
        label="Name"
        autoComplete="username"
      />
      <Input
        value={formData.email}
        onChange={({ currentTarget: { value } }) => {
          setFormData((prevState) => ({ ...prevState, email: value }));
        }}
        label="Email"
        type="email"
        error={errors.email ? errors.email.join('. ') : undefined}
        autoComplete="email"
      />
      <Input
        value={formData.password}
        onChange={({ currentTarget: { value } }) => {
          setFormData((prevState) => ({ ...prevState, password: value }));
        }}
        label="Password"
        type="password"
        autoComplete="new-password"
        error={getPasswordErrors(formData, errors)}
      />
      <Input
        value={formData.confirmPassword}
        autoComplete="new-password"
        onChange={({ currentTarget: { value } }) => {
          setFormData((prevState) => ({
            ...prevState,
            confirmPassword: value
          }));
        }}
        label="Confirm password"
        type="password"
      />
      <ConfirmSection>
        <Button
          text="Sign Up"
          shouldFitContainer
          disabled={
            isLoading ||
            !formData.username ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword ||
            formData.password !== formData.confirmPassword
          }
          onClick={() => {
            onSubmit(formData);
          }}
        />
        <div>
          Already have an account?{' '}
          <PrimaryLink to={AppRoute.Login}> Sign In</PrimaryLink>
        </div>
      </ConfirmSection>
    </FormContainer>
  );
}
