import styled from '@emotion/styled';

export const InputContainer = styled.div`
  display: grid;
`;

export const InputLabel = styled.label`
  font-size: var(--bs-subline-font-size);
  font-weight: var(--bs-subline-font-weight);
  line-height: var(--bs-subline-line-height);
`;

export const StyledInput = styled.input`
  border: none;
  font-size: 16px;
  line-height: 20px;
  padding: var(--bs-spacing-7) var(--bs-spacing-6);
  margin: var(--bs-spacing-8) 0 var(--bs-spacing-7);

  &:disabled {
    background-color: var(--bs-color-bg-disabled);
    color: var(--bs-color-text-disabled);
  }

  &:focus {
    outline-color: var(--bs-color-border);
  }
`;

export const InputError = styled.div`
  height: 20px;
  font-size: 16px;
  line-height: 20px;
  color: var(--bs-color-error);
`;
