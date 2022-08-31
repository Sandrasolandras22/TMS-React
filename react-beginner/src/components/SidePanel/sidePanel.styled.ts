import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

import { HEADER_HEIGHT } from 'layouts/MainLayout/layout.styled';

export const SidePanelContainer = styled.div<{ isSidePanelOpen: boolean }>`
  position: fixed;
  transition: transform 300ms ease-in-out;
  top: ${HEADER_HEIGHT}px;
  bottom: 0;
  width: 240px;
  border: 1px solid var(--bs-color-border);
  background-color: var(--bs-color-bg-light);
  transform: translateX(
    ${({ isSidePanelOpen }) => (isSidePanelOpen ? 0 : '-100%')}
  );
  display: flex;
  flex-direction: column;
`;

export const SidePanelMainContent = styled.div`
  flex: 1;
`;

export const SidePanelThemeSwitcher = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  border-top: 1px solid var(--bs-color-border);
`;

export const ThemeSwitcherDivider = styled.div`
  width: 1px;
  background-color: var(--bs-color-border);
`;

export const SideNavLink = styled(NavLink)`
  display: block;
  padding: var(--bs-spacing-8) var(--bs-spacing-7);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);

  &.active {
    color: var(--bs-color-error);
  }

  &:hover:not(.active) {
    opacity: 0.7;
  }
`;

export const ThemeSwitcherButton = styled.button<{ isActive: boolean }>`
  background-color: transparent;
  width: 100%;
  padding: var(--bs-spacing-8);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  border: none;
  color: var(
    ${({ isActive }) =>
      isActive ? '--bs-color-text' : '--bs-color-text-disabled'}
  );
`;
