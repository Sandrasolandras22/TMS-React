import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { TabItemProps } from 'components/Tabs/tabs.types';
import { FontWeight } from 'contexts/AppThemeProvider/theme';

export const TabsContainer = styled.div`
  display: flex;
  gap: var(--bs-spacing-4);
`;

const getTabStyles = ({ isActive, isDisabled }: TabItemProps) => {
  if (isActive) {
    return css`
      &::after {
        width: 100%;
      }
    `;
  }

  if (isDisabled) {
    return css`
      cursor: not-allowed;
      color: var(--bs-color-text-disabled);
    `;
  }

  return css`
    cursor: pointer;

    &:hover {
      color: var(--bs-color-primary);
    }
  `;
};

export const TabItem = styled.div<TabItemProps>`
  font-weight: ${FontWeight.Bolder};
  padding: var(--bs-spacing-6) var(--bs-spacing-4);
  position: relative;
  text-align: center;
  user-select: none;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: var(--bs-color-text);
    transition: width 300ms ease-in-out;
  }

  ${getTabStyles}
`;
