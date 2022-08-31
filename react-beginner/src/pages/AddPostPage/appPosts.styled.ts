import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';

export const ImageRemove = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:before {
    content: 'Delete image...';
    font-size: 20px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  margin-bottom: var(--bs-spacing-8);

  &:hover ${ImageRemove} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageDropArea = styled.div<{ isDragging: boolean }>`
  border-width: 2px;
  border-style: dashed;
  border-radius: 8px;
  padding: var(--bs-spacing-8);
  text-align: center;
  margin: var(--bs-spacing-8) 0;
  cursor: pointer;
  position: relative;

  ${({ isDragging }) =>
    isDragging
      ? css`
          color: var(--bs-color-error);
          border-color: var(--bs-color-error);
        `
      : css`
          color: var(--bs-color-border);
          border-color: var(--bs-color-border);

          &:hover {
            color: var(--bs-color-text);
            border-color: var(--bs-color-text);
          }
        `};
`;

export const ImagePreview = styled.img`
  height: auto;
  width: 100%;
`;
