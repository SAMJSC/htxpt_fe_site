interface ThemeProviderProps {
  children: ReactNode;
  type: Projects;
  mode?: ColorMode;
  theme?: OverrideTheme;
}

export declare function ThemeProvider({
  children,
  type,
  mode,
  theme,
}: ThemeProviderProps): JSX.Element;

declare module 'styled-components' {
  interface DefaultTheme {
    font: {
      title1: string;
      title2: string;
      body1: string;
    };
    colors: {
      primaryButton: string;
      primaryHighlight: string;
      primaryText: string;
      secondaryText: string;
      lightGrey: string;
      white: string;
      background: string;
      error: string;
      success: string;
      warning: string;
      link: string;
      errorToastBG: string;
    };
  }
}
