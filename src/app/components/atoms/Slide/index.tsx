import React from 'react';

import { SlideContainer, SlideImage } from '@/app/components/atoms/Slide/styled';
import { Nature } from '~/public/images';

const Slide = (): React.ReactElement => {
  return (
    <SlideContainer>
      <SlideImage image={Nature.src} />
    </SlideContainer>
  );
};

export default Slide;
