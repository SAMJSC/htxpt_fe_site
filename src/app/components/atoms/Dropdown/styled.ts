import styled, { css, keyframes } from 'styled-components';

const slideDownFadeIn = keyframes`
  0% {
    transform: translateX(10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideUpFadeOut = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateX(10px);
    opacity: 0;
  }
`;

export const Container = styled.div`
  width: fit-content;
  position: relative;
  height: auto;
`;

export const PromptContainer = styled.div``;

export const ListActionContainer = styled.div<{ isShowOptions: boolean }>`
  position: absolute;
  width: 20vw;
  top: calc(100% + 9px);
  right: 0;
  animation: ${({ isShowOptions }) =>
    isShowOptions
      ? css`
          ${slideDownFadeIn} 0.3s ease-out forwards
        `
      : css`
          ${slideUpFadeOut} 0.3s ease-out forwards
        `};
`;
