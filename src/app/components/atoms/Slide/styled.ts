import styled from 'styled-components';

export const SlideContainer = styled.div`
  width: 100%;
`;

export const SlideImage = styled.div<{ image: string }>`
  width: 100%;
  height: 256px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
`;
