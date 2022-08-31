import * as React from 'react';

import { Button } from 'components/Button/Button';
import { ButtonAppearance } from 'components/Button/button.types';
import {
  SideNavLink,
  SidePanelContainer,
  SidePanelMainContent
} from 'components/SidePanel/sidePanel.styled';
import { ThemeSwitcher } from 'components/SidePanel/ThemeSwitcher';
import { useUserContext } from 'contexts/UserProvider/UserContext';
import { AppRoute } from 'enums/router';

export function SidePanel({
  isSidePanelOpen,
  onClickOutside
}: {
  isSidePanelOpen: boolean;
  onClickOutside?: () => void;
}) {
  const sidePanelRef = React.useRef<HTMLDivElement>(null);
  const { user, logout } = useUserContext();

  React.useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        onClickOutside &&
        isSidePanelOpen &&
        sidePanelRef.current &&
        !sidePanelRef.current.contains(event.target as Node)
      ) {
        onClickOutside();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClickOutside, isSidePanelOpen]);

  return (
    <SidePanelContainer
      isSidePanelOpen={isSidePanelOpen}
      ref={sidePanelRef}
    >
      <SidePanelMainContent>
        <SideNavLink to={AppRoute.Main}>Home</SideNavLink>
        <SideNavLink to={AppRoute.PostsAdd}>Add Post</SideNavLink>
      </SidePanelMainContent>
      {user && (
        <Button
          onClick={logout}
          appearance={ButtonAppearance.Secondary}
          shouldFitContainer
          text="Logout"
        />
      )}
      <ThemeSwitcher />
    </SidePanelContainer>
  );
}
