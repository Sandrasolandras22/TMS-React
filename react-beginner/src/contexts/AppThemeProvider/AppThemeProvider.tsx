import * as React from 'react';

import { Global, ThemeProvider } from '@emotion/react';

import { useSelector } from 'react-redux';

import { getRebootCSS } from 'contexts/AppThemeProvider/reboot';
import { appTheme } from 'contexts/AppThemeProvider/theme';
import { uiAppearanceSelector } from 'store/ui.selectors';

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const themeVariant = useSelector(uiAppearanceSelector);
  return (
    <ThemeProvider theme={appTheme[themeVariant]}>
      <Global styles={getRebootCSS(themeVariant)} />
      {children}
    </ThemeProvider>
  );
}
