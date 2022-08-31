import * as React from 'react';

import { useParams } from 'react-router-dom';

export function PostPage() {
  const { postId } = useParams<{ postId: string }>();

  return <div>{postId}</div>;
}
