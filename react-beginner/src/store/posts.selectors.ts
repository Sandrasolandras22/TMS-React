import { RootState } from 'store/rootStore';

export const totalPostPageSelector = (state: RootState): number =>
  Math.ceil(state.posts.count / 9);

export const postsSelector = (state: RootState): RootState['posts']['posts'] =>
  state.posts.posts;

export const postsLoadingStateSelector = (
  state: RootState
): RootState['posts']['loadingState'] => state.posts.loadingState;

export const bookmarkedAmountSelector = (state: RootState): number =>
  state.posts.posts.filter(({ is_bookmarked: isBookmarked }) => isBookmarked)
    .length;
