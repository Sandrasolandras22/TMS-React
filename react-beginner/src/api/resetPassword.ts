import axios from 'axios';

const apiPath = `${process.env.REACT_APP_API_PATH}/auth/users/reset_password_confirm/`;

export interface ResetPasswordPayload {
  new_password: string;
  uid: string;
  token: string;
}

export async function resetPassword({
  abortController,
  ...params
}: {
  abortController?: AbortController;
} & ResetPasswordPayload): Promise<void> {
  return axios.post(apiPath, params);
}
