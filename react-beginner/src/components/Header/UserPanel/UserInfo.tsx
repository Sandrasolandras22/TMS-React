import styled from '@emotion/styled';

import { User } from 'types/user.types';

const UserInfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const UserInitials = styled.div`
  text-transform: uppercase;
  background-color: var(--bs-color-primary-2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 var(--bs-spacing-8);
  margin: var(--bs-spacing-8);
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--bs-spacing-8);
`;

export function UserInfo({ user }: { user: User }): JSX.Element {
  return (
    <UserInfoContainer>
      <UserInitials>{user.username.slice(0, 2)}</UserInitials>
      <UserName>{user.username}</UserName>
    </UserInfoContainer>
  );
}
