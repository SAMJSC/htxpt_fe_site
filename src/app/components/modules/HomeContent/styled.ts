import styled from 'styled-components';

export const HomeContentContainer = styled.div`
  padding: 54px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const TopInformation = styled.div`
  display: flex;
  gap: 23px;
`;

export const NewsContainer = styled.div`
  flex: 0.6;
  max-width: 60%;
`;
export const SliderContainer = styled.div`
  flex: 0.4;
  max-width: 40%;
  height: 256px;
  max-height: 256px;
`;

export const Gardener = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const GardenerTitle = styled.div`
  ${({ theme }) => theme.fonts.title1Bold};
  color: ${({ theme }) => theme.colors.primaryButton};
`;

export const GardenerList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 13px;
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1199px) and (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 899px) and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 599px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  gap: 32px;
`;

export const LeftSide = styled.div`
  flex: 0.6;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const RightSide = styled.div`
  flex: 0.4;
  max-width: 40%;
`;

export const FruitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const FruitTitle = styled.div`
  ${({ theme }) => theme.fonts.title1Bold};
  color: ${({ theme }) => theme.colors.primaryButton};
`;
export const FruitList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
`;

export const BlogContainer = styled.div`
  position: sticky;
  top: 80px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const BlogTitle = styled.div`
  ${({ theme }) => theme.fonts.title1Bold};
  color: ${({ theme }) => theme.colors.primaryButton};
`;
export const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const TreeTitle = styled.div`
  ${({ theme }) => theme.fonts.title1Bold};
  color: ${({ theme }) => theme.colors.primaryButton};
`;
export const TreeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
`;
