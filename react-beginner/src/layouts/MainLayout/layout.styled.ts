import styled from '@emotion/styled';

export const MAX_CONTENT_WIDTH = 1120;
export const HEADER_HEIGHT = 54;

export const PageContainer = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  padding-top: ${HEADER_HEIGHT}px;
`;

export const ContentContainer = styled.div`
  padding: var(--bs-spacing-1) var(--bs-spacing-4);
  max-width: calc(${MAX_CONTENT_WIDTH}px + var(--bs-spacing-4) * 2);
  margin: auto;
  min-height: 100%;
  width: 100%;
`;
