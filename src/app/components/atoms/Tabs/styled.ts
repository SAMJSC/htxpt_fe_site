import styled from 'styled-components';

import Button from '@/app/components/atoms/Button';

export const Container = styled.div`
  display: flex;
  gap: 5px;
`;

export const Tab = styled.div<{ active?: boolean }>`
  position: relative;
  display: flex;
`;

export const TabTitle = styled.div<{ active?: boolean }>`
  text-align: center;
  color: ${({ theme, active }) => (active ? theme.colors.primaryButton : theme.colors.darkGrey)};
  ${({ theme }) => theme.fonts.subTitleBold};
`;

export const TabItem = styled(Button)`
  min-width: 130px;
`;
