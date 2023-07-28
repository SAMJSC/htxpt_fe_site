import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SideBarContainer = styled.div`
  width: 260px;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 260px);
  background-color: ${({ theme }) => theme.colors.background} !important;
`;

export const HeaderContainer = styled.div``;

export const BodyPage = styled.div`
  margin-top: 70px;
  width: 100%;
  min-height: calc(100vh -70px);
`;
