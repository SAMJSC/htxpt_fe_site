import styled from 'styled-components';

import { LabelSide } from '@/app/types/common';

export const Container = styled.div<{ labelSide: LabelSide }>`
  width: fit-content;
  display: flex;
  flex-direction: ${(props) => (props.labelSide === 'left' ? 'row-reverse' : 'row')};
  gap: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Label = styled.label`
  cursor: pointer;
`;
