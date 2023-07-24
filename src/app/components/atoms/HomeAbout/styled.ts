import styled from 'styled-components';

export const HomeAboutContainer = styled.div``;

export const HomeAboutImage = styled.div<{ image: string }>`
  width: 100%;
  height: 256px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
`;
