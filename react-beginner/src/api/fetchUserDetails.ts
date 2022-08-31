import { authorizedAxiosInstance } from 'api/authorizedAxiosInstance';
import { User } from 'types/user.types';

const userApiPath = `${process.env.REACT_APP_API_PATH}/auth/users/me/`;

export async function fetchUserDetails({
  signal
}: {
  signal?: AbortController['signal'];
} = {}): Promise<User> {
  const resp = await authorizedAxiosInstance.get<User>(userApiPath, {
    signal
  });
  return resp.data;
}
