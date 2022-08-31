import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  ButtonContainer,
  TitleContainer
} from 'components/Button/button.styled';
import { ButtonProps } from 'components/Button/button.types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ iconBefore = null, iconAfter = null, text, ...passThroughProps }, ref) => (
    <ButtonContainer
      {...passThroughProps}
      ref={ref}
    >
      {iconBefore ? (
        <FontAwesomeIcon
          icon={iconBefore}
          size="1x"
        />
      ) : null}
      {text && <TitleContainer>{text}</TitleContainer>}

      {iconAfter ? (
        <FontAwesomeIcon
          icon={iconAfter}
          size="1x"
        />
      ) : null}
    </ButtonContainer>
  )
);
