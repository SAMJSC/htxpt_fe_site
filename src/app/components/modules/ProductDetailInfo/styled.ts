import styled from 'styled-components';

export const ProductDetailInfoContainer = styled.div<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});
  height: fit-content;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 33px;
`;

export const ProductDetailContentContainer = styled.div`
  z-index: 1;
  color: ${({ theme }) => theme.colors.white};
  padding: 25px 33px;
  ${({ theme }) => theme.fonts.title3Regular}
`;

export const ProductDetailImageContainer = styled.div`
  height: 100%;
`;

export const DescriptionTitle = styled.div``;

export const DemoProductImage = styled.img`
  height: 236px;
`;

export const DescriptionContainer = styled.ul`
  margin-left: 15px;
`;

export const DescriptionBullet = styled.li``;

export const ListFruits = styled.div``;
