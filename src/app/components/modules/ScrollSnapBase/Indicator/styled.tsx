import styled, { css } from 'styled-components';

type CustomDot = {
  active: boolean;
};

const Dot = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.primaryButton};
  color: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
`;

export const CustomDot = styled(Dot)<CustomDot>`
  ${({ active, theme }) =>
    active
      ? css`
          width: 10px;
          background-color: ${theme.colors.primaryButton};
          border-radius: 2px;
          transition: width 0.3s;
        `
      : css``}
`;

export const ContainerIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6px;

  > *:last-child {
    margin-left: 4px;
  }
`;
