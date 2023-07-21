import styled from 'styled-components';

export const ScrollSnapBaseBox = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding: 24px 16px;
  overflow-x: hidden;
`;

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.darkGrey}`};
  padding: 8px;
  margin-top: 16px;
`;

export const SliderContainer = styled.div`
  display: flex;
`;
