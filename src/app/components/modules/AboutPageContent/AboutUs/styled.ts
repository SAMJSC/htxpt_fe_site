import styled from 'styled-components';

export const AboutUsContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 48px 70px;
  gap: 30px;
`;

export const TopContentContainer = styled.div`
  display: flex;
  gap: 69px;
`;

export const LeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const VisionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.title1Bold}
  color: ${({ theme }) => theme.colors.primaryButton};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const VisionContent = styled.div`
  ${({ theme }) => theme.fonts.bodyRegular}
`;

export const MissionContent = styled.div`
  ${({ theme }) => theme.fonts.bodyRegular}
`;

export const MissionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  gap: 30px;
`;

export const RightContentContainer = styled.div`
  max-width: 281px;
`;

export const CEOContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CEOImage = styled.div`
  width: 122px;
  height: 169px;
  border-radius: 10px;
  z-index: 1;
`;

export const CEODetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 262px;
  height: 132px;
  background-color: ${({ theme }) => theme.colors.primaryButton};
  margin-left: -120px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 9px;
  color: ${({ theme }) => theme.colors.white};
`;

export const CEOName = styled.div`
  ${({ theme }) => theme.fonts.bodyBold}
`;

export const RoleName = styled.div`
  ${({ theme }) => theme.fonts.bodyRegular}
`;

export const CEOInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const CEOSlogan = styled.div`
  ${({ theme }) => theme.fonts.subTitleRegular};
`;

export const HightLight = styled.span`
  ${({ theme }) => theme.fonts.subTitleBold};
  color: ${({ theme }) => theme.colors.primaryButton};
`;

export const CoreValueContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 20px;
`;
export const CoreValueContent = styled.div``;

export const ContentText = styled.div``;

export const CoreValueListItem = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const CoreValueItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  max-width: 237px;
  flex: 0 1 calc(33.33% - 20px);
  margin: 10px;

  @media (max-width: 900px) {
    flex: 0 1 calc(50% - 20px);
  }

  @media (max-width: 600px) {
    flex: 0 1 calc(100% - 20px);
  }
`;

export const CoreValueImage = styled.div<{ image: string }>`
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100px;
  aspect-ratio: 1;
  background-image: url(${(props) => props.image});
`;

export const CoreValueContentText = styled.div`
  text-align: center;
  ${({ theme }) => theme.fonts.bodyRegular};
`;

export const CoreValueTitle = styled.div`
  ${({ theme }) => theme.fonts.title3SemiBold};
  color: ${({ theme }) => theme.colors.primaryButton};
`;
