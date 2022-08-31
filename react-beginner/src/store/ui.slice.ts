import { createSlice } from '@reduxjs/toolkit';

import { ThemeVariant } from 'contexts/AppThemeProvider/theme';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    appearance: ThemeVariant.Dark
  },
  reducers: {
    toggleTheme: (state) => {
      state.appearance =
        state.appearance === ThemeVariant.Dark
          ? ThemeVariant.Light
          : ThemeVariant.Dark;
    }
  }
});

export const { reducer: uiReducer, actions: uiActions } = uiSlice;
