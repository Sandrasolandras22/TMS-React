import * as React from 'react';

import { FormContainer } from 'pages/Authorization/authorization.styled';

export function RegistrationConfirmation({ email }: { email: string }) {
  return (
    <FormContainer>
      <p>
        {`Please activate your account with the activation link in the email ${email}.`}
      </p>
      <p>Please, check your email</p>
    </FormContainer>
  );
}
