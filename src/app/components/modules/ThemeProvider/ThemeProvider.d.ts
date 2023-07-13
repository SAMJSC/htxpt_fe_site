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
    fonts: {
      title1Bold: ReturnType<css>;
      title1SemiBold: ReturnType<css>;
      title1Regular: ReturnType<css>;
      title2Bold: ReturnType<css>;
      title2SemiBold: ReturnType<css>;
      title2Regular: ReturnType<css>;
      title3Bold: ReturnType<css>;
      title3SemiBold: ReturnType<css>;
      title3Regular: ReturnType<css>;
      subTitleBold: ReturnType<css>;
      subTitleSemiBold: ReturnType<css>;
      subTitleRegular: ReturnType<css>;
      bodyBold: ReturnType<css>;
      bodySemiBold: ReturnType<css>;
      bodyRegular: ReturnType<css>;
      captionBold: ReturnType<css>;
      captionSemiBold: ReturnType<css>;
      captionRegular: ReturnType<css>;
      tagBold: ReturnType<css>;
      tagSemiBold: ReturnType<css>;
      tagRegular: ReturnType<css>;
    };
    colors: {
      background: string;
      black: string;
      darkGrey: string;
      error: string;
      errorToastBG: string;
      lightGrey: string;
      link: string;
      primaryButton: string;
      primaryHighlight: string;
      primaryText: string;
      secondaryText: string;
      success: string;
      warning: string;
      white: string;
    };
  }
}
