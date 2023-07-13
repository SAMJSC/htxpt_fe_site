import styled, { css } from 'styled-components';

import { ButtonProps } from '@/app/types/common';

export const Container = styled.button<ButtonProps>`
  ${({ size, shadow }) =>
    size === 'sm'
      ? css`
          padding: 0.25rem 0.75rem;
          font-size: 0.875rem;
          font-weight: 300;
          border: 1px solid;
          box-shadow: ${shadow ? '0px 5px 10px rgba(0, 0, 0, 0.25)' : ''};
        `
      : size === 'md'
      ? css`
          padding: 6px 12px;
          font-size: 1rem;
          font-weight: 500;
          border: 1px solid;
          box-shadow: ${shadow ? '0px 5px 10px rgba(0, 0, 0, 0.25)' : ''};
        `
      : size === 'lg'
      ? css`
          padding: 12px 24px;
          font-size: 1.25rem;
          font-weight: 600;
          border: 2px solid;
          box-shadow: ${shadow ? '0px 5px 10px rgba(0, 0, 0, 0.25)' : ''};
        `
      : size === 'xl'
      ? css`
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          border: 3px solid;
          box-shadow: ${shadow ? '0px 5px 10px rgba(0, 0, 0, 0.25)' : ''};
        `
      : ''}
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.7;
          cursor: not-allowed;
        `
      : ''}
  ${({ fullWidth }) =>
    fullWidth
      ? css`
          width: 100%;
        `
      : css`
          width: auto;
        `}
  ${({ variant, isActive }) =>
    variant === 'contained'
      ? css`
          background-color: ${({ theme }) => theme.colors.primaryButton};
          border: none;
          color: ${({ theme }) => theme.colors.white};
        `
      : variant === 'outlined'
      ? css`
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.primaryButton};
          color: ${({ theme }) => theme.colors.primaryButton};
          &:hover {
            background-color: #f8f8f8;
          }
        `
      : variant === 'text'
      ? css`
          background-color: transparent;
          border: none;
          color: ${({ theme }) => (isActive ? theme.colors.primaryButton : theme.colors.darkGrey)};
          ${({ theme }) => (isActive ? theme.fonts.title3Bold : theme.fonts.title3Bold)};
        `
      : variant === 'icon'
      ? css`
          background-color: ${({ theme }) => theme.colors.white};
          border: none;
          color: ${({ theme }) => (isActive ? theme.colors.primaryButton : theme.colors.darkGrey)};
          ${({ theme }) => (isActive ? theme.fonts.title3Bold : theme.fonts.title3Bold)};
          padding: 12px;
        `
      : variant === 'image'
      ? css`
          background-color: ${({ theme }) => theme.colors.white};
          border: none;
          color: ${({ theme }) => (isActive ? theme.colors.primaryButton : theme.colors.darkGrey)};
          ${({ theme }) => (isActive ? theme.fonts.title3Bold : theme.fonts.title3Regular)};
          padding: 0px 12px;
          width: 187px;
          flex: 1;
          justify-content: flex-start;
        `
      : ''}
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: opacity 0.5s ease-in-out;
  border-radius: ${({ borderRadius }) =>
    borderRadius === 'full' ? '50%' : borderRadius === 'normal' ? '12px' : 'none'};
  cursor: pointer;
`;

export const IconContainer = styled.div<Pick<ButtonProps, 'size'>>`
  height: 24px;
`;

export const ImageContainer = styled.img<Pick<ButtonProps, 'isActive'>>`
  ${({ isActive }) =>
    isActive
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.5;
        `}
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
