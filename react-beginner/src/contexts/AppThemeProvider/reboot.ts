import { css } from '@emotion/react';

import {
  appTheme,
  Breakpoints,
  FontWeight,
  SPACING,
  ThemeVariant,
  TYPOGRAPHY
} from 'contexts/AppThemeProvider/theme';

export const getRebootCSS = (themeVariant: ThemeVariant) => css`
  /*!
  * Bootstrap Reboot v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors
  * Copyright 2011-2021 Twitter, Inc.
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)
  */

  :root {
    --bs-font-sans-serif: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
    --bs-body-font-family: var(--bs-font-sans-serif);

    --bs-color-bg-disabled: ${appTheme[themeVariant].colors.backgroundDisabled};
    --bs-color-bg-light: ${appTheme[themeVariant].colors.backgroundLight};
    --bs-color-bg-medium: ${appTheme[themeVariant].colors.backgroundMedium};
    --bs-color-bg: ${appTheme[themeVariant].colors.background};
    --bs-color-border: ${appTheme[themeVariant].colors.border};
    --bs-color-error: ${appTheme[themeVariant].colors.error};
    --bs-color-primary-2: ${appTheme[themeVariant].colors.primary2};
    --bs-color-primary: ${appTheme[themeVariant].colors.primary};
    --bs-color-text-disabled: ${appTheme[themeVariant].colors.textDisabled};
    --bs-color-text-invert: ${appTheme[themeVariant].colors.textInvert};
    --bs-color-text: ${appTheme[themeVariant].colors.text};

    --bs-body-font-size: ${TYPOGRAPHY.mobile.body.fontSize};
    --bs-body-line-height: ${TYPOGRAPHY.mobile.body.lineHeight};
    --bs-body-font-weight: ${TYPOGRAPHY.mobile.body.fontWeight};

    --bs-body-2-font-size: ${TYPOGRAPHY.mobile.body2.fontSize};
    --bs-body-2-line-height: ${TYPOGRAPHY.mobile.body2.lineHeight};
    --bs-body-2-font-weight: ${TYPOGRAPHY.mobile.body2.fontWeight};

    --bs-headline-1-font-size: ${TYPOGRAPHY.mobile.headline1.fontSize};
    --bs-headline-1-line-height: ${TYPOGRAPHY.mobile.headline1.lineHeight};
    --bs-headline-1-font-weight: ${TYPOGRAPHY.mobile.headline1.fontWeight};

    --bs-headline-2-font-size: ${TYPOGRAPHY.mobile.headline2.fontSize};
    --bs-headline-2-line-height: ${TYPOGRAPHY.mobile.headline2.lineHeight};
    --bs-headline-2-font-weight: ${TYPOGRAPHY.mobile.headline2.fontWeight};

    --bs-headline-3-font-size: ${TYPOGRAPHY.mobile.headline3.fontSize};
    --bs-headline-3-line-height: ${TYPOGRAPHY.mobile.headline2.lineHeight};
    --bs-headline-3-font-weight: ${TYPOGRAPHY.mobile.headline3.fontWeight};

    --bs-subline-font-size: ${TYPOGRAPHY.mobile.subline.fontSize};
    --bs-subline-line-height: ${TYPOGRAPHY.mobile.subline.lineHeight};
    --bs-subline-font-weight: ${TYPOGRAPHY.mobile.subline.fontWeight};

    --bs-spacing-1: ${SPACING.mobile.L1};
    --bs-spacing-2: ${SPACING.mobile.L2};
    --bs-spacing-3: ${SPACING.mobile.L3};
    --bs-spacing-4: ${SPACING.mobile.L4};
    --bs-spacing-5: ${SPACING.mobile.L5};
    --bs-spacing-6: ${SPACING.mobile.L6};
    --bs-spacing-7: ${SPACING.mobile.L7};
    --bs-spacing-8: ${SPACING.mobile.L8};

    @media (min-width: ${Breakpoints.Tablet}) {
      --bs-body-font-size: ${TYPOGRAPHY.desktop.body.fontSize};
      --bs-body-line-height: ${TYPOGRAPHY.desktop.body.lineHeight};
      --bs-body-font-weight: ${TYPOGRAPHY.desktop.body.fontWeight};

      --bs-headline-1-font-size: ${TYPOGRAPHY.desktop.headline1.fontSize};
      --bs-headline-1-line-height: ${TYPOGRAPHY.desktop.headline1.lineHeight};
      --bs-headline-1-font-weight: ${TYPOGRAPHY.desktop.headline1.fontWeight};

      --bs-headline-2-font-size: ${TYPOGRAPHY.desktop.headline2.fontSize};
      --bs-headline-2-line-height: ${TYPOGRAPHY.desktop.headline2.lineHeight};
      --bs-headline-2-font-weight: ${TYPOGRAPHY.desktop.headline2.fontWeight};

      --bs-headline-3-font-size: ${TYPOGRAPHY.desktop.headline3.fontSize};
      --bs-headline-3-line-height: ${TYPOGRAPHY.desktop.headline2.lineHeight};
      --bs-headline-3-font-weight: ${TYPOGRAPHY.desktop.headline3.fontWeight};

      --bs-spacing-1: ${SPACING.tablet.L1};
      --bs-spacing-2: ${SPACING.tablet.L2};
      --bs-spacing-3: ${SPACING.tablet.L3};
      --bs-spacing-4: ${SPACING.tablet.L4};
      --bs-spacing-5: ${SPACING.tablet.L5};
      --bs-spacing-6: ${SPACING.tablet.L6};
      --bs-spacing-7: ${SPACING.tablet.L7};
      --bs-spacing-8: ${SPACING.tablet.L8};
    }

    @media (min-width: ${Breakpoints.Desktop}) {
      --bs-spacing-1: ${SPACING.mobile.L1};
      --bs-spacing-2: ${SPACING.mobile.L2};
      --bs-spacing-3: ${SPACING.mobile.L3};
      --bs-spacing-4: ${SPACING.mobile.L4};
      --bs-spacing-5: ${SPACING.mobile.L5};
      --bs-spacing-6: ${SPACING.mobile.L6};
      --bs-spacing-7: ${SPACING.mobile.L7};
      --bs-spacing-8: ${SPACING.mobile.L8};
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    @media (prefers-reduced-motion: no-preference) {
      :root {
        scroll-behavior: smooth;
      }
    }

    body {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-text-size-adjust: 100%;
      background-color: var(--bs-color-bg);
      color: var(--bs-color-text);
      font-family: var(--bs-body-font-family);
      font-size: var(--bs-body-font-size);
      font-weight: var(--bs-body-font-weight);
      line-height: var(--bs-body-line-height);
      margin: 0;
    }

    hr {
      margin: var(--bs-spacing-7) 0;
      color: inherit;
      background-color: currentColor;
      border: 0;
      opacity: 0.25;
    }

    hr:not([size]) {
      height: 1px;
    }

    h6,
    h5,
    h4,
    h3,
    h2,
    h1 {
      margin: 0 0 var(--bs-spacing-7);
      font-size: var(--bs-headline-3-font-size);
      font-weight: var(--bs-headline-3-font-weight);
      line-height: var(--bs-headline-3-line-height);
    }

    h1 {
      margin-bottom: var(--bs-spacing-5);
      font-size: var(--bs-headline-1-font-size);
      font-weight: var(--bs-headline-1-font-weight);
      line-height: var(--bs-headline-1-line-height);
    }

    h2 {
      margin-bottom: var(--bs-spacing-6);
      font-size: var(--bs-headline-2-font-size);
      font-weight: var(--bs-headline-2-font-weight);
      line-height: var(--bs-headline-2-line-height);
    }

    p {
      margin-top: 0;
      margin-bottom: var(--bs-spacing-6);
    }

    abbr[title],
    abbr[data-bs-original-title] {
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
      cursor: help;
      -webkit-text-decoration-skip-ink: none;
      text-decoration-skip-ink: none;
    }

    address {
      margin-bottom: 1rem;
      font-style: normal;
      line-height: inherit;
    }

    ol,
    ul {
      padding-left: 2rem;
    }

    ol,
    ul,
    dl {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    ol ol,
    ul ul,
    ol ul,
    ul ol {
      margin-bottom: 0;
    }

    dt {
      font-weight: ${FontWeight.Bold};
    }

    dd {
      margin-bottom: 0.5rem;
      margin-left: 0;
    }

    blockquote {
      margin: 0 0 1rem;
    }

    b,
    strong {
      font-weight: bolder;
    }

    small {
      font-size: 0.875em;
    }

    mark {
      padding: 0.2em;
      background-color: #fcf8e3;
    }

    sub,
    sup {
      position: relative;
      font-size: 0.75em;
      line-height: 0;
      vertical-align: baseline;
    }

    sub {
      bottom: -0.25em;
    }

    sup {
      top: -0.5em;
    }

    a {
      text-decoration: none;
    }

    a:not([href]):not([class]),
    a:not([href]):not([class]):hover {
      color: inherit;
      text-decoration: none;
    }

    pre,
    code,
    kbd,
    samp {
      font-family: var(--bs-font-monospace);
      font-size: 1em;
      direction: ltr /* rtl:ignore */;
      unicode-bidi: bidi-override;
    }

    pre {
      display: block;
      margin-top: 0;
      margin-bottom: 1rem;
      overflow: auto;
      font-size: 0.875em;
    }

    pre code {
      font-size: inherit;
      color: inherit;
      word-break: normal;
    }

    code {
      font-size: 0.875em;
      color: #d63384;
      word-wrap: break-word;
    }

    a > code {
      color: inherit;
    }

    kbd {
      padding: 0.2rem 0.4rem;
      font-size: 0.875em;
      color: #fff;
      background-color: #212529;
      border-radius: 0.2rem;
    }

    kbd kbd {
      padding: 0;
      font-size: 1em;
      font-weight: 700;
    }

    figure {
      margin: 0 0 1rem;
    }

    img,
    svg {
      vertical-align: middle;
    }

    table {
      caption-side: bottom;
      border-collapse: collapse;
    }

    caption {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      color: #6c757d;
      text-align: left;
    }

    th {
      text-align: inherit;
      text-align: -webkit-match-parent;
    }

    thead,
    tbody,
    tfoot,
    tr,
    td,
    th {
      border-color: inherit;
      border-style: solid;
      border-width: 0;
    }

    label {
      display: inline-block;
    }

    input, button {
      border-radius: 2px;
    }

    button:focus:not(:focus-visible) {
      outline: 0;
    }

    button,
    select {
      text-transform: none;
    }

    [role='button'] {
      cursor: pointer;
    }

    select {
      word-wrap: normal;
    }

    select:disabled {
      opacity: 1;
    }

    [list]::-webkit-calendar-picker-indicator {
      display: none;
    }

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
      -webkit-appearance: button;
    }

    button:not(:disabled),
    [type='button']:not(:disabled),
    [type='reset']:not(:disabled),
    [type='submit']:not(:disabled) {
      cursor: pointer;
    }

    ::-moz-focus-inner {
      padding: 0;
      border-style: none;
    }

    textarea {
      resize: vertical;
    }

    fieldset {
      min-width: 0;
      padding: 0;
      margin: 0;
      border: 0;
    }

    legend {
      float: left;
      width: 100%;
      padding: 0;
      margin-bottom: 0.5rem;
      font-size: calc(1.275rem + 0.3vw);
      line-height: inherit;
    }

    @media (min-width: 1200px) {
      legend {
        font-size: 1.5rem;
      }
    }

    legend + * {
      clear: left;
    }

    ::-webkit-datetime-edit-fields-wrapper,
    ::-webkit-datetime-edit-text,
    ::-webkit-datetime-edit-minute,
    ::-webkit-datetime-edit-hour-field,
    ::-webkit-datetime-edit-day-field,
    ::-webkit-datetime-edit-month-field,
    ::-webkit-datetime-edit-year-field {
      padding: 0;
    }

    ::-webkit-inner-spin-button {
      height: auto;
    }

    [type='search'] {
      outline-offset: -2px;
      -webkit-appearance: textfield;
    }

    /* rtl:raw:
    [type="tel"],
    [type="url"],
    [type="email"],
    [type="number"] {
      direction: ltr;
    }
    */

    ::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    ::-webkit-color-swatch-wrapper {
      padding: 0;
    }

    ::-webkit-file-upload-button {
      font: inherit;
    }

    ::file-selector-button {
      font: inherit;
    }

    ::-webkit-file-upload-button {
      font: inherit;
      -webkit-appearance: button;
    }

    output {
      display: inline-block;
    }

    iframe {
      border: 0;
    }

    summary {
      display: list-item;
      cursor: pointer;
    }

    progress {
      vertical-align: baseline;
    }

    [hidden] {
      display: none !important;
    }
`;
