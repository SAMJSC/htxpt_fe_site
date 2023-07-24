import Image from 'next/image';
import styled from 'styled-components';

export const ScrollSnapBaseBox = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
`;

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const ImageItem = styled(Image)``;
