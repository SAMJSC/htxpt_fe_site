import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ChildrenWrapper = styled.div`
  position: absolute;
  top: 80px;
`;
