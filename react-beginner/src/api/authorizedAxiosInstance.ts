import axiosCore, { AxiosError } from 'axios';

import { LocalStorageKey } from 'enums/user';

import { refreshToken } from './refreshToken';

export const authorizedAxiosInstance = axiosCore.create();

let attemptsCount = 0;

authorizedAxiosInstance.interceptors.response.use(
  undefined,
  (error: AxiosError) => {
    if (error.name === 'AxiosError') {
      const { config: originalRequest, response } = error;
      const status = response ? response.status : -1;

      if (status === 401 && attemptsCount < 3) {
        attemptsCount += 1;
        return refreshToken().then(() =>
          authorizedAxiosInstance(originalRequest)
        );
      }
      return error.response;
    }
    attemptsCount = 0;

    throw error;
  }
);

authorizedAxiosInstance.interceptors.request.use((requestConfigArg) => {
  const requestConfig = requestConfigArg || {};

  const accessToken = localStorage.getItem(LocalStorageKey.AccessToken);

  requestConfig.headers = requestConfig.headers || {};

  if (accessToken) {
    requestConfig.headers.Authorization = `Bearer ${accessToken}`;
  }

  return requestConfig;
});
