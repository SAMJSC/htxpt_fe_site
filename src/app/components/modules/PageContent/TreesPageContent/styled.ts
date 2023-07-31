import styled from 'styled-components';

export const TreesPageContentContainer = styled.div``;

export const ListTreeItems = styled.div`
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

export const ListProductsContainer = styled.div`
  margin-top: 32px;
`;
