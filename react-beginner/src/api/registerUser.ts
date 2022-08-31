import axios, { AxiosResponse } from 'axios';

import { User } from 'types/user.types';

const apiPath = `${process.env.REACT_APP_API_PATH}/auth/users/`;

export interface RegisterUserPayload {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterUserErrors {
  username?: string[];
  email?: string[];
  password?: string[];
  global?: string[];
}

export async function registerUser({
  signal,
  ...params
}: {
  signal?: AbortController['signal'];
} & RegisterUserPayload): Promise<User> {
  const { data } = await axios.post<
    User,
    AxiosResponse<User>,
    RegisterUserPayload
  >(apiPath, params, { signal });

  return data;
}
