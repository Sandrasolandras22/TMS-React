import * as React from 'react';

import { AuthenticateUserPayload } from 'api/authenticateUser';
import { User } from 'types/user.types';

export interface UserContextValue {
  user: User | null;
  login: (payload: AuthenticateUserPayload) => Promise<void>;
  logout: () => void;
}

export const UserContext = React.createContext<UserContextValue | null>(null);

export const useUserContext = (): UserContextValue => {
  const userContext = React.useContext(UserContext);
  if (!userContext) {
    throw new Error('Trying to access User Context outside provider');
  }
  return userContext;
};
