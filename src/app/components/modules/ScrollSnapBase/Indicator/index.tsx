import React from 'react';

import { ScrollSnapBaseItem } from '@/app/components/modules/ScrollSnapBase';
import {
  ContainerIndicator,
  CustomDot,
} from '@/app/components/modules/ScrollSnapBase/Indicator/styled';

type IndicatorProps = {
  dataLength: ScrollSnapBaseItem[];
  index: number;
};

const Indicator = ({ dataLength, index }: IndicatorProps) => {
  return (
    <ContainerIndicator>
      {dataLength?.map((_e, idx) => (
        <CustomDot key={idx} active={idx === index} />
      ))}
    </ContainerIndicator>
  );
};

export default Indicator;
