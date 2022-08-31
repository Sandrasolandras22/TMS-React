import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons/faThumbsDown';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';

import { Post } from 'api/posts.types';
import { getFormattedDate } from 'components/PostCard/postCard.utils';
import { Button } from 'components/Button/Button';
import { ButtonAppearance } from 'components/Button/button.types';
import {
  PostContainer,
  PostControls,
  PostDate,
  PostImage,
  PostTitle
} from 'components/PostCard/postCard.styled';
import { AppRoute } from 'enums/router';

export function PostCard({ post }: { post: Post }) {
  return (
    <PostContainer>
      <PostImage
        src={
          post.image ||
          'https://st2.depositphotos.com/2627021/5658/i/450/depositphotos_56588069-stock-photo-earth-view-from-space-at.jpg'
        }
      />
      <PostDate>{getFormattedDate(post.date)}</PostDate>
      <PostTitle to={`${AppRoute.Posts}/${post.id}`}>{post.title}</PostTitle>
      <PostControls>
        <div>
          <Button
            appearance={ButtonAppearance.Secondary}
            iconBefore={faThumbsUp}
          />
          <Button
            appearance={ButtonAppearance.Secondary}
            iconBefore={faThumbsDown}
          />
        </div>
        <div>
          <Button
            appearance={ButtonAppearance.Secondary}
            iconBefore={faBookmark}
          />
          <Button
            appearance={ButtonAppearance.Secondary}
            iconBefore={faEllipsis}
          />
        </div>
      </PostControls>
    </PostContainer>
  );
}
