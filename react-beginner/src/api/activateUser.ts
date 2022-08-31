import axios from 'axios';

const apiPath = `${process.env.REACT_APP_API_PATH}/auth/users/activation/`;

export type ActivateUserPayload = {
  uid: string;
  token: string;
};

export interface ActivateUserErrors {
  global?: string[];
}

export async function activateUser({
  signal,
  ...params
}: {
  signal?: AbortController['signal'];
} & ActivateUserPayload): Promise<void> {
  return axios.post(apiPath, params);
}
