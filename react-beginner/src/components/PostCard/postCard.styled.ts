import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { FontWeight } from 'contexts/AppThemeProvider/theme';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--bs-spacing-8);
  padding: var(--bs-spacing-5) 0;
  border-bottom: 1px solid var(--bs-color-border);
  width: 100%;
`;

export const PostImage = styled.img`
  height: 240px;
  width: auto;
  max-width: 100%;
  margin: auto;
  display: block;
`;

export const PostTitle = styled(Link)`
  font-size: var(--bs-subline-font-size);
  font-weight: var(--bs-subline-font-weight);
  line-height: var(--bs-subline-line-height);
`;

export const PostDate = styled.div`
  color: var(--bs-color-text-disabled);
  font-weight: ${FontWeight.Regular};
  font-size: 14px;
`;

export const PostControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
