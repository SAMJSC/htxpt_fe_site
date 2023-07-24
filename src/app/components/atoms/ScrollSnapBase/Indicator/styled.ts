import styled, { css } from 'styled-components';

type CustomDot = {
  active: boolean;
};

const Dot = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  cursor: pointer;
`;

export const CustomDot = styled(Dot)<CustomDot>`
  ${({ active }) =>
    active
      ? css`
          width: 16px;
          background-color: ${({ theme }) => theme.colors.white};
          border-radius: 8px;
          transition: width 0.3s;
        `
      : css``}
`;

export const ContainerIndicator = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;
