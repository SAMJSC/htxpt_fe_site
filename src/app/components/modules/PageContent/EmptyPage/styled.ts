import styled from 'styled-components';

export const EmptyPageContainer = styled.div`
  padding-top: 44px;
  text-align: center;
  margin: 0 auto;
  ${({ theme }) => theme.fonts.title3Bold}
  width: 100%;
`;
