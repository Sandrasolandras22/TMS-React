import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchPosts } from 'api/fetchPosts';

export const requestPosts = createAsyncThunk<
  Awaited<ReturnType<typeof fetchPosts>>,
  { postsPerPage: number; page: number }
>('posts/requestPosts', (payload) =>
  fetchPosts({
    limit: payload.postsPerPage,
    offset: payload.postsPerPage * (payload.page - 1)
  })
);
