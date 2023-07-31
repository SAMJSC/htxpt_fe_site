import styled from 'styled-components';

import Button from '@/app/components/atoms/Button';

export const GardenerDetailInformationContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  gap: 88px;
`;

export const GardenerInformationContainer = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  border-radius: 8px;
`;

export const InfoContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 10px;
`;

export const GardenerAvatar = styled.div<{ avatarImage: string }>`
  background-image: url(${(props) => props.avatarImage});
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  height: 74px;
  width: 74px;
`;

export const GardenerInfo = styled.div``;

export const GardenerNameTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.captionBold};
`;

export const GardenerName = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.subTitleBold};
`;

export const GardenInfo = styled.div`
  display: flex;
  gap: 88px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const ActionButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  padding: 2px 49px;
  &:hover {
    background-color: transparent;
  }
`;

export const InformationColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 26px;
`;

export const InformationItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

export const InfoItemContent = styled.div``;
