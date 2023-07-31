import styled from 'styled-components';

import { BlogCardProp } from '@/app/components/modules/Card/Blog';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  cursor: pointer;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: '0px 4px 4px rgba(0, 0, 0, 0.25)';
  border-radius: 8px;
  max-height: 125px;
  overflow: hidden;
`;

export const ImageContainer = styled.div<Pick<BlogCardProp, 'image'>>`
  flex: 1;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14px 12px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.bodyBold}
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ShortDescription = styled.div`
  ${({ theme }) => theme.fonts.captionRegular}
  color: #777;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
