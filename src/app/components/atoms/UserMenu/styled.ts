import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 11px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px 8px 8px 12px;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const AvatarContainer = styled.div`
  width: 30px;
  height: 30px;
  > * {
    width: 100%;
    border-radius: 50%;
    height: 100%;
    overflow: hidden;
  }
`;
