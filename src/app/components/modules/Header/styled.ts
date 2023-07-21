import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 72px;
  width: calc(100% - 260px);
  background-color: ${({ theme }) => theme.colors.primaryButton};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px 54px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const SloganContainer = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const WelcomeText = styled.div`
  ${({ theme }) => theme.fonts.title2Bold};
`;
export const SloganText = styled.div`
  ${({ theme }) => theme.fonts.captionRegular};
`;
export const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
