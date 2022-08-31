import styled from '@emotion/styled';

import { HEADER_HEIGHT } from 'layouts/MainLayout/layout.styled';

export const HeaderContainer = styled.header`
  background-color: var(--bs-color-primary);
  color: var(--bs-color-text-invert);
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: ${HEADER_HEIGHT}px;
  position: fixed;
  top: 0;
  width: 100%;
`;
