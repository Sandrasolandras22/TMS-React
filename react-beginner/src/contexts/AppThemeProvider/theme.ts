export enum FontWeight {
  Bold = 700,
  Bolder = 600,
  Regular = 400
}

export enum Breakpoints {
  Mobile = '480px',
  Tablet = '768px',
  Desktop = '1920px'
}

export const TYPOGRAPHY = {
  desktop: {
    headline1: {
      fontSize: '56px',
      fontWeight: FontWeight.Bold,
      lineHeight: '80px'
    },
    headline2: {
      fontSize: '32px',
      fontWeight: FontWeight.Bold,
      lineHeight: '44px'
    },
    headline3: {
      fontSize: '18px',
      fontWeight: FontWeight.Bolder,
      lineHeight: '28px'
    },
    body: {
      fontSize: '18px',
      fontWeight: FontWeight.Regular,
      lineHeight: '32px'
    },
    body2: {
      fontSize: '16px',
      fontWeight: FontWeight.Regular,
      lineHeight: '24px'
    },
    subline: {
      fontSize: '16px',
      fontWeight: FontWeight.Bolder,
      lineHeight: '20px'
    }
  },
  mobile: {
    headline1: {
      fontSize: '32px',
      fontWeight: FontWeight.Bold,
      lineHeight: '48px'
    },
    headline2: {
      fontSize: '24px',
      fontWeight: FontWeight.Bold,
      lineHeight: '36px'
    },
    headline3: {
      fontSize: '18px',
      fontWeight: FontWeight.Bolder,
      lineHeight: '28px'
    },
    body: {
      fontSize: '16px',
      fontWeight: FontWeight.Regular,
      lineHeight: '24px'
    },
    body2: {
      fontSize: '16px',
      fontWeight: FontWeight.Regular,
      lineHeight: '24px'
    },
    subline: {
      fontSize: '16px',
      fontWeight: FontWeight.Bolder,
      lineHeight: '20px'
    }
  }
};

export const SPACING = {
  mobile: {
    L1: '56px',
    L2: '48px',
    L3: '36px',
    L4: '32px',
    L5: '28px',
    L6: '24px',
    L7: '16px',
    L8: '8px'
  },
  tablet: {
    L1: '72px',
    L2: '56px',
    L3: '48px',
    L4: '40px',
    L5: '32px',
    L6: '24px',
    L7: '16px',
    L8: '8px'
  },
  desktop: {
    L1: '72px',
    L2: '64px',
    L3: '48px',
    L4: '40px',
    L5: '32px',
    L6: '24px',
    L7: '16px',
    L8: '8px'
  }
} as const;

export enum ThemeVariant {
  Dark = 'dark',
  Light = 'light'
}

const darkTheme = {
  colors: {
    background: '#313037',
    backgroundLight: '#8b8888',
    backgroundMedium: '#DADADA',
    backgroundDisabled: '#E8E8E8',
    border: '#DADADA',
    error: '#FD3419',
    primary2: '#AC9F32',
    primary: '#DDCE55',
    text: '#F1F1F1',
    textDisabled: '#b2b2b2',
    textInvert: '#313037'
  }
};

const lightTheme = {
  colors: {
    background: '#F6F6F6',
    backgroundLight: '#F3F3F3',
    backgroundMedium: '#DADADA',
    backgroundDisabled: '#E8E8E8',
    border: '#DADADA',
    error: '#FD3419',
    primary2: '#5360CD',
    primary: '#2231AA',
    text: '#323537',
    textDisabled: '#8D8E97',
    textInvert: '#FFF'
  }
};

export const appTheme = {
  [ThemeVariant.Dark]: darkTheme,
  [ThemeVariant.Light]: lightTheme
};
