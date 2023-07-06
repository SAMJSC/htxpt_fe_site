import { DefaultTheme } from 'styled-components';
import css from 'styled-jsx/css';

export const theme: DefaultTheme = {
  fonts: {
    title1Bold: css`
      font-size: 36px;
      font-style: normal;
      line-height: 44px;
      font-weight: 700;
    `,
    title1SemiBold: css`
      font-size: 36px;
      font-style: normal;
      line-height: 44px;
      font-weight: 600;
    `,
    title1Regular: css`
      font-size: 36px;
      font-style: normal;
      line-height: 44px;
      font-weight: 400;
    `,
    title2Bold: css`
      font-size: 24px;
      font-style: normal;
      line-height: 36px;
      font-weight: 700;
    `,
    title2SemiBold: css`
      font-size: 24px;
      font-style: normal;
      line-height: 36px;
      font-weight: 600;
    `,
    title2Regular: css`
      font-size: 24px;
      font-style: normal;
      line-height: 36px;
      font-weight: 400;
    `,
    title3Bold: css`
      font-size: 16px;
      font-style: normal;
      line-height: 24px;
      font-weight: 700;
    `,
    title3SemiBold: css`
      font-size: 16px;
      font-style: normal;
      line-height: 24px;
      font-weight: 600;
    `,
    title3Regular: css`
      font-size: 16px;
      font-style: normal;
      line-height: 24px;
      font-weight: 400;
    `,
    subTitleBold: css`
      font-size: 18px;
      font-style: normal;
      line-height: 28px;
      font-weight: 700;
    `,
    subTitleSemiBold: css`
      font-size: 18px;
      font-style: normal;
      line-height: 28px;
      font-weight: 600;
    `,
    subTitleRegular: css`
      font-size: 18px;
      font-style: normal;
      line-height: 28px;
      font-weight: 400;
    `,
    bodyBold: css`
      font-size: 14px;
      font-style: normal;
      line-height: 20px;
      font-weight: 700;
    `,
    bodySemiBold: css`
      font-size: 14px;
      font-style: normal;
      line-height: 20px;
      font-weight: 600;
    `,
    bodyRegular: css`
      font-size: 14px;
      font-style: normal;
      line-height: 20px;
      font-weight: 400;
    `,
    captionBold: css`
      font-size: 14px;
      font-style: normal;
      line-height: 20px;
      font-weight: 700;
    `,
    captionSemiBold: css`
      font-size: 14px;
      font-style: normal;
      line-height: 20px;
      font-weight: 600;
    `,
    captionRegular: css`
      font-size: 12px;
      font-style: normal;
      line-height: 20px;
      font-weight: 400;
    `,
    tagBold: css`
      font-size: 10px;
      font-style: normal;
      line-height: 16px;
      font-weight: 700;
    `,
    tagSemiBold: css`
      font-size: 10px;
      font-style: normal;
      line-height: 16px;
      font-weight: 600;
    `,
    tagRegular: css`
      font-size: 10px;
      font-style: normal;
      line-height: 16px;
      font-weight: 400;
    `,
  },
  colors: {
    background: '#F0F0F0',
    black: '#000000',
    darkGrey: '#656366',
    error: '#FF0422',
    errorToastBG: 'rgba(255, 4.25, 33.90, 0.05)',
    lightGrey: '#C7CCCE',
    link: '#0069FF',
    primaryButton: '#699C3A',
    primaryHighlight: '#D0E8B9',
    primaryText: '#000000',
    secondaryText: '#656366',
    success: '#5AD046',
    warning: '#FFB800',
    white: '#FFFFFF',
  },
};
