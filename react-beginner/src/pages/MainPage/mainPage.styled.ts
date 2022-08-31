import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: var(--bs-spacing-5);
  grid-row-gap: var(--bs-spacing-5);
`;

export const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: var(--bs-spacing-5);
  grid-row-gap: var(--bs-spacing-5);
`;
