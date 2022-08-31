import styled from '@emotion/styled';

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  input {
    background-color: transparent;
    color: var(--bs-color-text-invert);
    border: none;
    padding: var(--bs-spacing-8) var(--bs-spacing-5);
    flex: 1;
  }

  input::placeholder {
    color: var(--bs-color-text-invert);
    opacity: 0.8;
  }
`;
