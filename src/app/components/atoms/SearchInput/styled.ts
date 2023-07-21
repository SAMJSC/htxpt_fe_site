import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px 24px;
  border-radius: 8px;
  cursor: pointer;
`;

export const InputContainer = styled.input`
  outline: none;
  border: none;
  ${({ theme }) => theme.fonts.bodyRegular};
  flex: 1;
  padding: 0 24px;
`;
