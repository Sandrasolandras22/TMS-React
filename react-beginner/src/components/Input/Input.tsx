import * as React from 'react';

import {
  InputContainer,
  InputError,
  InputLabel,
  StyledInput
} from 'components/Input/input.styled';
import { InputProps } from 'components/Input/input.types';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, ...passThroughProps }, ref) => (
    <InputContainer ref={ref}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <StyledInput
        id={id}
        {...passThroughProps}
      />
      <InputError>{error}</InputError>
    </InputContainer>
  )
);
