import React from 'react';
import Slider from 'react-slick';

import { ScrollSnapBaseItem } from '@/app/components/atoms/ScrollSnapBase';
import {
  ContainerIndicator,
  CustomDot,
} from '@/app/components/atoms/ScrollSnapBase/Indicator/styled';

type IndicatorProps = {
  dataLength: ScrollSnapBaseItem[];
  index: number;
  sliderRef: React.RefObject<Slider>;
};

const Indicator = ({ dataLength, index, sliderRef }: IndicatorProps) => {
  return (
    <ContainerIndicator>
      {dataLength?.map((_e, idx) => (
        <CustomDot
          key={idx}
          active={idx === index}
          onClick={() => sliderRef.current?.slickGoTo(idx)}
        />
      ))}
    </ContainerIndicator>
  );
};

export default Indicator;
