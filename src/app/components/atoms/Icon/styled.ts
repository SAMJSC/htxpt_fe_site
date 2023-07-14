import styled from 'styled-components';

export const Container = styled.div<{ size: number }>`
  display: flex;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  justify-content: center;
  align-items: center;
`;
