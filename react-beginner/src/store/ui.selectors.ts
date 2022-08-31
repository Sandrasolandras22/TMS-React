import { RootState } from 'store/rootStore';

export const uiAppearanceSelector = (
  state: RootState
): RootState['ui']['appearance'] => state.ui.appearance;
