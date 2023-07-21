import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  width: 260px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
  padding: 0 30px;
`;

export const OptionsContainer = styled.div`
  margin-top: 52px;
`;
