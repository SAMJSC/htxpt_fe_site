import { css, styled } from 'styled-components';

import { ButtonProps } from '@/app/types/common';

export const Container = styled.div<ButtonProps>`
  ${({ size }) =>
    size === 'sm'
      ? css`
          padding: 0.25rem 0.75rem;
          font-size: 0.875rem;
          font-weight: 300;
          border: 1px solid;
        `
      : size === 'md'
      ? css`
          padding: 0.5rem 1rem;
          font-size: 1rem;
          font-weight: 500;
          border: 1px solid;
        `
      : size === 'lg'
      ? css`
          padding: 0.75rem 1.25rem;
          font-size: 1.25rem;
          font-weight: 600;
          border: 2px solid;
        `
      : size === 'xl'
      ? css`
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          border: 3px solid;
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
  ${({ variant }) =>
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
        `
      : ''}
    display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: opacity 0.5s ease-in-out;
  border-radius: 0.5rem;
`;

export const Icon = styled.span`
  margin-left: 2px;
`;
