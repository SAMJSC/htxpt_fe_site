import styled from 'styled-components';

export const FruitsPageContentContainer = styled.div``;

export const FruitsTypeOptionsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 46px;
`;

export const FruitsDescriptionContainer = styled.div``;

export const FruitsDemoImage = styled.div`
  height: 100%;
`;

export const FruitImage = styled.img`
  height: 100%;
`;

export const ListFruitItems = styled.div`
  margin-top: 32px;
  display: grid;
  grid-gap: 12.5px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (min-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 1500px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;
