import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 20px;
  ${({ theme }) => theme.fonts.bodyRegular}
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    cursor: pointer;
  }
`;
