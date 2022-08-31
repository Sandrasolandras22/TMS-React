import * as React from 'react';

import { requestResetPassword } from 'api/requestResetPassword';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';

import { ContentContainer, FormContainer } from './authorization.styled';

export function RequestPasswordResetPage() {
  const [email, setEmail] = React.useState('');
  const [isLoading, setLoadingState] = React.useState(false);
  const [isEmailSent, setEmailSent] = React.useState(false);
  return (
    <ContentContainer>
      <h2>{isEmailSent ? 'Success' : 'Forgot password?'}</h2>
      <FormContainer>
        {isEmailSent ? (
          <p>
            {`You will receive an email ${email} with a link to reset your password!`}
          </p>
        ) : (
          <>
            <Input
              label="Email"
              type="email"
              disabled={isLoading}
              value={email}
              onChange={({ currentTarget: { value } }) => {
                setEmail(value);
              }}
              autoComplete="email"
            />
            <Button
              text="Reset"
              shouldFitContainer
              disabled={isLoading}
              onClick={() => {
                setLoadingState(true);
                requestResetPassword({
                  email
                })
                  .then(() => {
                    setLoadingState(false);
                    setEmailSent(true);
                  })
                  .catch(() => {
                    setLoadingState(false);
                  });
              }}
            />
          </>
        )}
      </FormContainer>
    </ContentContainer>
  );
}
