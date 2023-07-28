import styled from 'styled-components';

export const FooterContainer = styled.footer``;

export const FooterContentContainer = styled.div`
  padding: 54px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
`;

export const FooterBottomContainer = styled.div`
  padding: 7px 20px;
  background-color: ${({ theme }) => theme.colors.primaryButton};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.captionRegular}
  text-align: center;
`;

export const ContactsInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const ContactContentContainer = styled.div`
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
export const ContactContent = styled.div`
  ${({ theme }) => theme.fonts.captionRegular};
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterTitle = styled.div`
  ${({ theme }) => theme.fonts.captionBold};
  color: ${({ theme }) => theme.colors.primaryButton};
`;

export const FooterContentItem = styled.div`
  ${({ theme }) => theme.fonts.captionRegular};
`;

export const StyledIframe = styled.iframe`
  border: 0;
  width: 200px;
  height: 200px;
  border-radius: 8px;
  /* @media (min-width: 768px) {
    height: 600px;
  } */
`;
