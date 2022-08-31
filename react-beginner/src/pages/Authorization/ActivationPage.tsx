import * as React from 'react';

import { useParams } from 'react-router-dom';

import {
  activateUser,
  ActivateUserErrors,
  ActivateUserPayload
} from 'api/activateUser';
import { Button } from 'components/Button/Button';
import {
  ContentContainer,
  FormContainer
} from 'pages/Authorization/authorization.styled';

export function ActivationPage() {
  const { token, uid } = useParams<ActivateUserPayload>();
  const [appErrors, setAppErrors] = React.useState<ActivateUserErrors>({});
  const [isLoading, setLoadingState] = React.useState(false);
  const [isActivated, setActivatedState] = React.useState(false);

  return (
    <ContentContainer>
      <FormContainer>
        <h2>Activate account?</h2>
        {appErrors.global ? <code>{appErrors.global.join(' ')}</code> : null}
        {isActivated ? (
          <p>Activation successful!</p>
        ) : (
          <Button
            text="Activate"
            shouldFitContainer
            disabled={isLoading}
            onClick={() => {
              if (uid && token) {
                setLoadingState(true);
                activateUser({ uid, token })
                  .then(() => {
                    setLoadingState(false);
                    setActivatedState(true);
                  })
                  .catch(() => {
                    setLoadingState(false);
                    setAppErrors({ global: ['Activation failed!'] });
                  });
              }
            }}
          />
        )}
      </FormContainer>
    </ContentContainer>
  );
}
