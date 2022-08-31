import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';

import { requestPosts } from 'store/posts.actions';
import { Post } from 'types/posts.types';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [] as Post[],
    count: 0,
    error: null as SerializedError | null,
    loadingState: 'idle' as 'idle' | 'pending' | 'fulfilled' | 'rejected'
  },
  reducers: {
    bookmarkPost: (state, action: PayloadAction<Post['id']>) => {
      const bookmarkedPostIndex = state.posts.findIndex(
        ({ id }) => id === action.payload
      );

      if (bookmarkedPostIndex !== -1) {
        const updatedPosts = state.posts.slice();
        updatedPosts[bookmarkedPostIndex] = {
          ...updatedPosts[bookmarkedPostIndex],
          is_bookmarked: !updatedPosts[bookmarkedPostIndex].is_bookmarked
        };
        state.posts = updatedPosts;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestPosts.fulfilled, (state, action) => {
        state.posts = action.payload.results;
        state.count = action.payload.count;
        state.loadingState = action.meta.requestStatus;
      })
      .addCase(requestPosts.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
      })
      .addCase(requestPosts.rejected, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.error = action.error;
      });
  }
});

export const { reducer: postsReducer, actions: postsActions } = postsSlice;
