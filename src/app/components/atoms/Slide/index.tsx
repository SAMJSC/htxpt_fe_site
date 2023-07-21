import React from 'react';

import { SlideImage } from '@/app/components/atoms/News/styled';
import { SlideContainer } from '@/app/components/atoms/Slide/styled';
import { Nature } from '~/public/images';

const Slide = () => {
  return (
    <SlideContainer>
      <SlideImage image={Nature.src} />
    </SlideContainer>
  );
};

export default Slide;
