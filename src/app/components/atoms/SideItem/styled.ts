import styled from 'styled-components';

import { theme } from '@/app/components/modules/ThemeProvider/theme';

export const Container = styled.div<{ isActive: boolean }>`
  position: relative;
  color: ${(props) => (props.isActive ? theme.colors.primaryButton : theme.colors.darkGrey)};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 24px;
  gap: 24px;
  width: 100%;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primaryButton};
    display: ${(props) => (props.isActive ? 'block' : 'none')};
  }
`;

export const IconContainer = styled.div``;

export const LabelContainer = styled.div`
  ${({ theme }) => theme.fonts.bodyBold}
`;
