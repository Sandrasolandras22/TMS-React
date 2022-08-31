import * as React from 'react';

import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export enum ButtonAppearance {
  Primary = 'primary',
  Secondary = 'secondary',
  Outline = 'outline'
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: ButtonAppearance;
  iconBefore?: IconDefinition | null;
  iconAfter?: IconDefinition | null;
  shouldFitContainer?: boolean;
  text?: string | number;
}
