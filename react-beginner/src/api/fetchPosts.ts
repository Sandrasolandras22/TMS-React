import axios from 'axios';

import { Post } from 'types/posts.types';

const apiPath = `${process.env.REACT_APP_API_PATH}/blog/posts/`;

export interface FetchPostsPayload {
  authorId?: number;
  lesson_num?: number;
  limit?: number;
  offset?: number;
  ordering?: string;
  search?: string;
}

export interface FetchPostsResponse {
  count: number;
  previous: string | null;
  next: string | null;
  results: Post[];
}

export async function fetchPosts({
  signal,
  ...params
}: {
  signal?: AbortController['signal'];
} & FetchPostsPayload = {}): Promise<FetchPostsResponse> {
  const queryParams = (Object.keys(params) as (keyof typeof params)[]).reduce(
    (acc, key) => {
      const value = params[key];
      if (typeof value !== 'undefined') {
        acc.append(key, `${value}`);
      }
      return acc;
    },
    new URLSearchParams()
  );

  const { data } = await axios.get<FetchPostsResponse>(apiPath, {
    params: queryParams,
    signal
  });

  data.results.forEach((post) => {
    post.is_bookmarked = false;
  });

  return data;
}
