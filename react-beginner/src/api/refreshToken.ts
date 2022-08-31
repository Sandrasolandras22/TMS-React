import axios from 'axios';

import { LocalStorageKey } from 'enums/user';
import { AuthTokens } from 'types/user.types';

const refreshTokenApiPath = `${process.env.REACT_APP_API_PATH}/auth/jwt/refresh/`;

export async function refreshToken(): Promise<Pick<AuthTokens, 'access'>> {
  const token = localStorage.getItem(LocalStorageKey.RefreshToken);

  if (!token) {
    throw new Error('No refresh token provided!');
  }

  const { data } = await axios.post<Pick<AuthTokens, 'access'>>(
    refreshTokenApiPath,
    {
      refresh: token
    }
  );

  localStorage.setItem(LocalStorageKey.AccessToken, data.access);
  return data;
}
