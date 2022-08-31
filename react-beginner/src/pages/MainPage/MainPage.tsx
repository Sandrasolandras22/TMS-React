import * as React from 'react';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useSearchParams } from 'react-router-dom';

import { Pagination } from 'components/Pagination/Pagination';
import { PostCard } from 'components/PostCard/PostCard';
import { MainContainer, PostList } from 'pages/MainPage/mainPage.styled';
import { requestPosts } from 'store/posts.actions';
import {
  bookmarkedAmountSelector,
  postsSelector,
  totalPostPageSelector
} from 'store/posts.selectors';
import { useAppDispatch } from 'store/rootStore';

export function MainPage() {
  const [postsPerPage] = React.useState(9);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const dispatch = useAppDispatch();

  const posts = useSelector(postsSelector);
  const totalPages = useSelector(totalPostPageSelector);
  const bookmarkedAmount = useSelector(bookmarkedAmountSelector);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });

    void dispatch(
      requestPosts({
        page: currentPage,
        postsPerPage
      })
    );
  }, [currentPage, dispatch, postsPerPage]);

  return (
    <MainContainer>
      <h1>Blog ({bookmarkedAmount})</h1>
      <PostList>
        {posts.map((post) => (
          <PostCard
            post={post}
            key={post.id}
          />
        ))}
      </PostList>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={(page) => {
          setSearchParams({ page: `${page}` });
        }}
      />
    </MainContainer>
  );
}
