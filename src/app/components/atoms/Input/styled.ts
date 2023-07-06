import styled, { css, keyframes } from 'styled-components';

import { InputProps } from '@/app/types/common';

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

export const InputField = styled.input<Partial<InputProps> & { hasValue: boolean }>`
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
  &:focus {
    outline: none;
    padding: 24px 16px 12px;
    background: ${({ theme }) => theme.colors.white};
    ~ label {
      animation: ${labelMoveUpAnimation} 0.3s ease forwards;
    }
  }
  ${({ hasValue }) =>
    hasValue
      ? css`
          padding: 24px 16px 12px;
          ~ label {
            animation: ${labelMoveUpAnimation} 0.3s ease forwards;
          }
        `
      : css`
          &:not(:focus) {
            ~ label {
              animation: ${labelMoveDownAnimation} 0.3s ease forwards;
            }
          }
        `}
`;

export const InputLabel = styled.label<Pick<InputProps, 'errors'>>`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme, errors }) => (errors ? theme.colors.error : theme.colors.darkGrey)};
  ${({ theme }) => theme.fonts.subTitleRegular};
  transition: top 0.3s ease, transform 0.3s ease;
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
