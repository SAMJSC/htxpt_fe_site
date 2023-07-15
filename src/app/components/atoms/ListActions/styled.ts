import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  overflow: hidden;
  padding: 8px 0;
  background-color: ${({ theme }) => theme.colors.white};
`;
