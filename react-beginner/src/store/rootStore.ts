import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { postsReducer } from 'store/posts.slice';
import { uiReducer } from 'store/ui.slice';

export const rootStore = configureStore({
  reducer: {
    ui: uiReducer,
    posts: postsReducer
  }
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
