import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  width: 260px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
  padding: 0 30px;
`;

export const OptionsContainer = styled.div`
  margin-top: 52px;
  position: relative;
`;

export const HelpCenterContainer = styled.div<{ image: string }>`
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 291px;
  width: 100%;
  padding: 33px 22px;
  padding: 33px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  gap: 18px;
`;

export const HelpCenterTitle = styled.div`
  ${({ theme }) => theme.fonts.bodyBold};
  color: ${({ theme }) => theme.colors.black};
`;
export const HelpCenterContent = styled.div`
  ${({ theme }) => theme.fonts.captionRegular};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const HelpCenterButton = styled.div`
  ${({ theme }) => theme.fonts.bodyBold};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 12px 6px;
  border-radius: 8px;
  cursor: pointer;
`;

export const ActiveIndicator = styled.div<{ index: number }>`
  position: absolute;
  left: 0;
  top: ${(props) => `${props.index * 40}px`};
  width: 5px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primaryButton};
  transition: top 0.2s ease-in;
`;
