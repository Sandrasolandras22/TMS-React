import * as React from 'react';

import { faBars as MenuIcon } from '@fortawesome/free-solid-svg-icons/faBars';
import { faUser as UserIcon } from '@fortawesome/free-solid-svg-icons/faUser';
import { faXmark as CloseIcon } from '@fortawesome/free-solid-svg-icons/faXmark';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/Button/Button';
import { HeaderContainer } from 'components/Header/header.styled';
import { SearchBar } from 'components/Header/SearchBar/SearchBar';
import { UserInfo } from 'components/Header/UserPanel/UserInfo';
import { useUserContext } from 'contexts/UserProvider/UserContext';
import { AppRoute } from 'enums/router';
import { postsLoadingStateSelector } from 'store/posts.selectors';

export function Header({
  isSidePanelOpen,
  toggleSidePanel
}: {
  isSidePanelOpen: boolean;
  toggleSidePanel: () => void;
}) {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const loadingState = useSelector(postsLoadingStateSelector);

  return (
    <HeaderContainer>
      <Button
        onClick={(ev) => {
          toggleSidePanel();
          ev.stopPropagation();
        }}
        iconBefore={isSidePanelOpen ? CloseIcon : MenuIcon}
      />
      {loadingState === 'pending' ? 'LOADING POSTS' : null}
      <SearchBar />
      {user ? (
        <UserInfo user={user} />
      ) : (
        <Button
          onClick={() => {
            navigate(AppRoute.Login);
          }}
          iconBefore={UserIcon}
        />
      )}
    </HeaderContainer>
  );
}
