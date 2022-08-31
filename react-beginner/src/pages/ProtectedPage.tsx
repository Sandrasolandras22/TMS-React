import * as React from 'react';

import { Navigate } from 'react-router-dom';

import { useUserContext } from 'contexts/UserProvider/UserContext';
import { AppRoute } from 'enums/router';

export function ProtectedPage({
  authorizedOnly = false,
  anonymousOnly = false,
  redirectPage = AppRoute.Login,
  children
}: {
  redirectPage?: AppRoute;
  children: JSX.Element;
} & (
  | {
      authorizedOnly?: never;
      anonymousOnly: boolean;
    }
  | {
      authorizedOnly: boolean;
      anonymousOnly?: never;
    }
)): JSX.Element {
  const { user } = useUserContext();

  if ((authorizedOnly && !user) || (anonymousOnly && user)) {
    return (
      <Navigate
        to={redirectPage}
        replace
      />
    );
  }

  return children;
}
