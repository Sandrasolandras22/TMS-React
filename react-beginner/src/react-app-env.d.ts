/// <reference types="react-scripts" />
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_PATH: string;
    }
  }
}

export const hack = '';
