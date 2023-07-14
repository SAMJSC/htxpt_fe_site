import styled, { css, keyframes } from 'styled-components';

import { TInput } from '@/app/types/common';

const labelMoveUpAnimation = keyframes`
  from {
    top: 50%;
    transform: translateY(-50%);
  }
  to {
    top: 4px;
    left: -4px;
    transform: scale(0.55);
  }
`;

const labelMoveDownAnimation = keyframes`
  from {
    top: 4px;
    left: -4px;
    transform: scale(0.55);
  }
  to {
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 50%;
  overflow: hidden;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  height: 24px;
`;

export const InputLabel = styled.label<Pick<TInput, 'errors'>>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme, errors }) => (errors ? theme.colors.error : theme.colors.darkGrey)};
  ${({ theme }) => theme.fonts.subTitleRegular};
  transition: top 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.white};
`;

export const InputField = styled.input<TInput>`
  &::-ms-reveal {
    display: none;
  }
  position: relative;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${({ theme, errors }) => (errors ? theme.colors.error : theme.colors.lightGrey)};
  background: ${({ theme, errors }) => (errors ? theme.colors.errorToastBG : theme.colors.white)};
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.title3Regular};
  transition: padding 0.3s ease, border-color 0.3s ease;
  padding: 18px 16px;
  text-overflow: ellipsis;
  &:focus {
    outline: none;
    padding: 24px 16px 12px;
    background: ${({ theme }) => theme.colors.white};
    ~ ${InputLabel} {
      animation: ${labelMoveUpAnimation} 0.3s ease forwards;
    }
  }
  ${({ value }) =>
    value && value?.length > 0
      ? css`
          padding: 24px 16px 12px;
          ~ ${InputLabel} {
            animation: ${labelMoveUpAnimation} 0.3s ease forwards;
          }
        `
      : css`
          &:not(:focus) {
            ~ ${InputLabel} {
              animation: ${labelMoveDownAnimation} 0.3s ease forwards;
            }
          }
        `}
`;

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 4px;
  ${({ theme }) => theme.fonts.captionRegular};
  color: ${({ theme }) => theme.colors.error};
  gap: 5px;
`;
