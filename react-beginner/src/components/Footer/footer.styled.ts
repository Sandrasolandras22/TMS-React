import styled from '@emotion/styled';

import { MAX_CONTENT_WIDTH } from 'layouts/MainLayout/layout.styled';

export const FooterContainer = styled.footer`
  border-top: 1px solid var(--bs-color-border);
  display: flex;
  justify-content: space-between;
  padding: var(--bs-spacing-5);
  max-width: calc(${MAX_CONTENT_WIDTH}px + var(--bs-spacing-5) * 2);
  margin: auto;
  width: 100%;
`;

export const FooterSection = styled.div`
  color: var(--bs-color-text-disabled);
`;
