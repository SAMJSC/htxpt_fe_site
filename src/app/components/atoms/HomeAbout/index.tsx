import React from 'react';

import { HomeAboutContainer, HomeAboutImage } from '@/app/components/atoms/HomeAbout/styled';

type HomeAboutProps = {
  image: string;
};

const HomeAbout = ({ image }: HomeAboutProps): React.ReactElement => {
  return (
    <HomeAboutContainer>
      <HomeAboutImage image={image} />
    </HomeAboutContainer>
  );
};

export default HomeAbout;
