import * as React from 'react';

import { faMoon as DarkThemeIcon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { faSun as LightThemeIcon } from '@fortawesome/free-solid-svg-icons/faSun';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useSelector } from 'react-redux';

import {
  SidePanelThemeSwitcher,
  ThemeSwitcherButton,
  ThemeSwitcherDivider
} from 'components/SidePanel/sidePanel.styled';
import { ThemeVariant } from 'contexts/AppThemeProvider/theme';
import { useAppDispatch } from 'store/rootStore';
import { uiAppearanceSelector } from 'store/ui.selectors';
import { uiActions } from 'store/ui.slice';

export function ThemeSwitcher() {
  const themeVariant = useSelector(uiAppearanceSelector);
  const dispatch = useAppDispatch();

  return (
    <SidePanelThemeSwitcher>
      <ThemeSwitcherButton
        onClick={() => dispatch(uiActions.toggleTheme())}
        isActive={themeVariant === ThemeVariant.Light}
      >
        <FontAwesomeIcon icon={LightThemeIcon} />
      </ThemeSwitcherButton>
      <ThemeSwitcherDivider />
      <ThemeSwitcherButton
        onClick={() => dispatch(uiActions.toggleTheme())}
        isActive={themeVariant === ThemeVariant.Dark}
      >
        <FontAwesomeIcon icon={DarkThemeIcon} />
      </ThemeSwitcherButton>
    </SidePanelThemeSwitcher>
  );
}
