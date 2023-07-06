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
      title1Bold: ReturnType<typeof css>;
      title1SemiBold: ReturnType<typeof css>;
      title1Regular: ReturnType<typeof css>;
      title2Bold: ReturnType<typeof css>;
      title2SemiBold: ReturnType<typeof css>;
      title2Regular: ReturnType<typeof css>;
      title3Bold: ReturnType<typeof css>;
      title3SemiBold: ReturnType<typeof css>;
      title3Regular: ReturnType<typeof css>;
      subTitleBold: ReturnType<typeof css>;
      subTitleSemiBold: ReturnType<typeof css>;
      subTitleRegular: ReturnType<typeof css>;
      bodyBold: ReturnType<typeof css>;
      bodySemiBold: ReturnType<typeof css>;
      bodyRegular: ReturnType<typeof css>;
      captionBold: ReturnType<typeof css>;
      captionSemiBold: ReturnType<typeof css>;
      captionRegular: ReturnType<typeof css>;
      tagBold: ReturnType<typeof css>;
      tagSemiBold: ReturnType<typeof css>;
      tagRegular: ReturnType<typeof css>;
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
