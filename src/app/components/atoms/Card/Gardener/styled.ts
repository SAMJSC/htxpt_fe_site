import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 311px;
`;

export const ImageContainer = styled.div<{ image: string }>`
  position: relative;
  width: 100%;
  height: 185px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  aspect-ratio: auto;
`;

export const ContentContainer = styled.div`
  margin-top: 10px;
  padding: 0 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LikeIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

export const ContentTitle = styled.div`
  ${({ theme }) => theme.fonts.title3Bold}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RatingStar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryButton};
  ${({ theme }) => theme.fonts.tagRegular};
`;

export const ContentBody = styled.div`
  margin-top: 10px;
`;

export const BodyItemContent = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BodyItem = styled.div`
  margin: 0 0 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  ${({ theme }) => theme.fonts.tagRegular}
`;
