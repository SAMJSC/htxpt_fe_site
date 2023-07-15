import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ChildrenWrapper = styled.div`
  position: absolute;
  top: 80px;
`;
