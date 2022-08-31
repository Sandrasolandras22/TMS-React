import axios from 'axios';

import { LocalStorageKey } from 'enums/user';
import { AuthTokens } from 'types/user.types';

const tokenApiPath = `${process.env.REACT_APP_API_PATH}/auth/jwt/create/`;

export interface AuthenticateUserPayload {
  email: string;
  password: string;
}

export async function authenticateUser({
  email,
  password,
  signal
}: {
  signal?: AbortController['signal'];
} & AuthenticateUserPayload): Promise<AuthTokens> {
  const { data } = await axios.post<AuthTokens>(
    tokenApiPath,
    {
      email,
      password
    },
    { signal }
  );

  localStorage.setItem(LocalStorageKey.AccessToken, data.access);
  localStorage.setItem(LocalStorageKey.RefreshToken, data.refresh);

  return data;
}
