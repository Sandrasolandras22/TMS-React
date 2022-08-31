import axios from 'axios';

const apiPath = `${process.env.REACT_APP_API_PATH}/auth/users/reset_password/`;

export async function requestResetPassword({
  signal,
  ...params
}: {
  signal?: AbortController['signal'];
  email: string;
}): Promise<void> {
  return axios.post(apiPath, params, { signal });
}
