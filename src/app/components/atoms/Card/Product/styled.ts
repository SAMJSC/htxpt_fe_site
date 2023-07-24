import styled from 'styled-components';

import { ProductCardProps } from '@/app/components/atoms/Card/Product';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
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
  ${(props) => props.image}
  height: 230px;
  min-height: 230px;
  width: 100%;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 127px;
  min-height: 127px;
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