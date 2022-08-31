import * as React from 'react';

import { authenticateUser } from 'api/authenticateUser';
import { fetchUserDetails } from 'api/fetchUserDetails';
import {
  UserContext,
  UserContextValue
} from 'contexts/UserProvider/UserContext';
import { LocalStorageKey } from 'enums/user';
import { User } from 'types/user.types';

export function UserContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = React.useState<User | null>(null);
  const [isVerifying, setIsVerifying] = React.useState(
    !!localStorage.getItem(LocalStorageKey.AccessToken)
  );

  React.useEffect(() => {
    const abortController = new AbortController();

    fetchUserDetails({ signal: abortController.signal })
      .then((savedUser) => {
        setUser(savedUser);
        setIsVerifying(false);
      })
      .catch((err: Error) => {
        if (err.message !== 'canceled') {
          setIsVerifying(false);
        }
      });

    return () => {
      abortController.abort();
    };
  }, []);

  const value = React.useMemo<UserContextValue>(
    () => ({
      user,
      login: (payload) =>
        authenticateUser(payload)
          .then(() => fetchUserDetails())
          .then((userResponse) => setUser(userResponse)),
      logout: () => {
        localStorage.removeItem(LocalStorageKey.AccessToken);
        localStorage.removeItem(LocalStorageKey.RefreshToken);
        setUser(null);
      }
    }),
    [user]
  );

  return (
    <UserContext.Provider value={value}>
      {isVerifying ? null : children}
    </UserContext.Provider>
  );
}
