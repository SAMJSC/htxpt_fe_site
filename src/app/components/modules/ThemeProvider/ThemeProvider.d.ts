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

declare module "styled-components" {
  interface DefaultTheme {
    font: {
      title1: string;
      title2: string;
      body1: string;
    };
    colors: {
      primary: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      background: string;
    };
  }
}
