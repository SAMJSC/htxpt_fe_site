import styled from 'styled-components';

import { ProductCardProps } from '@/app/components/modules/Card/Product';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  align-items: center;
  overflow: hidden;
  cursor: pointer;
`;

export const ImageContainer = styled.div<Pick<ProductCardProps, 'image'>>`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  height: 15vw;
  width: 100%;

  @media (min-width: 640px) {
    height: 20vw;
  }

  @media (min-width: 768px) {
    height: 28vw;
  }

  @media (min-width: 1024px) {
    height: 18vw;
  }

  @media (min-width: 1200px) {
    height: 18vw;
  }

  @media (min-width: 1250px) {
    height: 17vw;
  }

  @media (min-width: 1300px) {
    height: 16vw;
  }

  @media (min-width: 1500px) {
    height: 15vw;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  align-items: center;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.subTitleBold};
  color: ${({ theme }) => theme.colors.black};
`;

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.darkGrey};
  ${({ theme }) => theme.fonts.captionRegular}
`;

export const ContentLine = styled.div``;
