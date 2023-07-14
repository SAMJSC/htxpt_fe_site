import styled from 'styled-components';

export const Container = styled.div<{ size: number }>`
  position: relative;
  display: flex;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  justify-content: center;
  align-items: center;
  > svg {
    width: 100%;
    height: 100%;
  }
`;
